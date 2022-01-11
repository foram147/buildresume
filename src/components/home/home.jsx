import React from "react";
import GetStart from "./GetStart";
import HomeNav from "./HomeNav";
import SelectTemplate from "./SelectTemplate";
import ToBegin from "./ToBegin";
import FooterPart from "./FooterPart";
import { Container } from "react-bootstrap";
const home = () => {
return(
  <>
  
<HomeNav/>
<ToBegin/>
<SelectTemplate/>
<FooterPart/>

</>
);
}

export default home