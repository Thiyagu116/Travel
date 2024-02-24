import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic1 from "./pic2.jpg"
import pic2 from "./pic3.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Container id='service' >
         <Card style={{ width: 'auto',margin:'auto', marginTop:100 }}></Card>
      <Row>
       <Col md={6} xs={12}>
       <Card className='shadow-lg'>
      <Link to={"/opt/hotel"}><Card.Img  variant="top" src={pic1} /></Link>
      <Card.Body>
        <Card.Title>Hotel Booking</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
          Tamilnadu
        </Card.Text>
      </Card.Body>
    </Card>
       </Col>
       <Col md={6} xs={12}>
       <Card className='shadow-lg' >
      <Link to={"/rst/restarunt"}><Card.Img variant="top" src={pic2} /></Link>
      <Card.Body>
        <Card.Title>Restarunt Booking</Card.Title>
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
