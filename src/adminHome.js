import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Av from "./avatar.jpg"
import pic1 from "./pic2.jpg"
import pic2 from "./pic3.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UnderlineExample() {
  return (
    <div>
    <div>
    <Nav variant="underline" expand="lg" defaultActiveKey="/home" style={{backgroundColor:"#c3f5fa",height:80}}>
      <Nav.Item style={{marginLeft:120,color:'black',marginTop:15}}>
        <Nav><h2>AdminInportal</h2></Nav>
      </Nav.Item>
      <Nav.Item style={{marginLeft:70,color:'black',marginTop:15}}>
        <Nav.Link eventKey="link-1"><h4>View User</h4></Nav.Link>
      </Nav.Item>
      <Nav.Item style={{marginTop:15,marginLeft:10}}>
      <Nav.Link eventKey="link-2"><h4>Hotel</h4></Nav.Link>
      </Nav.Item >
      <Nav.Item style={{marginTop:15,marginLeft:10}}>
        <Nav.Link eventKey="link-3"><h4>Restarunt</h4></Nav.Link>
      </Nav.Item>
      <Nav.Item style={{marginTop:15,marginLeft:10}}>
        <Nav.Link eventKey="link-4"><h4>Tours</h4></Nav.Link>
      </Nav.Item>
      <Nav.Item style={{marginTop:15,marginLeft:10}}>
        <Nav.Link eventKey="link-5"><h4>Attractions</h4></Nav.Link>
      </Nav.Item>
    </Nav>
    </div>

    <div>
  <Container>
    <Row>
        <Col md={4} xs={12}>
    <Card style={{ width: '18rem' ,marginTop:130,marginLeft:70,backgroundColor:"#c3f5fa"}}>
      <Card.Img variant="top" src={Av} style={{height:170,width:170,marginLeft:50,marginTop:30}} />
      <Card.Body>
        <Card.Title style={{marginLeft:45}}>Total User</Card.Title>
        <Card.Text style={{marginLeft:45}}>
          120
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col md={4} xs={12}>
    <Card style={{ width: '18rem' ,marginTop:130,marginLeft:70,backgroundColor:"#c3f5fa"}}>
      <Card.Img variant="top" src={pic1} style={{height:170,width:170,marginLeft:60,marginTop:30,borderRadius:50}} />
      <Card.Body>
        <Card.Title style={{marginLeft:45}}>Hotel Booked</Card.Title>
        <Card.Text style={{marginLeft:45}}>
          120
        </Card.Text> 
      </Card.Body>
    </Card>
    </Col>
    
    <Col md={4} xs={12}>
    <Card style={{ width: '18rem' ,marginTop:130,marginLeft:70,backgroundColor:"#c3f5fa"}}>
      <Card.Img variant="top" src={pic2} style={{height:170,width:170,marginLeft:60,marginTop:30,borderRadius:50}} />
      <Card.Body>
        <Card.Title style={{marginLeft:45}}>Restarunt Booked</Card.Title>
        <Card.Text style={{marginLeft:45}}>
          100
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
</Container>
    </div>
    </div>
  );
}

export default UnderlineExample;