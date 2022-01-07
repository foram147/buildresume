import { Card } from "react-bootstrap"
import tobegin from '../../assets/tobegin.jpg'

const ToBegin =()=>{
    return(
        <>
  
  <Card className="bg-dark text-white my-5">
  <Card.Img src={tobegin} alt="Card image" style={{width:'50%'}} />
  <Card.ImgOverlay >
    <Card.Title style={{marginLeft:'250px',fontSize:'50px'}}>Create Your CV</Card.Title>
    <Card.Text> To begin, choose a CV template </Card.Text>
    <Card.Text>At CV Creator, we know what it takes to make a great CV. If you are a Student, Graduate, Corporate or seeking a Career Change, we have the perfect CV for you. Pick one of our CV Templates and make the first step to your dream job. It’s time to “Create a CV”!</Card.Text>
  </Card.ImgOverlay>
</Card>
 
</>
    )
}

export default ToBegin
