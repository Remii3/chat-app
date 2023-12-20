const mongoose = require('mongoose');
const { ChatMessage } = require('../models/ChatMessage');

const createMessage = async (req, res) => {
  try {
    const newMessage = await ChatMessage.create(req.body);
    return res.status(201).json(newMessage);
  } catch (error) {
    return res.status(409).json({
      message: error.message,
    });
  }
};

const getMessages = async (req, res) => {
  try {
    const chatRoomId = new mongoose.Types.ObjectId(req.params.chatRoomId);
    const messages = await ChatMessage.find({
      chatRoomId,
    });
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(409).json({
      message: error.message,
    });
  }
};

module.exports = { createMessage, getMessages };
