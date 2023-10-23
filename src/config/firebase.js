
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

//Aqui vocês devem colocar as suas credenciais
const firebaseConfig = {
  apiKey: "AIzaSyCTIsRN9WPfyPxtsaWZikdk0THz8VLDGsc",
  authDomain: "jadyananda513.firebaseapp.com",
  projectId: "jadyananda513",
  storageBucket: "jadyananda513.appspot.com",
  messagingSenderId: "275748171189",
  appId: "1:275748171189:web:9f477b538a9c37ec8a3dfc",
  measurementId: "G-DXWY9MSGW4"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app)
const db = getFirestore(app);
export { app, auth, db }