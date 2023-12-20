const auth = require('../config/firebase');

const getAllUsers = async (req, res) => {
  const maxResults = 10;
  let users = [];
  try {
    const userRecords = await auth.listUsers(maxResults);
    userRecords.users.forEach(user => {
      const { uid, email, displayName, photoURL } = user;
      users.push({ uid, email, displayName, photoURL });
    });
    console.log(users);
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const userRecord = await auth.getUser(req.params.userId);
    const { uid, email, displayName, photoURL } = userRecord;
    return res.status(200).json({ uid, email, displayName, photoURL });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllUsers, getUser };
