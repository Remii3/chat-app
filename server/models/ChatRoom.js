const mongoose = require('mongoose');

const ChatRoomSchema = new mongoose.Schema(
  {
    members: Array,
  },
  { timestamps: true },
);

const ChatRoom = mongoose.model('ChatRoom', ChatRoomSchema);

module.exports = { ChatRoom, ChatRoomSchema };
