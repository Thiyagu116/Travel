import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rt1 from "./rest1.jpg"
import Rt2 from "./rest2.jpg"
import Rt3 from "./rest3.jpg"
import Rt4 from "./rest4.jpg"
import Rt5 from "./rest5.jpg"
import Rt6 from "./rest6.jpg"
import Rt7 from "./rest7.jpg"
import Rt8 from "./rest8.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function BasicExample() {
  return (
    <div style={{backgroundColor:"#E8FEDA"}}>
    <Container id='future'>
      <h3>Top Restarunts</h3>
         <Card style={{ width: 'auto',margin:'auto', marginTop:50 }}></Card>
       
      <Row>
      

       <Col md={3} xs={12}>
       <div data-aos="zoom-in-right">

       <Card className='shadow-lg' >
      <Card.Img variant="top" src={Rt1} />
      <Card.Body>
        <Card.Title>Lakshmi</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
        Tenkasi TamilNadu
        </Card.Text>
        <Button variant="info" href="/rcd/restcard">Book Now</Button>{' '}
      </Card.Body>
      
    </Card>
    </div>
       </Col>
       <Col md={3} xs={12}>
       <div data-aos="zoom-in-right">

       <Card className='shadow-lg' >
      <Card.Img variant="top" src={Rt2} />
      <Card.Body>  
        <Card.Title>Drizzle</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
        Dindigul TamilNadu
        </Card.Text>
        <Button variant="info" href="/rcd/restcard">Book Now</Button>{' '}
      </Card.Body>
    </Card>
    </div>
       </Col>
       <Col md={3} xs={12}>
       <div data-aos="zoom-in-left">

       <Card className='shadow-lg' >
      <Card.Img variant="top" src={Rt3} />
      <Card.Body>
        <Card.Title>Ramada Plaza</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
          Chennai TamilNadu
        </Card.Text>
        <Button variant="info" href="/rcd/restcard">Book Now</Button>{' '}
      </Card.Body>
      </Card>
      </div>
    </Col>
      <Col md={3} xs={12}>
      <div data-aos="zoom-in-left">

       <Card className='shadow-lg' >
      <Card.Img variant="top" src={Rt4} />
      <Card.Body>
        <Card.Title>Park Palza</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
        Chennai TamilNadu
        </Card.Text>
       
        <Button variant="info" href="/rcd/restcard">Book Now</Button>{' '}
      </Card.Body>
    </Card>
    </div>
       </Col>
      
       
      
      </Row>
      <Row>
      

       <Col md={3} xs={12}>
       <div data-aos="zoom-in-right">

       <Card className='shadow-lg'>
      <Card.Img variant="top" src={Rt5}  />
      <Card.Body>
        <Card.Title>The Rain Tree </Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
        Thanjavur Tamilnadu
        </Card.Text>
        
        <Button variant="info" href="/rcd/restcard">Book Now</Button>{' '}
      </Card.Body>
    </Card>
    </div>
       </Col>
       <Col md={3} xs={12}>
       <div data-aos="zoom-in-right">

       <Card className='shadow-lg' >
      <Card.Img variant="top" src={Rt6} />
      <Card.Body>
        <Card.Title>Greensland</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
        Tirunelveli Tamilnadu
        </Card.Text>
       
        <Button variant="info" href="/rcd/restcard">Book Now</Button>{' '}
      </Card.Body>
    </Card>
    </div>
       </Col>
       <Col md={3} xs={12}>
       <div data-aos="zoom-in-left">

       <Card className='shadow-lg' >
      <Card.Img variant="top" src={Rt7} />
      <Card.Body>
        <Card.Title>Taj Hotels</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
          kanyaKumari Tamilnadu
        </Card.Text>
        
        <Button variant="info" href="/rcd/restcard">Book Now</Button>{' '}
      </Card.Body>
      </Card>
    </div>
       </Col>
      <Col md={3} xs={12}>
      <div data-aos="zoom-in-left">

       <Card className='shadow-lg' >
      <Card.Img variant="top" src={Rt8}  />
      <Card.Body>
        <Card.Title>Green Park</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
        Madurai Tamilnadu
        </Card.Text>
       
        <Button variant="info" href="/rcd/restcard">Book Now</Button>{' '}
      </Card.Body>
    </Card>
    </div>
       </Col>
       
       
      </Row>
    
    </Container>
    </div>
  );
}

export default BasicExample;
