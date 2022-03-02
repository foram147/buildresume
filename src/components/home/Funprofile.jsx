import React from "react";
import Profile from "./Profile";
import { useNavigate } from "react-router";


export default function(props) {
    const navigate = useNavigate();
    console.log(props)
    return <Profile {...props} navigate={navigate} />;
}