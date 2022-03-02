import React from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import {useState, useEffect} from "react"
import {Row, Col, Card} from "react-bootstrap"
import Profile from "./Profile";



const Preview =(props)=>{
    const {id} = useState(props.id)
    const [profile, setProfile] = useState({})

    async function getData(){
        const response = await fetch(
            `http://localhost:3001/profile/${id}`
        )
        const userProfile = await response.json()

        setProfile(userProfile);
        console.log(profile)
    }

    useEffect(() =>{
        getData();
    },[])


    return(
        profile && (
        <Row>
             <Col className="w-100">
            <>
            <Container >
              <Row className="w-100">
                <Col>
                <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={Profile.image} />
                  <Card.Body>
                  <Card.Title>Name  {profile.name}</Card.Title>
                  <Card.Title>Job{profile.job}</Card.Title>
                 <Card.Text>Address{profile.postaladdress}  </Card.Text>
                 <Card.Text>Email{profile.email}  </Card.Text>
                 <Card.Text>Mobile{profile.mobile}  </Card.Text>
                 <Card.Text>Date of Birth{profile.dob}  </Card.Text>
                 <Card.Text>Skills{profile.skills}  </Card.Text>
                 <Card.Text>Hobbies{profile.hobbies}  </Card.Text>
                </Card.Body>
                  </Card>
                </Col>
                <Col>
                <Form>
                <Form.Group>
    <Form.Label>Personal Statement</Form.Label>
    <Form.Control value={profile.personalstatement} disabled />
  </Form.Group>
  <Form.Group >
    <Form.Label>Professional Experience</Form.Label>
    <Row>
      <Col><Form.Control value={profile.expstartdate} disabled />
      <Form.Control value={profile.expenddate} disabled /></Col>
      <Col><Row><Col><Form.Control value={profile.expposition} disabled /></Col>
      <Col><Form.Control value={profile.expcompany} disabled />
      </Col></Row>
      <Row>
      <Form.Control value={profile.expjobrole} disabled /></Row></Col>
    </Row>
    
  </Form.Group>
                </Form>
                </Col>
              </Row>
            </Container>
</>
            </Col>
        </Row>
        )
    )

}