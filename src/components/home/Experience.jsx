import  OverlayTrigger from "react-bootstrap/OverlayTrigger"
import  Tooltip from "react-bootstrap/Tooltip"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Form ,Button} from "react-bootstrap"
import { useNavigate } from "react-router";
import moment from "moment"


const Experience = (props)=>{
    const {id} = useParams()
    const [experience,setExperience] = useState({
      role:"",
      company:"",
      startDate:"",
      endDate:"",
      position:""
    })
    const navigate = useNavigate();
    console.log("experience id", id)

async function saveExperience(){
    console.log(experience)
    try{
        
        let response = await fetch(`http://localhost:3001/experience/${id}`,
        {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(experience)
        })
        if(response.ok){
          console.log("from try if")
            let responseJSON = await response.json()
            console.log("experience added----", responseJSON)
            navigate(`/preview/${id}`)
          }else{
          console.log("there is something wrong")
        }

    }catch(error){
        console.log(error)
    }
}

const handleSubmit = (event)=>{
        event.preventDefault();
        saveExperience()
        console.log(experience)
    }

 return(
     <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formSkills">
    <Form.Label>Role</Form.Label>
      <OverlayTrigger 
        placement = "bottom"
        overlay={(props) =>(
        <Tooltip {...props}>Enter your Experiences
        </Tooltip>
      )}>
        <Form.Control name="experiences" type="name" value={experience.role}
         onChange={(e) => setExperience({
           ...experience,
           role:e.target.value})} />
      </OverlayTrigger>
     
      <Form.Label>Company</Form.Label>
      <OverlayTrigger 
        placement = "bottom"
        overlay={(props) =>(
        <Tooltip {...props}>Enter your Experiences
        </Tooltip>
      )}>
        <Form.Control name="experiences" type="name" value={experience.company}
         onChange={(e) => setExperience({
           ...experience,
           company:e.target.value})} />
      </OverlayTrigger>
      
      <Form.Label>Start Date</Form.Label>
      <OverlayTrigger 
        placement = "bottom"
        overlay={(props) =>(
        <Tooltip {...props}>Enter your Experiences
        </Tooltip>
      )}>
        <Form.Control name="experiences" type="date" value={experience.startDate}
         onChange={(e) => setExperience({
           ...experience,
           startDate: e.target.value})} />
      </OverlayTrigger>

      <Form.Label>End Date</Form.Label>
      <OverlayTrigger 
        placement = "bottom"
        overlay={(props) =>(
        <Tooltip {...props}>Enter your Experiences
        </Tooltip>
      )}>
        <Form.Control name="experiences" type="date" value={experience.endDate}
         onChange={(e) => setExperience({
           ...experience,
           endDate:e.target.value})} />
      </OverlayTrigger>

      <Form.Label>Position</Form.Label>
      <OverlayTrigger 
        placement = "bottom"
        overlay={(props) =>(
        <Tooltip {...props}>Enter your Position
        </Tooltip>
      )}>
        <Form.Control name="experiences" type="text" value={experience.position}
         onChange={(e) => setExperience({
           ...experience,
           position:e.target.value})} />
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

export default Experience