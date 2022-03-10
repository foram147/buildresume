import React from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import {useState, useEffect} from "react"
import {Row, Col, Card, Form, Container, ListGroup, Table} from "react-bootstrap"
import Profile from "./Profile";
import moment from "moment"
import Image from 'react-bootstrap/Image'
import {FaMapMarkerAlt, FaSuitcase,FaRegEnvelope,FaUserTie,FaBookReader,FaPhoneAlt,FaRegNewspaper} from "react-icons/fa"
import "../../components/home.css"
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf"


const Preview =(props)=>{
    const {id} = useParams()
   // const [id, setId] = useState(props.id)
    const [profile, setProfile] = useState({})
    console.log(props)
    
    async function getPDF(){
        const getpdfData = await fetch(
            `http://localhost:3001/profile/${id}/pdf`,{
                method:'GET',
                headers:{
                    'Content-Type': 'application/pdf'
                }
            }
        );
        const userpdf = await getpdfData.json()
        
        
        console.log(userpdf)
        
    }
    
    const downloadPdfDocument = () => {
        const input = document.getElementById('partToConvert');
        html2canvas(input)
          .then((canvas) => {
              const imgData = canvas.toDataURL('image/png');
              const pdf = new jsPDF();
              pdf.addImage(imgData, 'JPEG', 0, 0);
              pdf.save("download.pdf");
          })
      }
    async function getData(){
        const response = await fetch(
            `http://localhost:3001/profile/${id}`
        );

        const userProfile = await response.json()
        console.log(userProfile)
        setProfile(userProfile)
        console.log(profile)
        
        //setSkills(profile.skills)
        //console.log(skills)
    }

    useEffect(() =>{
        getData();
    },[]);


    return(
        profile && (
    <div id="partToConvert" className = "justify-content-centre" style={{"max-width":"60%"}}>
        <Container className="containerWidth" >
        <Row className="m-5 rowBorder" >
           <Col md={4} className="rowBorder">
            <Image src={profile.image}></Image>
            <p><h4><b>{profile.user.name}</b></h4></p>    
            <p><h5><b>{profile.user.job}</b></h5></p>    
            <b  className="coloredFont"> <FaRegEnvelope/> EMAIL</b>
            <h6> {profile.user.email}</h6> 
            <p></p>
             <b className="coloredFont"><FaPhoneAlt/> CONTACT </b>
            
            <h6>{profile.mobile} </h6>
            <p></p>
            <b  className="coloredFont"><FaMapMarkerAlt/> ADDRESS </b>
            <h6>{profile.postaladdress}  </h6> 
            <p></p>
            <b  className="coloredFont"><FaRegNewspaper/> DATE OF BIRTH</b>
            <h6> {profile.dob} </h6> 
            <p></p> 
            
            <p><h5><b  className="coloredFont">SKILLS</b></h5> </p>
                <Row>
                    {profile.skills.map((s,i) => {
                        return(
                            <Row key={i} >
                                <h6>{s.skills}</h6>
                            </Row>
                            
                        )
                    })}
                    </Row>
                    <p></p>
                    
            <p><h5><b  className="coloredFont">HOBBIES</b></h5></p> 
            <Row>
                    {profile.hobbies.map((h,i) => {
                        return(
                            <Row key={i} >
                               <h6>{h.hobbies}</h6>
                            </Row>
                            
                        )
                    })}
                    </Row>
              
               
            </Col>
            <Col md={8} className="pl-10 rowBorder">
            <Row>
            
            <b  className="coloredFont"><p><FaUserTie/>  PERSONAL STATEMENT</p></b>
                <Card.Text>{profile.personalstatement} </Card.Text>
            </Row>
            <hr></hr>
            <Row><b><p className="mt-3 coloredFont"><FaSuitcase/>   PERSONAL EXPERIENCE</p></b>
                    <br></br>
      
            {profile.experience.map((e,i) => {
                return(
                    <Row>
                    <Table key={i} borderless style={{"maxWidth":"90%", "marginLeft":"15px"}}>
                        <thead>
                        <th> {e.role}</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{e.position}</td>
                                <td> {moment(e.startDate).format('DD/MM/YYYY')}</td>
                            </tr>
                            <tr>
                                <td>{e.company}</td>
                                <td> {moment(e.endDate).format('DD/MM/YYYY')}</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Row>
        )
    })}
        </Row>
        <hr></hr>
        <Row ><b><p className="mt-2  coloredFont"> <FaBookReader/> EDUCATION</p></b>
    
      
    {profile.education.map((e,i) => {
        return(
     
            <Table key={i} borderless style={{"maxWidth":"90%", "marginLeft":"15px"}}>
                <thead>
                    <th> {e.degree}</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{moment(e.startDate).format('DD/MM/YYYY')}</td>
                        <td>{e.institution}</td>
                    </tr>
                    <tr>
                        <td>{moment(e.endDate).format('DD/MM/YYYY')}</td>
                        <td>{e.course}</td>
                    </tr>
                </tbody>
            </Table>
        
   
   


   

)
})}
</Row>
        
 
            
            </Col>
         </Row>
         <button
         onClick={()=> getPDF()}> Download PDF</button>
        </Container>
            </div>
        )
        )
    

}

export default Preview