import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgaP1E5X-ielAWYGp0w4a4lzSLP0pAweU",
  authDomain: "authproject-8ff06.firebaseapp.com",
  projectId: "authproject-8ff06",
  storageBucket: "authproject-8ff06.appspot.com",
  messagingSenderId: "390061065228",
  appId: "1:390061065228:web:e25dbea33845b41b461a29",
  measurementId: "G-GBRNP03NTS",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
