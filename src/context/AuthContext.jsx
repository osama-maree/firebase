import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,//build in fire base to create account 
  onAuthStateChanged,// from firebase to know state of user if logout or defferent user
  signOut,//buld in firesbase to logout
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword,
  updateEmail,
} from "firebase/auth";
import auth from "../firebase";//get data from my file js contain app firebase
import { useEffect } from "react";//to handel if changed state of user
import { useContext } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //this method 
  const logout = () => {
    return signOut(auth);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const updateemail=(email)=>{
    return updateEmail(auth.currentUser,email)
  }
  const updatepassword=(password)=>{
    return updatePassword(auth.currentUser,password)
  }
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unSubcribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{updatepassword, updateemail,resetPassword, currentUser, signup, logout, login }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
