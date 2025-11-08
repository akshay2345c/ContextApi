import React from "react"
import { createContext, useContext, useState } from "react";

 const AuthContext = createContext();
 
 export const Authprovider = ({children})=>{
    const [username, setUsername] = useState("Enter Your name ");
  const [password, setPassword] = useState("****");

    return (
        <AuthContext.Provider value = {{username, setUsername, password, setPassword}}>{children}</AuthContext.Provider>
    )
 }
 export const useAuth = ()=> useContext(AuthContext)
 

 