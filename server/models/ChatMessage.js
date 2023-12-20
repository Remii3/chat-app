const mongoose = require('mongoose');

const ChatMessageSchema = new mongoose.Schema(
  {
    chatRoomId: mongoose.Types.ObjectId,
    sender: String,
    message: String,
  },
  { timestamps: true },
);

const ChatMessage = mongoose.model('ChatMessage', ChatMessageSchema);

module.exports = { ChatMessage, ChatMessageSchema };
