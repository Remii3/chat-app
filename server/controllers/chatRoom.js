const ChatRoom = require('../models/ChatRoom');

const createChatRoom = async (req, res) => {
  try {
    const newChatRoom = await ChatRoom.create({
      members: [req.body.senderId, req.body.receiverId],
    });
    return res.status(201).json(newChatRoom);
  } catch (error) {
    return res.status(409).json({
      message: error.message,
    });
  }
};

const getChatRoomOfUser = async (req, res) => {
  try {
    const chatRoom = await ChatRoom.find({
      members: { $in: [req.params.userId] },
    });
    return res.status(200).json(chatRoom);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

const getChatRoomOfUsers = async (req, res) => {
  try {
    const chatRoom = await ChatRoom.find({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    return res.status(200).json(chatRoom);
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

module.exports = { createChatRoom, getChatRoomOfUser, getChatRoomOfUsers };
