import { createContext, useState , useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from 'firebase/auth';
import {auth} from '../firebaseConfig'
 export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const registerUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth , email, password)

    }
    const loginUser =(email, password)=>{
        return signInWithEmailAndPassword(auth , email, password)

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser.email);
          setUser(currentUser.email);
        });
        return () => {
          unsubscribe();
        };
      }, []);


    return (
        <AuthContext.Provider value={{ user, setUser , registerUser , loginUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;