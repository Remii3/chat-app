import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDOsG2NjV6UnrZM8fc-FMy98vg40C4bAQQ',
  authDomain: 'chat-app-9edbe.firebaseapp.com',
  projectId: 'chat-app-9edbe',
  storageBucket: 'chat-app-9edbe.appspot.com',
  messagingSenderId: '1015302983816',
  appId: '1:1015302983816:web:6b89d8ee9a3e3e1fafcf3d',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
