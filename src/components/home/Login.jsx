import {Model, Button,Nav,Row,Col,Form, Container} from "react-bootstrap"
import {useNavigate} from 'react-router-dom'
import React from "react"
import { useState } from "react"
import { useParams } from "react-router"
 

const Login = ()=> {
  
    
    const [loginData,setLoginData]= useState({
      email:"",
      passwoed:""
    })
    const navigate = useNavigate()


  /*constructor(props){
      super(props)
      
    this.state={
        show:false,
        userId:"",
        dataFetched:false,
        isLoggedIn:false,
        loginData:{
            email:"",
            password:""
        },
       
    };
  }*/
   //function handleClose () this.setState({...this.state,show:false})
   //function handleShow = () => this.setState({...this.state,show:true})

    


  const handleSubmit = (e) =>{
      e.preventDefault();
      getLoggedIn();
      
      }


       async function getLoggedIn  (){
            console.log("logedin")
            try{
                const resp = await fetch(`http://localhost:3001/auth/login`,{
                   method:"POST",
                   headers:{
                    "Content-Type": "application/json"
                   } ,
                   body: JSON.stringify(loginData)
                }
                );
                if (resp.ok){
                    const login = await resp.json();
                    console.log("login resp data",login)
                    const userId=login.id
                    console.log("user id-----",userId)
                    console.log("login token----",login.token)
                    const accessToken= login.token
                    localStorage.setItem('accessToken', accessToken)
                    //localStorage.setItem('userId',userId)
                    console.log("access token----",accessToken)
                     //this.props.id(userId)
                    navigate(`/profile/${userId}`)
                    
                    
                }

            }catch(error){
                console.log(error)
            }
        }
    
     
      
    return(
        <div> 
        <Container >
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" 
          value={loginData.email}
          onChange= {(e) => setLoginData({
            ...loginData,
            email:e.target.value
          })}
          
          /*{(e)=>
            this.setState({
              ...this.state,
              loginData:{...this.state.loginData,email: e.target.value}
          })}*/
          placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
          value={loginData.password}
          onChange={(e)=>
              setLoginData({
                ...loginData,
                password:e.target.value
              })

           /* this.setState({
              ...this.state,
              loginData:{...this.state.loginData,password: e.target.value}
          })*/
        }
          placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary"  type="submit" >
          Submit
        </Button>
      </Form>
      </Container>
    
      </div>
    )
    
}

export default Login