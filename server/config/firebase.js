const { cert, initializeApp } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const serviceAccountKet = require('./serviceAccountKey.json');

const app = initializeApp({
  credential: cert(serviceAccountKet),
});

const auth = getAuth(app);

module.exports = auth;
