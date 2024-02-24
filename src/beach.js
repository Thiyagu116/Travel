
import Card from 'react-bootstrap/Card';
import bh from "./brh.webp"
import Bk from "./bk.webp"
import Bc from "./bc.webp"
import Bcc from "./bcc.webp"
import Bm from "./bm.webp"
import Bv from "./bcv.webp"
import Bd from "./bd.webp"
import CardBody from 'react-bootstrap/esm/CardBody';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardText from 'react-bootstrap/esm/CardText';

function BasicExample() {
  return (
    <Card style={{ width: '18rem',height:700,width:'100%'}}>
      <Card.Img variant="top" src={bh} style={{ height:700,width:'100%'}} />

      <Card.ImgOverlay style={{color:'white'}}>
        <Card.Title><h2 style={{marginTop:40}}>Beaches</h2></Card.Title>
      <CardText><h4 style={{marginTop:40}}>Beaches are good places to get a nice view.</h4></CardText>
      <CardText><h4>It looks like a little bump in the Earth</h4> </CardText>
      <Card.Text><h4>A beaches is a piece of land that rises higher than everything surrounding it.</h4></Card.Text>
      </Card.ImgOverlay>

      <Card.Body >
        <h4 style={{marginTop:50}}>Beaches</h4>

        <p>A hill is a landform that extends above the surrounding terrain. It often has a distinct summit, and is usually applied to peaks which are above elevation compared to the relative landmass, though not as prominent as mountains.</p>
        
    <h4 style={{marginTop:30}}>Best Time to Visit</h4>
        <p style={{marginTop:30}}> 🔆 Although Beaches can be visited and explored any time of the years, the best is the summer months between March and June.</p>
    <h4>Top Attractions</h4>

    <Container style={{marginTop:30}}>
      <Row>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Bv} style={{width:'100%',height:300}} />
          <CardBody>
            
              <h4>Covelong Beach</h4>
           
            <p>The sea is calm here. The sun shines above gleamingly and the coast reflects a shimmering aura that captivates and enthralls every single visitor. Covelong Beach is one such spectacular spot that is more than ideal for that perfect vacation.</p>
         
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Bcc}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Mahabalipuram Beach</h4>
           <p>It’s a shore that witnessed several historic moments that defined the course of South India. The coastline evolved with time and is today one of the most visited tourism destinations in Tamil Nadu. The Mahabalipuram is a spot worth every hype.
</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Bd} style={{width:'100%',height:300}} />
          <CardBody>
            <h4>Dhanushkodi Beach</h4>
            <p>The sun, the sands and the water – the finest beach experiences that allure a traveller are right here in Dhanushkodi. The vastness and the deepness of the blue sea is a sight to behold; and the endless fascinations on the shore are all to be experienced.</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Bc}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Rameswaram Beach</h4>
           <p>Pamban beach which is located in Pamban island is an offbeat tourist destination in Rameswaram. The beach is one of the important fishing ports in Rameswaram and offers amazing views of the azure waters that stretch around the island.</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Bm}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Marina Beach</h4>
           <p>There are certain attractions that define a city in many unique ways; reflecting the essence, the character and the very soul of that destination. That is what Marina Beach is to Chennai – the city’s heart that reflects everything that is best about the city.</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Bk} style={{width:'100%',height:300}} />
          <CardBody>
            
              <h4>Kanniyakumari Beach</h4>
           
            <p>There are certain attractions that define a city in many unique ways; reflecting the essence, the character and the very soul of that destination. That is what Kanniyakumari Beach is to Kanniyakumari the city’s heart that reflects everything that is best about the city.</p>
           
         
          </CardBody>
        </Col>
      </Row>
    </Container>
      </Card.Body>
      
    </Card>
  );
}

export default BasicExample;