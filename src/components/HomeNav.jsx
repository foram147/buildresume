import {Container,Navbar,Nav,NavDropdown,Form,FormControl,Button,Col,Row} from 'react-bootstrap'
import logo from "../assets/logo.png"
import './home.css'

const HomeNav = ()=>{
    return(
        <>
       <div>
       <Navbar collapseOnSelect className="navFont"  bg="light" variant="light" expand="md">
          <Navbar.Brand href="#home" style={{marginLeft:'20px'}}>
            <img alt="" src={logo} width="70" height="70" className="d-inline-block align-top"/>{' '}
          </Navbar.Brand>
          <Navbar.Brand ><b>Resume Build</b></Navbar.Brand>
          <Navbar.Toggle aria-controls='ressponsive-navbar-nav'/>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" style={{marginRight:'140px'}} >
              <Nav className="navNav" >
                <Nav.Link  href="/profile" >Resume</Nav.Link>
                <Nav.Link  href="/login" >Cover Letter</Nav.Link>
                <Nav.Link  href="#pricing" >Jobs</Nav.Link>
      
                <NavDropdown title="Career Advice" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                
                
        </Nav>
        
      </Navbar.Collapse>
        
      </Navbar>
      </div>
            </>
 
    )
}

export default HomeNav