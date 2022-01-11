//import {BsFillArrowDownCircleFill} from 'react-bootstrap-icons'
import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import {Row,Col, Card} from "react-bootstrap";

const SelectTemplate =()=>{
return(
    <>
  <div>
<h1 ><BsFillArrowDownCircleFill />
CHOOSE A TEMPLATE
<BsFillArrowDownCircleFill/></h1>
<Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
</div>
</>
)
}

export default SelectTemplate