import React from "react";
import Login from "./Login";
import { useNavigate } from "react-router";


export default function(props) {
    const navigate = useNavigate();
  
    return <Login {...props} navigate={navigate} />;
}
/*export default Funlogin=(props)=>{
    const navigation = useNavigate();
    return(
        <Login  navigation={navigation}/>)
}*/