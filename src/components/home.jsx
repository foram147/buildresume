import React from "react";
import GetStart from "./home/GetStart";

import SelectTemplate from "./home/SelectTemplate";
import ToBegin from "./home/ToBegin";

import { Container,Row,Col } from "react-bootstrap";
import HomeNav from "./HomeNav";
import FooterPart from "./FooterPart";


const home = () => {
return(
  <>
  <Container>
    <Row>
      <Col>
      <HomeNav/>
      
      <ToBegin/>
      <SelectTemplate/>
      <FooterPart/>
      </Col>
    </Row>


</Container>
</>
);
}

export default home