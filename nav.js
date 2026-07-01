import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB3Gw4xewnQcWIxV2Lpvdazv8B91hjTSMY",
  authDomain: "qss-seychelles.firebaseapp.com",
  projectId: "qss-seychelles",
  storageBucket: "qss-seychelles.firebasestorage.app",
  messagingSenderId: "311912771535",
  appId: "1:311912771535:web:834c037a2f5477be5d6cba",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
