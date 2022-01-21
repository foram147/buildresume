import {Accordion,Container,Row,Col,Form, Button} from "react-bootstrap"
import HomeNav from "../HomeNav"
import  OverlayTrigger from "react-bootstrap/OverlayTrigger"
import  Tooltip from "react-bootstrap/Tooltip"
import "../home.css"
const Testing =()=>{
    
  return(
      
  <div>
     <HomeNav/>
     
     <Row xs={12} md={2} className="mt-2">

     <Col sm={12} md={4}  className="LeftSide Sharedspace px-2 ">
       <Row>
          <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
          </Form>
        </Row>
        </Col>

        <Col sm={12} md={7} className="RightSide Sharedspace px-2">
           <Row>
           <Accordion  defaultActiveKey="0">
            <Accordion.Item eventKey="0">
            <Accordion.Header>Profile</Accordion.Header>
            <Accordion.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                  <OverlayTrigger 
                    placement = "bottom"
                    overlay={(props) =>(
                    <Tooltip {...props}>Enter your Name and Surname Ex. John Doe
                    </Tooltip>
                  )}>
                    <Form.Control type="name"/>
                  </OverlayTrigger>
              </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Your Job</Form.Label>
    <Form.Control type="job" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Postal Address</Form.Label>
    <Form.Control type="address" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Contact No</Form.Label>
    <Form.Control type="number" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Date Of Birth</Form.Label>
    <Form.Control type="date" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Personal Statement</Form.Label>
    <Form.Control as = "textarea" />
  </Form.Group>


</Form>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
            </Accordion>
            </Row>
     </Col>
       
      </Row>
      </div>
    )
}

export default Testing


