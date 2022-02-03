import {Model, Button,Nav,Row,Col,Form, Container} from "react-bootstrap"
import {useNavigate} from 'react-router-dom'
import React from "react"

class Login extends React.Component{
    
  constructor(props){
      super(props)
      
    this.state={
        show:false,
        userId:"",
        dataFetched:false,
        isLoggedIn:false,
        login:{
            email:"",
            password:""
        },
       
    };
  }
   

    handleClose = () => this.setState({...this.state,show:false})
    handleShow = () => this.setState({...this.state,show:true})

    


  handleSubmit = (e) =>{
      e.preventDefault();
      this.getLoggedIn();
      
                
      console.log(this.state.userId)
      
      
      }


        getLoggedIn = async (login,userId)=>{
            console.log("logedin")
            try{
                const resp = await fetch(`http://localhost:3001/auth/login`,{
                   method:"POST",
                   headers:{
                    "Content-Type": "application/json"
                   } ,
                   body: JSON.stringify(this.state.login)
                }
                );
                if (resp.ok){
                     login = await resp.json();
                   // const Id = userid;
                    //console.log(userId)
                    userId=login.id
                    console.log(userId)
                    console.log("loginId= "+login.id,"token= "+login.token)
                    this.props.navigate(`${userId}/profile`)
                    
                    
                }

            }catch(error){
                console.log(error)
            }
        }
    render(){
     // const {navigation} = this.props;
      
    return(
        <div> 
        <Container >
        <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" 
          value={this.state.login.email}
          onChange={(e)=>
            this.setState({
              ...this.state,
              login:{...this.state.login,email: e.target.value}
          })}
          placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
          value={this.state.login.password}
          onChange={(e)=>
            this.setState({
              ...this.state,
              login:{...this.state.login,password: e.target.value}
          })}
          placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary"  type="submit" onClick={async () => {
                  //this.props.history.push(`/profile/`+this.state.login.id)
                    //this.navigator()
                this.handleClose();
                 //<Navigate to="/profile/"+login.id/>
                }}>
          Submit
        </Button>
      </Form>
      </Container>
    
      </div>
    )
    }
}

export default Login