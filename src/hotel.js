import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Ht1 from "./hotel1.jpg"
import Ht2 from "./hotel2.jpg"
import Ht3 from "./hotel3.jpg"
import Ht4 from "./hotel4.jpg"
import Ht5 from "./hotel5.jpg"
import Ht6 from "./hotel6.jpg"
import Ht7 from "./hotel7.jpg"
import Ht8 from "./hotel8.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  './hotel.css';

function BasicExample() {
  return (
    <div style={{backgroundColor:"#E8FEDA"}}>
    <Container id='future' >
        <h3>Top Hotels</h3>
         <Card style={{ width: 'auto',margin:'auto',marginTop:50}}></Card>
      <Row>
       <Col md={3} xs={12} >
       <div data-aos="zoom-in-right">

       <Card className='shadow-lg' >
      <Card.Img variant="top" src={Ht1} />
      <Card.Body>
        <Card.Title>Hotel TamilNadu</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
        Coimbatore TamilNadu
        </Card.Text>
        <Card.Text>
          <h4>₹ 3500</h4>
        </Card.Text>
        <Button variant="info"  href="/cd/card">Book Now</Button>{' '}
      </Card.Body>
      
    </Card>
</div>
       </Col>
       <Col md={3} xs={12}>
       <div data-aos="zoom-in-right">

       <Card className='shadow-lg' >
      <Card.Img variant="top" src={Ht2} />
      <Card.Body>
        <Card.Title>CQU Hotel</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
        Dindigul TamilNadu
        </Card.Text>
        <Card.Text>
        <h4>₹ 4800</h4>
        </Card.Text>
        <Button variant="info"  href="/cd/card">Book Now</Button>{' '}
      </Card.Body>
    </Card>
    </div>
       </Col>
       <Col md={3} xs={12}>
       <div data-aos="zoom-in-left">

       <Card className='shadow-lg' >
      <Card.Img variant="top" src={Ht3} />
      <Card.Body>
        <Card.Title>Ramada Plaza Hotel</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
          Chennai TamilNadu
        </Card.Text>
        <Card.Text>
        <h4>₹ 9600</h4>
        </Card.Text>
        <Button variant="info"  href="/cd/card">Book Now</Button>{' '}
      </Card.Body>
      </Card>
      </div>
    </Col>
      <Col md={3} xs={12}>
      <div data-aos="zoom-in-left">

       <Card className='shadow-lg' >
      <Card.Img variant="top" src={Ht4} />
      <Card.Body>
        <Card.Title>Park Palza Chennai</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
        Chennai TamilNadu
        </Card.Text>
        <Card.Text>
        <h4>₹ 11200</h4>
        </Card.Text>
        <Button variant="info"  href="/cd/card">Book Now</Button>{' '}
      </Card.Body>
    </Card>
    </div>
       </Col>
      
   
      
      </Row>
      <Row>
       <Col md={3} xs={12}>
       <div data-aos="zoom-in-right">

       <Card className='shadow-lg'>
      <Card.Img variant="top" src={Ht5}  />
      <Card.Body>
        <Card.Title>The Rain Tree Hotel</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
        Thanjavur Tamilnadu
        </Card.Text>
        <Card.Text>
        <h4>₹ 9500</h4>
        </Card.Text>
        <Button variant="info"  href="/cd/card">Book Now</Button>{' '}
      </Card.Body>
    </Card>
    </div>
       </Col>
       <Col md={3} xs={12}>
       <div data-aos="zoom-in-right">

       <Card className='shadow-lg' >
      <Card.Img variant="top" src={Ht6} />
      <Card.Body>
        <Card.Title>First Inn Hotel</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
        Madurai Tamilnadu
        </Card.Text>
        <Card.Text>
        <h4>₹ 8800</h4>
        </Card.Text>
        <Button variant="info"  href="/cd/card">Book Now</Button>{' '}
      </Card.Body>
    </Card>
    </div>
       </Col>
       <Col md={3} xs={12}>
       <div data-aos="zoom-in-left">
       <Card className='shadow-lg' >
      <Card.Img variant="top" src={Ht7} />
      <Card.Body>
        <Card.Title>Taj Hotels</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
          kanyaKumari Tamilnadu
        </Card.Text>
        <Card.Text>
        <h4>₹ 11100</h4>
        </Card.Text>
        <Button variant="info"  href="/cd/card">Book Now</Button>{' '}
      </Card.Body>
      </Card>
    </div>
       </Col>
      <Col md={3} xs={12}>
      <div data-aos="zoom-in-left">

       <Card className='shadow-lg' >
      <Card.Img variant="top" src={Ht8}  />
      <Card.Body>
        <Card.Title>Green Park Hotel</Card.Title>
        <Card.Text style={{color:"#26D1C4"}}>
        Madurai Tamilnadu
        </Card.Text>
        <Card.Text>
        <h4>₹ 6800</h4>
        </Card.Text>
        <Button variant="info"  href="/cd/card">Book Now</Button>{' '}
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
