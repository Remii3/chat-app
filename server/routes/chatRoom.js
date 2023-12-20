const express = require('express');

const router = express.Router();

const {
  createChatRoom,
  getChatRoomOfUser,
  getChatRoomOfUsers,
} = require('../controllers/chatRoom');

router.post('/', createChatRoom);

router.get('/:userId', getChatRoomOfUser);
router.get('/:firstUserId/:secondUserId', getChatRoomOfUsers);

module.exports = router;
