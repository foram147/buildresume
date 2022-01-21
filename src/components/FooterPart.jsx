import './home.css'
import { Row,Col, Button, Container } from 'react-bootstrap'
import {BsFileEarmarkText, BsPencilSquare, BsFileEarmarkRuled, BsLink} from "react-icons/bs"

const FooterPart =() =>{
    return(
    <>
    <div>
        <Row xs={1} md={2} lg={6} className='footer justify-content-center'>
            <Col className='text-white  '>
                <Row>
                    <h6 className='footerFonts'><b> <BsFileEarmarkText/> RESUME BUILDER </b> </h6>
                </Row>
                <Row>
                    <Col>
                         <Button variant="light">Create a CV +</Button>
                    </Col>
                </Row>
                
            </Col>
                
            <Col className='text-white'>
                <Row>
                    <h6 className='footerFonts'><b> <BsPencilSquare/> How to Create CV </b></h6>
                </Row>
                <Row>
                    <Col>
                        <Col><a href="#login" className='text-white footerLinks'>Make a CV </a></Col>
                        <Col> <a href="#login" className='text-white footerLinks'> How to write a CV </a></Col>
                        <Col> <a href="#login" className='text-white footerLinks'>CV Advice </a></Col>
                    </Col>
                </Row>
            </Col>

            <Col className='text-white'>
                <Row>
                    <h6 className='footerFonts'><b> <BsFileEarmarkRuled/> CV Layout</b></h6>
                </Row>
                <Row>
                    <Col>
                        <Col><a href="#login" className='text-white footerLinks'> CV format </a></Col>
                        <Col><a href="#login" className='text-white footerLinks'>CV Structure </a></Col>
                        <Col><a href="#login" className='text-white footerLinks'>UK CV examples </a></Col>
                    </Col>
                </Row>
            </Col>

            <Col className='text-white'>
                <Row>
                    <h5 className='footerFonts'><b><BsLink/>  Links </b> </h5>
                </Row>
                <Row>
                    <Col>
                        <Col><a href="#login" className='text-white footerLinks' > FAQ </a></Col>
                        <Col><a href="#login" className='text-white footerLinks'> Contact </a></Col>
                        <Col><a href="#login" className='text-white footerLinks'> Legal Notice </a></Col>
                        <Col><a href="#login" className='text-white footerLinks'> Sitemap </a></Col>
                        <Col><a href="#login" className='text-white footerLinks'> Become an affiliate </a></Col>
                    </Col>
                </Row>
            </Col>
        </Row>

        
        </div>
            
    </>
    )
}

export default FooterPart