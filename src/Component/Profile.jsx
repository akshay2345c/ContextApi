import React from "react";
import { useAuth } from "../Context/AuthContext"
const Profile = () => {
   
    const { username, password } = useAuth();
    return (
        <div>
            <h1>Welcome {username}</h1>
            <p>your password is {password}</p>
        </div>
    )
}
export default Profile