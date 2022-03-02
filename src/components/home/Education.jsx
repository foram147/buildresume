import  OverlayTrigger from "react-bootstrap/OverlayTrigger"
import  Tooltip from "react-bootstrap/Tooltip"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Form ,Button} from "react-bootstrap"
import { useNavigate } from "react-router";

const Education = (props)=>{
    const {id} = useParams()
    const [education,setEducation] = useState({
      degree:"",
      institution:"",
      course:"",
      startDate:"",
      endDate:""
    })
    const navigate = useNavigate();
   // const [educations,setEducations] = useState([{}])
    console.log("education id", id)

async function saveEducation(){

    try{
        
        let response = await fetch(`http://localhost:3001/profile/${id}/education`,
        {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(education)
        })
        if(response.ok){
            let responseJSON = await response.json()
            console.log("education  added----", responseJSON)
            navigate(`/experience/${id}`)
        }

    }catch(error){
        console.log(error)
    }
}

const handleSubmit = (event)=>{
 // console.log(education)
        event.preventDefault();
        saveEducation()
    }

 return(
     <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formSkills">
    <Form.Label>Degree</Form.Label>
      <OverlayTrigger 
        placement = "bottom"
        overlay={(props) =>(
        <Tooltip {...props}>Enter your Degree
        </Tooltip>
      )}>
        <Form.Control name="degree" type="degree" value={education.degree}
         onChange={(e) => setEducation({
           ...education,
           degree: e.target.value
         })} />
      </OverlayTrigger>
     
      <Form.Label>Institution</Form.Label>
      <OverlayTrigger 
        placement = "bottom"
        overlay={(props) =>(
        <Tooltip {...props}>Enter your Institution Name
        </Tooltip>
      )}>
        <Form.Control name="institution" type="institution" value={education.institution}
         onChange={(e) => setEducation({
           ...education,
           institution: e.target.value
         })} />
      </OverlayTrigger>
      
      <Form.Label>Course</Form.Label>
      <OverlayTrigger 
        placement = "bottom"
        overlay={(props) =>(
        <Tooltip {...props}>Enter your Position
        </Tooltip>
      )}>
        <Form.Control name="course" type="course" value={education.course}
         onChange={(e) => setEducation({
           ...education,
           course:e.target.value})} />
      </OverlayTrigger>


      <Form.Label>Start Date</Form.Label>
      <OverlayTrigger 
        placement = "bottom"
        overlay={(props) =>(
        <Tooltip {...props}>Enter your Education start date
        </Tooltip>
      )}>
        <Form.Control name="startdate" type="date" value={education.startDate}
         onChange={(e) => setEducation({
           ...education,
           startDate: e.target.value})} />
      </OverlayTrigger>

      <Form.Label>End Date</Form.Label>
      <OverlayTrigger 
        placement = "bottom"
        overlay={(props) =>(
        <Tooltip {...props}>Enter your Education end date
        </Tooltip>
      )}>
        <Form.Control name="educations" type="date" value={education.endDate}
         onChange={(e) => setEducation({
           ...education,
           endDate: e.target.value})} />
      </OverlayTrigger>

      
      <Button
              style={{
                borderRadius: "50%",
                height: "35px",
                marginLeft: "4px",
                marginRight: "4px",
              }}
              variant="success"
              type="submit"
            >
              Save
            </Button>
  </Form.Group>

 
  
  </Form>
 )

 




}

export default Education