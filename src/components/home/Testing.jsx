import {Accordion,Container,Row,Col,Form, FormControl,Button,Card} from "react-bootstrap"
import HomeNav from "../HomeNav"
import FooterPart from "../FooterPart"
import  OverlayTrigger from "react-bootstrap/OverlayTrigger"
import  Tooltip from "react-bootstrap/Tooltip"
import "../home.css"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useFormik } from "formik"
import * as yup from "yup"


const Testing =(props)=>{
 const {id} = useParams(props)   
 const [isAddMediaClicked,setAddMediaClicked] = useState(false);
const [file,setFile]=useState(null)
const [fileName, setFileName] = useState("Uploas image")
const [isFileUploaded, setFileUploaded] = useState(false)

let formData = new FormData()

async function uploadImage(userId,file){
  try{
    let response = await fetch(`http://localhost:3001/user${userId}/picture`,
    {
      method:"POST",
      body:file,
    }
    );
    if(response.ok){
      let responseData = await response.json()
      console.log(responseData)
    }
  }catch(error){
    console.log(error)
  }
}

async function submitData(body,file){
  try{
    let response = await fetch(`http://localhost:3001/user`,
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify(body)
    })
    if(response.ok){
      let responseJSON = await response.json()
      if(isFileUploaded){
        uploadImage(responseJSON._id,file)
      }
    }

  }catch(error){
    console.log(error)
  }
}

const {values,
  handleChange,
  handleSubmit, 
  errors,isValid,} = useFormik({
    initialValues:{
      image:"",
      name:"",
      job:"",
      postaladdress:"",
      email:"",
      mobile:"",
      dob:"",
      personalstatement:"",
      skills:"",
      hobbies:"",
      expstartdate:"",
      expenddate:"",
      expposition:"",
      expcompany:"",
      expjobrole:"",
      edustartdate:"",
      eduenddate:"",
      edudegree:"",
      eduinstitution:"",
      educourse:""


    },
    onSubmit: (values) =>{
      submitData(values, file)
      alert(JSON.stringify(values))
      
    }
  })

  

  return(
      
  <div>
    
     <HomeNav/>
     <Container style={{height:"100%", width:"100%"}}>
     <Row>
       <Col>
       <Form onSubmit={handleSubmit} >
           <Accordion  defaultActiveKey="0" alwaysOpen>
            <Accordion.Item eventKey="0">
            <Accordion.Header>Profile</Accordion.Header>
            <Accordion.Body>
            <Form>

            <Button
                      className="default-btn-style ml-2"
                      variant="outline-primary"
                      onClick={() => {
                        setAddMediaClicked(true);
                      }}
                    >
                      {" "}
                      + Add Media
                    </Button>{" "}
                    {isAddMediaClicked &&
                      <Form.Group>
                        <FormControl
                          type="file"
                          id="userImageUpload2"
                          label={fileName}
                          onChange={(e) => {
                            setFileName(e.target.files[0].filename);
                            setFileUploaded(true)
                            formData.append("user", e.target.files[0]);
                            setFile(formData);
                          }}
                          custom
                          style={{ width: "30vw" }}
                        ></FormControl>
                      </Form.Group>
                    }

              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                  <OverlayTrigger 
                    placement = "bottom"
                    overlay={(props) =>(
                    <Tooltip {...props}>Enter your Name and Surname Ex. John Doe
                    </Tooltip>
                  )}>
                    <Form.Control name="name" type="name" value={values.name} />
                  </OverlayTrigger>
              </Form.Group>

  <Form.Group className="mb-3" controlId="formJob">
    <Form.Label>Your Job</Form.Label>
    <Form.Control type="job" name="job" value={values.job} onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formAddress">
    <Form.Label>Postal Address</Form.Label>
    <Form.Control type="text" name="postaladdress" value={values.postaladdress} onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" name="email" value={values.email} onChange={handleChange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formContact">
    <Form.Label>Contact No</Form.Label>
    <Form.Control type="text" name="mobile" value={values.mobile} onChange={handleChange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formDOB">
    <Form.Label>Date Of Birth</Form.Label>
    <Form.Control type="date" name="dob" value={values.dob} onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formPersonalStatement">
    <Form.Label>Personal Statement</Form.Label>
    <Form.Control as = "textarea" name="personalstatement" value={values.personalstatement} onChange={handleChange}/>
  </Form.Group>


</Form>
    </Accordion.Body>
              </Accordion.Item>
            <Accordion.Item eventKey="1">
    <Accordion.Header>2 SKILLS & HOBBIES</Accordion.Header>
    <Accordion.Body>
    <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Skills</Form.Label>
                  <OverlayTrigger 
                    placement = "bottom"
                    overlay={(props) =>(
                    <Tooltip {...props}>Enter your Name and Surname Ex. John Doe
                    </Tooltip>
                  )}>
                    <Form.Control name="skills" type="name" value={values.skills} onChange={handleChange} />
                  </OverlayTrigger>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Hobbies</Form.Label>
                  <OverlayTrigger 
                    placement = "bottom"
                    overlay={(props) =>(
                    <Tooltip {...props}>Enter your Name and Surname Ex. John Doe
                    </Tooltip>
                  )}>
                    <Form.Control name="hobbies" type="name" value={values.hobbies} onChange={handleChange} />
                  </OverlayTrigger>
              </Form.Group>
    </Accordion.Body>
              </Accordion.Item>

   <Accordion.Item eventKey="2">
    <Accordion.Header>3 Professional Experience</Accordion.Header>
    <Accordion.Body>
    <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Start Date</Form.Label>
                  
                    <Form.Control name="expstartdate" type="date" value={values.expstartdate} onChange={handleChange} />
                 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>End Date</Form.Label>
                  
                    <Form.Control name="expenddate" type="date" value={values.expenddate} onChange={handleChange} />
                  
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Position Held</Form.Label>
                  
                    <Form.Control name="expposition" type="text" value={values.expposition} onChange={handleChange} />
                 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Company</Form.Label>
                  
                    <Form.Control name="expcompany" type="text" value={values.expcompany} onChange={handleChange} />
                 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Job Description</Form.Label>
                  
                    <Form.Control name="expjobrole" type="text" value={values.expjobrole} onChange={handleChange} />
                 
              </Form.Group>
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="3">
    <Accordion.Header>4 Educational Background</Accordion.Header>
    <Accordion.Body>
    <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Start Date</Form.Label>
                  
                    <Form.Control name="edustartdate" type="date" value={values.edustartdate} onChange={handleChange} />
                 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>End Date</Form.Label>
                  
                    <Form.Control name="eduenddate" type="date" value={values.eduenddate} onChange={handleChange} />
                  
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Degree/ Qualification</Form.Label>
                  
                    <Form.Control name="edudegree" type="text" value={values.edudegree} onChange={handleChange} />
                  
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Institution</Form.Label>
                  
                    <Form.Control name="eduinstitution" type="text" value={values.eduinstitution} onChange={handleChange} />
                  
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Course Description</Form.Label>
                  
                    <Form.Control name="educourse" type="text" value={values.educourse} onChange={handleChange} />
                  
              </Form.Group>
    </Accordion.Body>
  </Accordion.Item>


            </Accordion>
            </Form>
            <Button
                        className="default-btn-style ml-auto mr-2"
                        variant="primary"
                        type="submit"
                        disabled={isValid ? false : true}
                        style={
                          ({ color: "white" }, { backgroundColor: "blue" })
                        }
                        onClick={submitData()}
                       
                      >
                        Save
                      </Button>{" "}
            </Col>
            <Col className="w-100">
            <>
            <Container >
              <Row className="w-100">
                <Col>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={values.image} />
                  <Card.Body>
                  <Card.Title>Name  {values.name}</Card.Title>
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


