import {Row, Col,Card, Form,Container, Button,Accordion} from "react-bootstrap"
import React from "react";
class MakeCV extends React.Component{

  state={
    user:{},
    userId:this.props.id,
    isFileUploaded: false,
    fileName:null,
    file:null,
    formData: new FormData()
  }

  uploadImage = async (formData) => {
    console.log("i am post image");
    console.log(formData);
    try {
      let response = await fetch(
        `http://localhost:3001/profile/${this.state.userId}/picture`,
        {
          method: "POST",
          /*headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTk0ZGRhMGMxODE5NjAwMTU0ZjI5OTgiLCJpYXQiOjE2MzcxNDYwMTYsImV4cCI6MTYzODM1NTYxNn0.GNoplRQQVFS4xepzQsDn2xo1i3p7V3rZ4f5ayPPyv3I",
          }*/
          body: this.state.formData,
        }
      );

      if (response.ok) {
        let responseJSON = await response.json();
        console.log(responseJSON);
      }
    } catch (error) {
      console.log(error);
    }
  };

  getData = async () => {
    console.log("i am edit get");
    const response = await fetch(
      `http://localhost:3001/profile/${this.state.userId}`
      /*,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTYzZWZkZmE4OTBjYzAwMTVjZjA3ZGUiLCJpYXQiOjE2MzM5Mzk0MjMsImV4cCI6MTYzNTE0OTAyM30.HvEFLHymbCxV8ciPWBxaABNQ2NmFcOxsgJ8xi1Hkmuk",
        },
      }*/
    );
    const userDatajson = await response.json();
    const userData = {
      name: userDatajson.name,
      job: userDatajson.job,
      address: userDatajson.postaladdress,
      email: userDatajson.email,
      mobile: userDatajson.mobile,
      dob: userDatajson.dob,
      personalstatement: userDatajson.personalstatement,
      skills: userDatajson.skills,
    };
    console.log(userData);
    this.setState({ ...this.state, user: userData });
  };

  render(){
  return(
    <div>
      <Container>
        <Row>
          <Col sm={4}>
          <Card style={{ width: '15rem' }}>
                <Card.Img variant="top"  />
                  <Card.Body>
                  <Card.Title>Name  {this.state.user.name} </Card.Title>
                  <Card.Title>Job{this.state.user.job}</Card.Title>
                 <Card.Text>Address{this.state.user.address}  </Card.Text>
                 <Card.Text>Email{this.state.user.email}  </Card.Text>
                 <Card.Text>Mobile{this.state.user.mobile}  </Card.Text>
                 <Card.Text>Date of Birth{this.state.user.dob}  </Card.Text>
                 <Card.Text>Skills{this.state.user.skills}  </Card.Text>
                 <Card.Text>Hobbies{this.state.user.hobbies}  </Card.Text>
                </Card.Body>
                  </Card>
          </Col>
          <Col sm={8}>
          <Form>
                <Form.Group>
    <Form.Label>Personal Statement</Form.Label>
    <Form.Control value={this.state.user.personalstatement} disabled />
  </Form.Group>
  <Form.Group >
    <Form.Label>Professional Experience</Form.Label>
   
    
  </Form.Group>
                </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
}

export default MakeCV