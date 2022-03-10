import  OverlayTrigger from "react-bootstrap/OverlayTrigger"
import  Tooltip from "react-bootstrap/Tooltip"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Form ,Button} from "react-bootstrap"


const Skills = (props)=>{
    const {id} = useParams()
    const [skill,setSkill] = useState("")
    const [skills,setSkills] = useState([])
    const [hobbies, setHobbies] = useState([])
    const [hobby, setHobby] = useState("")
    console.log("i am the id", id)

async function saveSkill(){

    try{
        // let id = localStorage.getItem('profileId')
        let response = await fetch(`http://localhost:3001/profile/${id}/skills`,
        {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({skills: skill, profileId: props.profileId})
        })
        if(response.ok){
            let responseJSON = await response.json()
            console.log("skill added----", responseJSON)
        }

    }catch(error){
        console.log(error)
    }
}

async function saveHobby(){

    try{
        // let id = localStorage.getItem('profileId')
        let response = await fetch(`http://localhost:3001/profile/${id}/hobbies`,
        {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({hobbies: hobby, profileId: props.profileId})
        })
        if(response.ok){
            let responseJSON = await response.json()
            console.log("hobby added----", responseJSON)
        }

    }catch(error){
        console.log(error)
    }
}


   /* const handleSubmit = (event)=>{
        event.preventDefault();
        saveSkill()
    }*/

 return(
     <Form>
    <Form.Group className="mb-3" controlId="formSkills">
    <Form.Label>Skills</Form.Label>
      <OverlayTrigger 
        placement = "bottom"
        overlay={(props) =>(
        <Tooltip {...props}>Enter your Skills
        </Tooltip>
      )}>
        <Form.Control name="skills" type="name" value={skill}
         onChange={(e) => setSkill(e.target.value)} />
      </OverlayTrigger>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formSkills">
    <Form.Label>Hobby</Form.Label>
      <OverlayTrigger 
        placement = "bottom"
        overlay={(props) =>(
        <Tooltip {...props}>Enter your Hobby
        </Tooltip>
      )}>
        <Form.Control name="hobbies" type="name" value={hobby}
         onChange={(e) => setHobby(e.target.value)} />
      </OverlayTrigger>
      <Button
              style={{
                borderRadius: "50%",
                height: "35px",
                marginLeft: "4px",
                marginRight: "4px",
              }}
              variant="success"
              onClick={async () => {
                saveSkill()
                saveHobby();
              }}
            >
              Save
            </Button>
  </Form.Group>
  
  </Form>
 )

 




}

export default Skills