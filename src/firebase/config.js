import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC023-b-UbiSNQkysVY-ZH0UOtas4UH4PM",
    authDomain: "miniblog-6547f.firebaseapp.com",
    projectId: "miniblog-6547f",
    storageBucket: "miniblog-6547f.appspot.com",
    messagingSenderId: "536050579137",
    appId: "1:536050579137:web:c4515fb827189cd3088640"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };