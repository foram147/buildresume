import {Accordion,Container,Row,Col,Form, FormControl,Button} from "react-bootstrap"
import HomeNav from "../HomeNav"
import FooterPart from "../FooterPart"
import  OverlayTrigger from "react-bootstrap/OverlayTrigger"
import  Tooltip from "react-bootstrap/Tooltip"
import "../home.css"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useFormik } from "formik"

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
      name:"",
      job:"",
      postaladdress:"",
      email:"",
      mobile:"",
      dob:"",
      personalstatement:"",
      skills:"",
      hobbies:"",
      experience:"",
      education:"",
    },
    onSubmit: (values,{resetForm}) =>{
      submitData(values, file)
      alert(JSON.stringify(values))
      resetForm()
    }
  })

  return(
      
  <div>
    
     <HomeNav/>
     <Container style={{height:"100%", width:"100%"}}>
     <Row>
       <Col>
           <Accordion  defaultActiveKey="0" alwaysOpen>
            <Accordion.Item eventKey="0">
            <Accordion.Header>Profile</Accordion.Header>
            <Accordion.Body>
            <Form onSubmit={handleSubmit}>

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
                    <Form.Control name="name" type="name" value={values.name} onChange={handleChange} />
                  </OverlayTrigger>
              </Form.Group>

  <Form.Group className="mb-3" controlId="formJob">
    <Form.Label>Your Job</Form.Label>
    <Form.Control type="job" name="job" value={values.job} onChange={handleChange}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formAddress">
    <Form.Label>Postal Address</Form.Label>
    <Form.Control type="text" name="address" value={values.postaladdress} onChange={handleChange}/>
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
    <Form.Control as = "textarea" name="personalatatement" value={values.personalstatement} onChange={handleChange}/>
  </Form.Group>
 <Button
                        className="default-btn-style ml-auto mr-2"
                        variant="primary"
                        type="submit"
                        disabled={isValid ? false : true}
                        style={
                          ({ color: "white" }, { backgroundColor: "blue" })
                        }
                      >
                        Save
                      </Button>{" "}

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
                    <Form.Control name="name" type="name" value={values.name} onChange={handleChange} />
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
                    <Form.Control name="name" type="name" value={values.name} onChange={handleChange} />
                  </OverlayTrigger>
              </Form.Group>
    </Accordion.Body>
              </Accordion.Item>

   <Accordion.Item eventKey="2">
    <Accordion.Header>3 Professional Experience</Accordion.Header>
    <Accordion.Body>
    <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Start Date</Form.Label>
                  
                    <Form.Control name="name" type="date" value={values.name} onChange={handleChange} />
                 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>End Date</Form.Label>
                  
                    <Form.Control name="name" type="date" value={values.name} onChange={handleChange} />
                  
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Position Held</Form.Label>
                  
                    <Form.Control name="name" type="text" value={values.name} onChange={handleChange} />
                 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Company</Form.Label>
                  
                    <Form.Control name="name" type="text" value={values.name} onChange={handleChange} />
                 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Job Description</Form.Label>
                  
                    <Form.Control name="name" type="text" value={values.name} onChange={handleChange} />
                 
              </Form.Group>
    </Accordion.Body>
  </Accordion.Item>


  <Accordion.Item eventKey="3">
    <Accordion.Header>4 Educational Background</Accordion.Header>
    <Accordion.Body>
    <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Start Date</Form.Label>
                  
                    <Form.Control name="name" type="date" value={values.name} onChange={handleChange} />
                 
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>End Date</Form.Label>
                  
                    <Form.Control name="name" type="date" value={values.name} onChange={handleChange} />
                  
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Degree/ Qualification</Form.Label>
                  
                    <Form.Control name="name" type="text" value={values.name} onChange={handleChange} />
                  
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Institution</Form.Label>
                  
                    <Form.Control name="name" type="text" value={values.name} onChange={handleChange} />
                  
              </Form.Group>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Course Description</Form.Label>
                  
                    <Form.Control name="name" type="text" value={values.name} onChange={handleChange} />
                  
              </Form.Group>
    </Accordion.Body>
  </Accordion.Item>


            </Accordion>
            </Col>
            <Col className="w-100">
            <>
  <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control  value={values.name} />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Disabled select menu</Form.Label>
    <Form.Select disabled>
      <option>Disabled select</option>
    </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Check type="checkbox" label="Can't check this" disabled />
  </Form.Group>
</>
            </Col>
            </Row>  
      </Container>
      <FooterPart/>
      </div>
    )
}

export default Testing


