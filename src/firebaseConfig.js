import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBKWhpET06VPD8UBmlVMY5CAs2KCCXUWSw",
    authDomain: "protectedroutesauthentiaction.firebaseapp.com",
    projectId: "protectedroutesauthentiaction",
    storageBucket: "protectedroutesauthentiaction.appspot.com",
    messagingSenderId: "1037653373152",
    appId: "1:1037653373152:web:f101ab2b95770556b5e085",
    measurementId: "G-WZYKQL2Z5N"
  };
   const app= initializeApp(firebaseConfig);
   export const  auth = getAuth(app);
   export default app;