import { Card, Col, Row } from "react-bootstrap"
import tobegin from '../../assets/download.jpg'
import './home.css'
const ToBegin =()=>{
    return(
        <>
<div >
  <Row>
    <Col>
      <Card className="bg-dark text-white">
        <Card.Img src={tobegin} style={{height:'30vw'}}  alt="Card image" />
          <Card.ImgOverlay>
              <h1 className="mt-1">Create a CV</h1>
             <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
      </Card>
    </Col>
</Row>
</div>
</>
    )
}

export default ToBegin
