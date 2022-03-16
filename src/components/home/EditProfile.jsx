import { Modal, Button, Nav, Row, Col, Form } from "react-bootstrap";
import React from "react";
import {FaPencilAlt} from "react-icons/fa"

class EditProfile extends React.Component {
  state = {
    show: false,
    profileId: this.props.id ,
    user: {},
    isFileUploaded: false,
    fileName: null,
    file: null,
    formData: new FormData(),
    dataFetched: false,
  };

  handleClose = () => this.setState({ ...this.state, show: false });
  handleShow = () => this.setState({ ...this.state, show: true });

  uploadImage = async (formData) => {
      console.log(this.state.profileId)
    console.log("i am post image");
    console.log(formData);
    try {
      let response = await fetch(
        `http://localhost:3001/profile/${this.state.profileId}/picture`,
        {
          method: "POST",
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
      `http://localhost:3001/profile/${this.state.profileId}`
    );
    const userDatajson = await response.json();
    const userData = {
       image: userDatajson.image,
      personalstatement: userDatajson.personalstatement,
      dob: userDatajson.dob,
      mobile: userDatajson.mobile,
      postaladdress: userDatajson.postaladdress,
    };
    console.log(userData);
    this.setState({ ...this.state, user: userData, dataFetched: true });
  };

  updateData = async () => {
    console.log("i am update");
    console.log(this.state.profileId)
    try {
      const resp = await fetch(
        `http://localhost:3001/profile/${this.state.profileId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.user),
        }
      );
      if (resp.ok) {
        const userData = await resp.json();
        console.log(userData);
        this.state.user = userData;
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  render() {
    return (
      <>
        <Nav>
         
              {" "}
              < a
                
                onClick={() => {
                  this.getData();
                  this.handleShow();
                }}
                style={{
                  marginTop: "10px",
                  // marginLeft: "720px",
                  fontSize: "20px",
                }}
              > <FaPencilAlt/>Edit Profile</a>
        </Nav>
        {this.state.dataFetched && (
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className="g-2">
                <Col md>
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                    type="number"
                    value={this.state.user.mobile}
                    onChange={(e) =>
                      this.setState({
                        ...this.state,
                        user: { ...this.state.user, mobile: e.target.value },
                      })
                    }
                  ></Form.Control>
                </Col>
                <Col md>
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    value={this.state.user.dob}
                    onChange={(e) =>
                      this.setState({
                        ...this.state,
                        user: { ...this.state.user, dob: e.target.value },
                      })
                    }
                  />
                </Col>
              </Row>

             
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                //value={this.state.user.image}
                onChange={(e) =>
                  this.state.formData.append(
                    "profile",
                    e.target.files[0],
                    this.setState({
                      ...this.state,
                      user: {
                        ...this.state.user,
                        image: this.state.formData,
                        fileName: e.target.files[0].name,
                      },
                    })
                  )
                }
              ></Form.Control>

              <Row className="g-2">
                <Col md>
                  <Form.Label>Personal Statement</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.user.personalstatement}
                    onChange={(e) =>
                      this.setState({
                        ...this.state,
                        user: { ...this.state.user, personalstatement: e.target.value },
                      })
                    }
                  ></Form.Control>
                </Col>
                <Col md>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={this.state.user.postaladdress}
                    onChange={(e) =>
                      this.setState({
                        ...this.state,
                        user: { ...this.state.user, postaladdress: e.target.value },
                      })
                    }
                  />
                </Col>
              </Row>
              
              
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={async () => {
                  this.handleClose();
                }}
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  this.setState({ ...this.state, isFileUploaded: true });
                  this.uploadImage(this.state.formData);
                  this.updateData();
                  this.handleClose();
                }}
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </>
    );
  }
}

export default EditProfile;