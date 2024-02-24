import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ooty from "./ooty.jpg"
import kodai from "./kodai.jpg"
import val from "./val.jpg"
import Mad from "./madurai.jpg"
import Tan from "./thanjai.jpg"
import Kan from "./kanya.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Container id='future'>
         <Card style={{ width: 'auto',margin:'auto', marginTop:100 }}></Card>
      <Row>
       <Col md={4} xs={12}>
       <Card className='shadow-lg'>
      <Link to={"/oy/ooty"}><Card.Img variant="top" src={ooty}  /></Link>
      <Card.Body>
        <Card.Title>Ooty</Card.Title>
        <Card.Text>
          Holiday Trip
        </Card.Text>
        <Card.Text style={{color:"#26D1C4"}}>
        Coimbatore TamilNadu
        </Card.Text>
      </Card.Body>
    </Card>
       </Col>
       <Col md={4} xs={12}>
       <Card className='shadow-lg' >
      <Link to={"/kd/kodai"}><Card.Img variant="top" src={kodai} /></Link>
      <Card.Body>
        <Card.Title>kodaikanal</Card.Title>
        <Card.Text>
          Holiday Trip
        </Card.Text>
        <Card.Text style={{color:"#26D1C4"}}>
        Dindigul TamilNadu
        </Card.Text>
      </Card.Body>
    </Card>
       </Col>
       <Col md={4} xs={12}>
       <Card className='shadow-lg' >
      <Link to={"/vp/valparai"}><Card.Img variant="top" src={val} style={{height:'37vh'}} /></Link>
      <Card.Body>
        <Card.Title>Valparai</Card.Title>
        <Card.Text>
         Holiday Trip Valparai
        </Card.Text>
        <Card.Text style={{color:"#26D1C4"}}>
          Coimbatore TamilNadu
        </Card.Text>
      </Card.Body>
    </Card>
    
       </Col>
      
      </Row>
      <Row>
       <Col md={4} xs={12}>
       <Card className='shadow-lg'>
      <Link to={"/tt/thanjavur"}><Card.Img variant="top" src={Tan}  /></Link>
      <Card.Body>
        <Card.Title>Thanjavur</Card.Title>
        <Card.Text>
        WeekEnd Trip
        </Card.Text>
        <Card.Text style={{color:"#26D1C4"}}>
        Thanjavur Tamilnadu
        </Card.Text>
      </Card.Body>
    </Card>
       </Col>
       <Col md={4} xs={12}>
       <Card className='shadow-lg' >
      <Link to={"/md/madurai"}><Card.Img variant="top" src={Mad} style={{height:'37vh'}} /></Link>
      <Card.Body>
        <Card.Title>Madurai</Card.Title>
        <Card.Text>
        WeekEnd Trip
        </Card.Text>
        <Card.Text style={{color:"#26D1C4"}}>
        Madurai Tamilnadu
        </Card.Text>
      </Card.Body>
    </Card>
       </Col>
       <Col md={4} xs={12}>
       <Card className='shadow-lg' >
      <Link to={"/ky/kanya"}><Card.Img variant="top" src={Kan} /></Link>
      <Card.Body>
        <Card.Title>kanyaKumari</Card.Title>
        <Card.Text>
         WeekEnd Trip 
        </Card.Text>
        <Card.Text style={{color:"#26D1C4"}}>
          kanyaKumari Tamilnadu
        </Card.Text>
      </Card.Body>
    </Card>
    
       </Col>
      
      </Row>
    
    </Container>
  );
}

export default BasicExample;
