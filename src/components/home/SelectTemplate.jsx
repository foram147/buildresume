//import {BsFillArrowDownCircleFill} from 'react-bootstrap-icons'
import React from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import {Row,Col, Card} from "react-bootstrap";
import cv4 from "../../assets/cv4.png"
import cv5 from "../../assets/cv5.png"
import cv6 from "../../assets/cv6.png"
import cv7 from "../../assets/cv7.png"


const SelectTemplate =()=>{

  const Templates =[
    { Name:"Classic",
      Image: cv4
    },
    {
      Name:"Modern",
      Image: cv5
    },
    { Name:"Student",
      Image: cv6
    },
    { Name:"Design",
      Image: cv7},
  ]

return(
    <>
  <div>
<p className="my-5" style={{"textAlign":"center"}}><h1 ><BsFillArrowDownCircleFill />

CHOOSE A TEMPLATE

<BsFillArrowDownCircleFill/></h1> </p>
<Row xs={1} lg={4} md={2}className="g-4 my-2">
  {Templates.map((props) => (
    <Col>
      <Card style={{ width: '15rem' }}>
      
          <p style={{"textAlign":"center"}}><Card.Title>{props.Name}</Card.Title></p>
         
        
        <Card.Img variant="top" src={props.Image} />
        
      </Card>
    </Col>
  ))}
</Row>
</div>
</>
)
}

export default SelectTemplate