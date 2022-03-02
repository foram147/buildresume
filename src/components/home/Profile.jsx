import {Model,Button,Nav,Row,Col,Form} from "react-bootstrap"
import React from "react"
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

const token = localStorage.getItem('accessToken');


const Profile =(props)=>{
  
 const {id}= useParams()
 const [profileData,setProfileData]= useState({
   postaladdress:"",
   mobile:"",
   dob:"",
   personalstatement:""
 })
 const navigate = useNavigate();
 const [isAddMediaClicked , setAddMediaClicked] = useState(false)
 const [file,setFile] = useState(null);
 const [fileName, setFileName] = useState("Upload profile image");
 const [isFileUploaded, setFileUploaded] = useState(false)
 
 let formData = new FormData()
 
 console.log("userId----",id)
 
 
  /*constructor(props){
   super(props)
   console.log(props)
  this. state={
    
    userId: this.props.id,
    profileData:{},
    formData: new FormData(),
    file:null,
    fileName: null,
    isFileUploaded: false
   }
 }*/
  /*function target  (e){
    console.log(e.target.files[0])
  if (e.target && e.target.files[0]) {
    this.state.formData.append("buildresume", e.target.files[0],
    this.setState({
      ...this.state,
      profileData: { ...this.state.profileData,
        image :this.state.formData, file: e.target.files[0] },
    }))
}
   }*/

    async function uploadImage  (profileId,file) {
      console.log("i am post image");
      console.log("formdata--",formData);
      
      try {
        let response = await fetch(
          `http://localhost:3001/profile/${profileId}/picture`,
          {
            method: "POST",
            body:file,
          }
        );
  
        if (response.ok) {
          let responseJSON = await response.json();
          console.log(responseJSON);
          console.log("image uploaded")
        }
      } catch (error) {
        console.log(error);
      }
    };

     async function submitData (){
            
              
                try{
   
                  let response = await fetch(`http://localhost:3001/profile/${id}`,
                  {
                    method:"POST",
                    headers:{
                      "Content-Type":"application/json",
                      Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(profileData)
                  })
                  if(response.ok){
                    let responseJSON = await response.json()
                    console.log("data saved---",profileData)
                    console.log(responseJSON._id)
                   const profileId = responseJSON._id
                    
                    if(isFileUploaded){
                      uploadImage(profileId,file)
                      navigate(`/profile/${profileId}`)
                    }else{
                      console.log("image not uploaded")
                    }
                      


                   // localStorage.setItem('profileId', id)
                    
                  }
              
                }catch(error){
                  console.log(error)
                }
             


        
        }

     

        const handleSubmit = (e) => {
          e.preventDefault();
          submitData()
        }

       
       
        
            return(
                <>
   
        <Form onSubmit={handleSubmit}>
          
              <Row className="g-2">

              
                <Col md>
                  <Form.Label>Postal Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({
                      ...profileData,
                      postaladdress:e.target.value

                    })
                      
                      /*(e) =>
                      this.setState({
                        ...this.state,
                        profileData: { ...this.state.profileData, postaladdress: e.target.value },
                      })*/
                    }
                  ></Form.Control>
                </Col>
                <Col md>
                  <Form.Label>Contact No</Form.Label>
                  <Form.Control
                    type="number"
                    value={profileData.mobile}
                    onChange={
                      (e) => setProfileData({
                        ...profileData,
                        mobile:e.target.value
  
                      })
                      /*(e) =>
                      this.setState({
                        ...this.state,
                        profileData: { ...this.state.profileData, mobile: e.target.value },
                      })*/
                    }
                  />
                </Col>
              </Row>

              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                type="date"
                value={profileData.dob}
                onChange={
                  (e) => setProfileData({
                    ...profileData,
                    dob:e.target.value

                  })
                  /*(e) =>
                  this.setState({
                    ...this.state,
                    profileData: { ...this.state.profileData, dob: e.target.value },
                  })*/
                }
              ></Form.Control>
           
              <Row className="g-2">
                <Col md>
                  <Form.Label>Personal Statement </Form.Label>
                  <Form.Control
                    type="text"
                    value={profileData.personalstatement}
                    onChange={
                      (e) => setProfileData({
                        ...profileData,
                        personalstatement:e.target.value
  
                      })
                      /*(e) =>
                      this.setState({
                        ...this.state,
                        profileData: { ...this.state.profileData, personalstatement: e.target.value },
                      })*/
                    }
                  ></Form.Control>
                </Col>
                
              </Row>
              
              <p>Let others know how to refer to you.</p>
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
                       <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                //value={this.state.profileData.image}
                onChange={(e) => {
                  setFileName(e.target.files[0].name);
                  setFileUploaded(true)
                  formData.append("image",e.target.files[0]);
                  setFile(formData)
                }
                  
                  
                  
                  
                  //this.target(e)
                 }
              ></Form.Control>
                      </Form.Group>
                    }
              
              
              
              
              
              
              
             
            
              <Button
                variant="primary"
                type="submit"
                //onClick={() => {
                  //this.setState({ ...this.state});
                  //this.uploadImage(this.state.formData);
                  //this. submitData();
                  //this.uploadImage()
                  //this.handleClose();
               // }}
              >
                Save Changes
              </Button>
            
              </Form>
          
            

           
         
        
      </>
            )
        
}

export default Profile