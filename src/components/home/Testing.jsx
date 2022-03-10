import {Accordion,Container,Row,Col,Form, FormControl,Button,Card} from "react-bootstrap"
import HomeNav from "../HomeNav"
import FooterPart from "../FooterPart"
import  OverlayTrigger from "react-bootstrap/OverlayTrigger"
import  Tooltip from "react-bootstrap/Tooltip"
import "../home.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useFormik } from "formik"
import * as yup from "yup"
import Funprofile from "./Funprofile"
import Skills from "./Skills"
import Experience from "./Experience"
import Education from "./Education"
import Profile from "./Profile"



const Testing =(props)=>{
 const {id} = useParams(props)  
 const [isAddMediaClicked,setAddMediaClicked] = useState(false);
const [file,setFile]=useState(null)
const [fileName, setFileName] = useState("Uploas image")
const [isFileUploaded, setFileUploaded] = useState(false)
const token = localStorage.getItem('accessToken');
let formData = new FormData()

console.log("ID FROM TESTING",id)






const {values,
  handleChange,
  handleSubmit, 
  errors,isValid,} = useFormik({
    initialValues:{
      image:"",
      postaladdress:"",
      mobile:"",
      dob:"",
      personalstatement:"",
      skills:[],
      hobbies:[],
      experience:[{
        expstartdate:"",
        expenddate:"",
        expposition:"",
        expcompany:"",
        expjobrole:"",
      }],
     education:[{
      edustartdate:"",
      eduenddate:"",
      edudegree:"",
      eduinstitution:"",
      educourse:""
     }]
      


    },
    onSubmit: (values) =>{
      // submitData(values, file)
      alert(JSON.stringify(values))
      
    }
  })


  return(
      
  <div>
    
     <HomeNav/>
     <Container style={{height:"100%", width:"100%"}}>
      <Row>
       <Col>
       
           <Accordion  defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item eventKey="0">
            <Accordion.Header>Profile</Accordion.Header>
            <Accordion.Body>
            
            <Profile id={id}/>
             
            </Accordion.Body>
              </Accordion.Item>
            <Accordion.Item eventKey="1">
            <Accordion.Header>2 SKILLS & HOBBIES</Accordion.Header>
            <Accordion.Body>
            <Skills id={id} />
            </Accordion.Body>
              </Accordion.Item>

              
            <Accordion.Item eventKey="3">
            <Accordion.Header>3 Educational Background</Accordion.Header>
            <Accordion.Body>
            <Education id={id}/>
            </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
            <Accordion.Header>4 Professional Experience</Accordion.Header>
            <Accordion.Body>
              <Experience id={id}/>
            </Accordion.Body>
             </Accordion.Item>


            </Accordion>
           
             
           
            </Col>
        <Col className="w-100">
            <>
            <Container >
              <Row className="w-100">
                <Col>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={values.image} />
                  <Card.Body>
                  <Card.Title>Name  {props.name}</Card.Title>
                  <Card.Title>Job{values.job}</Card.Title>
                 <Card.Text>Address{values.postaladdress}  </Card.Text>
                 <Card.Text>Email{values.email}  </Card.Text>
                 <Card.Text>Mobile{values.mobile}  </Card.Text>
                 <Card.Text>Date of Birth{values.dob}  </Card.Text>
                 <Card.Text>Skills{values.skills}  </Card.Text>
                 <Card.Text>Hobbies{values.hobbies}  </Card.Text>
                </Card.Body>
                  </Card>
                </Col>
                <Col>
                <Form>
                <Form.Group>
    <Form.Label>Personal Statement</Form.Label>
    <Form.Control value={values.personalstatement} disabled />
  </Form.Group>
  <Form.Group >
    <Form.Label>Professional Experience</Form.Label>
    <Row>
      <Col><Form.Control value={values.expstartdate} disabled />
      <Form.Control value={values.expenddate} disabled /></Col>
      <Col><Row><Col><Form.Control value={values.expposition} disabled /></Col>
      <Col><Form.Control value={values.expcompany} disabled />
      </Col></Row>
      <Row>
      <Form.Control value={values.expjobrole} disabled /></Row></Col>
    </Row>
    
  </Form.Group>
                </Form>
                </Col>
              </Row>
            </Container>
</>
            </Col>
      </Row>  
      </Container>
      <FooterPart/>
      </div>
    )
}

export default Testing


