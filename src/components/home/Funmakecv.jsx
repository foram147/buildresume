import React from "react";
import MakeCV from "./MakeCV";
import { useNavigate } from "react-router";


export default function(props) {
    const navigate = useNavigate();
  
    return <MakeCV {...props} navigate={navigate} />;
}