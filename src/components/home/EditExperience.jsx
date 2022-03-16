import { Modal, Button, Nav, Row, Col, Form } from "react-bootstrap";
import React from "react";
import {FaPencilAlt} from "react-icons/fa"
import {useState} from "react"
import moment from "moment";

const EditExperience =(props)=> {
  
    const [show, setShow] = useState(false)
    const id = props.id 
    const [experience, setExperience] = useState([])
    const [dataFetched, setDataFetched] = useState(false)
  

  const handleClose =  () => {setShow(false)}
  const handleShow = () => {setShow(true)}

    
  async function getData() {
    console.log("i am experience edit get");
    const response = await fetch(
      `http://localhost:3001/experience/${id}`
    );
    const experienceDatajson = await response.json();
    console.log(experienceDatajson)
    setExperience(experienceDatajson);
    setDataFetched(true)
    console.log(experience)
    
  };

 async function updateData  (profileId)  {
    console.log("i am update");
    console.log(profileId)
    try {
      const resp = await fetch(
        `http://localhost:3001/profile/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(experience),
        }
      );
      if (resp.ok) {
        const experienceData = await resp.json();
        console.log(experienceData);
        //setExperience (experienceData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  
    return (
      <>
        <Nav>
         
              {" "}
              < a
                onClick={() => {
                  getData();
                  handleShow()
                  console.log(show)
                }}
                style={{
                  marginTop: "10px",
                  // marginLeft: "720px",
                  fontSize: "20px",
                }}
              > <FaPencilAlt/>Edit Experience</a>
        </Nav>
        {dataFetched && (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Experience</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                  {experience.map((exp,i) => {
                      return(

                    <Row key={i}>
                        <Row className="g-2">
                        <Form.Label>Position</Form.Label>
                  <Form.Control
                    type="text"
                    value={exp.position}
                    onChange={(e) =>
                      setExperience({
                        ...experience,
                         position: e.target.value 
                      })
                    }
                  />
                    <Col md>
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                            type="text"
                    value={exp.company}
                    onChange={(e) =>
                      setExperience({
                        ...experience,
                         company: e.target.value
                      })
                    }
                  ></Form.Control>
                </Col>
                <Col md>
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    value={exp.role}
                    onChange={(e) =>
                      setExperience({
                        ...experience,
                         role: e.target.value 
                      })
                    }
                  />
                </Col>
              
              </Row>

                <Row className="g-2">
                <Col md>
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={moment(exp.startDate).format('YYYY/MM/DD')}
                    onChange={(e) =>
                      setExperience({
                        ...experience,
                        startDate: e.target.value 
                      })
                    }
                  ></Form.Control>
                </Col>
                <Col md>
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                  type="date"
                  value={moment(exp.endDate).format('YYYY/MM/DD')}
                  onChange={(e) =>
                    this.setExperience({
                      ...experience,
                       endDate: e.target.value 
                    })
                  }
                  />
                </Col>
                <hr></hr>
              </Row>
              
              
                    </Row>
                    
                      )
                  })}
              
              
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={async () => {
                  handleClose();
                }}
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  updateData();
                  handleClose();
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

export default EditExperience;