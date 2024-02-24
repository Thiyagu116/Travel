import Card from 'react-bootstrap/Card';
import pic from "./pic1.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BasicExample() {
  return (
    <Container id="about">
        <Card style={{ width: 'auto',margin:'auto', marginTop:100 }}>
      <Row>
       <Col md={6} xs={12}><Card.Img variant="top" src={pic} /></Col>
       <Col md={6} xs={12}><Card.Body>
        
        <Card.Text>
          <h1 style={{textAlign:'center'}}>EXPLORE THE DIFFERENCE</h1>
          <p style={{marginTop:50}}>Many people tell us that they would love to travel like we do, but it just doesn’t fit with their lifestyle. We agree that our style of long term travel would not work for everyone. However, we also think that there are so many different types of travel out there that you are bound to find something that works for you.</p>
          <p style={{marginTop:30}}>None of these types of travel are good or bad as they each have their own advantages and disadvantages. You will probably find that you will end up enjoying several different types of travel throughout your lifetime.</p>
          <p style={{marginTop:30}}>We agree that our style of long term travel would not work for everyone. However, we also think that there are so many different types of travel out there that you are bound to find something that works for you.</p>

        </Card.Text>
        
      </Card.Body></Col>
      </Row>
      </Card>

    </Container>
    
  );
}

export default BasicExample; 

      