import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAdJWFGThZ2EJrNlqhGZwVl16NAv_lGjY0",
  authDomain: "auth-production-27366.firebaseapp.com",
  projectId: "auth-production-27366",
  storageBucket: "auth-production-27366.appspot.com",
  messagingSenderId: "678619780044",
  appId: "1:678619780044:web:02427b59825504d36b8369",
});

export const auth = app.auth();
export default app;
