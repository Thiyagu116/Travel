
import Card from 'react-bootstrap/Card';
import Hh from "./hh.webp"
import Hk from "./hk.webp"
import Hl from "./hl.webp"
import Hc from "./hc.webp"
import ooty from "./ooty.jpg"
import kodai from "./kodai.jpg"
import val from "./val.jpg"
import CardBody from 'react-bootstrap/esm/CardBody';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardText from 'react-bootstrap/esm/CardText';

function BasicExample() {
  return (
    <Card style={{ width: '18rem',height:700,width:'100%'}}>
      <Card.Img variant="top" src={Hh} style={{ height:700,width:'100%'}} />

      
      <Card.ImgOverlay style={{color:'white'}}>
        <Card.Title><h2 style={{marginTop:40}}>Hills</h2></Card.Title>
      <CardText><h4 style={{marginTop:40}}>Hills are good places to get a nice view.</h4></CardText>
      <CardText><h4>It looks like a little bump in the Earth</h4> </CardText>
      <Card.Text><h4>A hill is a piece of land that rises higher than everything surrounding it.</h4></Card.Text>
      </Card.ImgOverlay>

      <Card.Body >
        <h4 style={{marginTop:50}}>Hills</h4>

        <p>A hill is a landform that extends above the surrounding terrain. It often has a distinct summit, and is usually applied to peaks which are above elevation compared to the relative landmass, though not as prominent as mountains.</p>
        
    <h4 style={{marginTop:30}}>Best Time to Visit</h4>
        <p style={{marginTop:30}}> 🔆 Although Hills can be visited and explored any time of the years, the best is the summer months between March and June.</p>
    <h4>Top Attractions</h4>

    <Container style={{marginTop:30}}>
      <Row>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Hk} style={{width:'100%',height:300}} />
          <CardBody>
            
              <h4>Kolli Hills</h4>
           
            <p>Gifted with pleasant weather throughout the year, Kolli hills is one of those round the season destinations in Tamil Nadu. Unique in landscape and attractions, it has a scenic beauty and has plenty to offer for the exploring travellers.</p>
         
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Hl}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Kolukkumalai</h4>
           <p>Situated near Munnar is this world's highest tea plantation known as Kolukkumalai, a hamlet in Theni district in Tamil Nadu. It is situated 7,130 ft above sea level and effortlessly takes a place in your heart with its most picturesque views of Nature.</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={ooty} style={{width:'100%',height:300}} />
          <CardBody>
            <h4>Ooty</h4>
            <p>She is charming, she is classy, she is unique – she is the Queen of Hill Stations in India. Udhagamandalam, popularly known as Ooty is a hill station that will surely mesmerise you with its beguiling beauty.</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={kodai}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Kodaikanal</h4>
           <p>The Cardamom hills denote the entire Western Ghats that lie south of the Palakkad gap. Straddling both Kerala and Tamil Nadu, the crest of the hills form the boundary between the two states.</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Hc}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Coonoor</h4>
           <p>Seek out the beauty of nature at its very best at Coonoor, the second largest hill station in the Nilgiri hills. For trekkers and tourists, the place serves up a lot to explore. Blanketed by the green cover of Nilgiri hills, it packs an array of attractions.</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={val} style={{width:'100%',height:300}} />
          <CardBody>
            
              <h4>Valparai</h4>
           
            <p>This beautiful, hilly hamlet of Valparai is the ultimate choice for those who wish to spend a quiet memorable time away from all the hustle. The lavish green spread, tea plantations and winding paths serve up a lot to explore.</p>
           
         
          </CardBody>
        </Col>
      </Row>
    </Container>
      </Card.Body>
      
    </Card>
  );
}

export default BasicExample;