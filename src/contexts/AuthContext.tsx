"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

type UserType = "Passenger" | "Pet Owner" | "Driver" | "Admin" | null;

type AuthContextType = {
  user: User | null;
  userType: UserType;
  isLoading: boolean;
  signUp: (
    email: string,
    password: string,
    userType: UserType
  ) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  // Add other methods as needed
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userType, setUserType] = useState<UserType>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
        const userData = userDoc.data();
        if (userData) {
          setUserType(userData.userType as UserType);
        }
      } else {
        setUserType(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (
    email: string,
    password: string,
    userType: UserType
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email,
        userType,
        signUpPlatform: "web",
        approvalStatus: userType === "Driver" ? "Pending" : "Approved",
      });
      setUserType(userType);
    } catch (error) {
      console.error("Error in signUp:", error);
      throw error;
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
      const userData = userDoc.data();
      if (userData) {
        setUserType(userData.userType as UserType);
      }
    } catch (error) {
      console.error("Error in signIn:", error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setUser(null);
      setUserType(null);
    } catch (error) {
      console.error("Error in signOut:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, userType, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
