import React from "react";
import Login from "./Login";
import { useNavigate } from "react-router";


export default function() {
    const navigate = useNavigate();
  
    return <Login navigate={navigate} />;
}
