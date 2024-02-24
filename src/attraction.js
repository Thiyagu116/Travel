
import Card from 'react-bootstrap/Card';
import Bch from "./beach.jpg"
import Tmp from "./temple.jpg"
import Hill from "./hills.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

function BasicExample() {
  return (
    <Container id='attraction'>
         <Card style={{ width: 'auto',margin:'auto', marginTop:80 }}></Card>
      <Row>
       <Col md={4} xs={12}>
       <Card className='shadow-lg'>
      <Link to={"/tp/temple"}><Card.Img variant="top" src={Tmp} style={{height:'37vh'}} /></Link>
      <Card.Body>
        <Card.Title>Temples</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
        List Of Top Attractions In Tamil Nadu  
        </Card.Text>
        <Card.Text style={{color:"#26D1C4"}}>
         Tamilnadu
        </Card.Text>
      </Card.Body>
    </Card>
       </Col>
       <Col md={4} xs={12}>
       <Card className='shadow-lg' >
      <Link to={"/hl/hills"}><Card.Img variant="top" src={Hill} style={{height:'37vh'}} /></Link>
      <Card.Body>
        <Card.Title>Hills</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
        List Of Top Attractions In Tamil Nadu 
        </Card.Text>
        <Card.Text style={{color:"#26D1C4"}}>
         Tamilnadu
        </Card.Text>
      </Card.Body>
    </Card>
       </Col>
       <Col md={4} xs={12}>
       <Card className='shadow-lg' >
      <Link to={"/bh/beach"}><Card.Img variant="top" src={Bch} style={{height:'37vh'}} /></Link>
      <Card.Body>
        <Card.Title>Beach</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
        List Of Top Attractions In Tamil Nadu 
        </Card.Text>
        <Card.Text style={{color:"#26D1C4"}}>
        Tamilnadu
        </Card.Text>
      </Card.Body>
    </Card>
    
       </Col>
      
      </Row>
    
    </Container>
  );
}

export default BasicExample;
