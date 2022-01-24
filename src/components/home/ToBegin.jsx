import { Card, Col, Row, Button } from "react-bootstrap"
import tobegin from '../../assets/download.jpg'
import '../home.css'
import MakeCV from "./MakeCV"
import { useState, useEffect } from "react"

const ToBegin =(props)=>{

  const[userId, setUserId] = useState(props.id)
  const [user,setUser] = useState({})

  /*async function getData(){
    const response = await fetch(`http://localhost:3001/user/${userId}`)
    const userData = await response.json()
    setUser(userData)
    console.log(user)
  }
  useEffect(()=>{
    getData();
  },[])*/
  
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
            <Button variant="primary" href="/makeCV">Create CV</Button>
            
          </Card.ImgOverlay>
      </Card>
    </Col>
</Row>
</div>
</>
    )
}

export default ToBegin
