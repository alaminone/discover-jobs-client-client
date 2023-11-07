import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
   
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from 'firebase/auth';
  import { createContext, useEffect, useState } from 'react';
import { auth } from '../Routs/firebase/Firebase.config';
  
  
  
  export const AuthContext = createContext();

  
  
  // eslint-disable-next-line react/prop-types
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    const createUser = (email, password) => {
      setIsLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const login = (email, password) => {
      setIsLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const logInGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
          const result = await signInWithPopup(auth, provider);
          setUser(result.user);
        } catch (error) {
          console.error(error);
        }
      };
  
    const logout = () => {
      setIsLoading(true);
      return signOut(auth);
      
    };
  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setIsLoading(false);
      });
  
      return () => {
        return unSubscribe();
      };
    }, []);
  
    const values = { createUser, login, user, isLoading, logout, logInGoogle };
  
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
  };
  
 
  
  export default AuthProvider;
  