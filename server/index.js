const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Server } = require('socket.io');
require('./config/mongo');
const { VerifyToken, VerifySocketToken } = require('./middlewares/VerifyToken');
const chatRoomRoutes = require('./routes/chatRoom');
const chatMessageRoutes = require('./routes/chatMessage');
const userRoutes = require('./routes/user');

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(VerifyToken);

const PORT = process.env.PORT || 8080;

app.use('/api/room', chatRoomRoutes);
app.use('/api/message', chatMessageRoutes);
app.use('/api/user', userRoutes);
const server = app.listen(PORT, () => {
  console.log(`
    Server listening on port ${PORT}
    `);
});
const io = new Server(server, {
  cors: {
    origin: process.env.LOCATION,
    credentials: true,
  },
});

io.use(VerifySocketToken);

global.onlineUsers = new Map();

const getKey = (map, val) => {
  for (let [key, value] of map.entries()) {
    if (value === val) return key;
  }
};

io.on('connection', socket => {
  global.chatSocket = socket;

  socket.on('addUser', userId => {
    onlineUsers.set(userId, socket.id);
    socket.emit('getUsers', Array.from(onlineUsers));
  });
  socket.on('sendMessage', ({ senderId, receiverId, message }) => {
    const sendUserSocket = onlineUsers.get(receiverId);

    if (sendUserSocket) {
      socket.to(sendUserSocket).emit('getMessage', {
        senderId,
        message,
      });
    }
  });
  socket.on('disconnect', () => {
    const userId = getKey(onlineUsers, socket.id);
    onlineUsers.delete(userId);
  });
});
