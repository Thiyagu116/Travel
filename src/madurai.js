import RestoreIcon from '@mui/icons-material/Restore';
import Card from 'react-bootstrap/Card';
import Md from "./mdh.webp"
import Mm from "./mm.jpeg"
import Mg from "./mg.jpeg"
import Ma from "./ma.jpeg"
import CardBody from 'react-bootstrap/esm/CardBody';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardText from 'react-bootstrap/esm/CardText';

function BasicExample() {
  return (
    <Card style={{ width: '18rem',height:700,width:'100%'}}>
      <Card.Img variant="top" src={Md} style={{ height:700,width:'100%'}} />
      
      <Card.ImgOverlay style={{color:'white'}}>
        <Card.Title><h2 style={{marginTop:40}}>Madurai</h2></Card.Title>
      <CardText><h4 style={{marginTop:40}}>Temples, churches and palaces adorn the streets of Madurai.</h4></CardText>
      <CardText><h4> There is plenty to see and know about.</h4> </CardText>
      <Card.Text><h4>The earliest references of Madurai can be traced back to the 3rd century BC. </h4></Card.Text>
      </Card.ImgOverlay>

      <Card.Body >
        <h4 style={{marginTop:50}}>Madurai</h4>
        <p  style={{marginTop:30}}>An ancient city that takes you back in time; where you will stand wondering about the evolution of culture, traditions and civilization. Walk further and you will be amazed by how such a historic city has a bustling urban face too.</p>
        <p>‘Thoonga Nagaram’ is what Madurai is popularly called in Tamil Nadu. It means ‘the city that never sleeps’. That’s true in many ways. History stays awake in this destination and the sprawling urban centre that Madurai is, offers you all the conveniences you will love for a comfortable stay. The earliest references of Madurai can be traced back to the 3rd century BC. </p>
        <p>Temples, churches and palaces adorn the streets of Madurai. There is plenty to see and know about. The ancient structures are simply marvellous and speak volumes about the Dravidian architectural brilliance. Besides these, Madurai has stayed relevant as a destination through history; a factor that has seen many establishments come up in the city over the years. The place is very tourism friendly and attracts millions of visitors every year. </p>
    
        <h4 style={{marginTop:30}}>Best Time to Visit</h4>
        <p style={{marginTop:30}}> 🔆 Although Madurai can be visited and explored any time of the years.</p>
        <h4>Timing</h4>
    <p><RestoreIcon></RestoreIcon> 6 am-12:30 pm, 4-8:30 pm</p>

    <h4>Entry Fee</h4>
    <p> Free</p>

    <h4>Top Attractions</h4>
    <Container style={{marginTop:30}}>
      <Row>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Mg} style={{width:'100%',height:300}} />
          <CardBody>
            
              <h4>Gandhi Memorial Museum</h4>
           
            <p>A must visit place in Madurai, Gandhi Memorial museum is housed in the splendid old palace of Rani Mangammal. The museum is a window to the glorious episodes of freedom struggles, glimpses from the Gandhian movement and a rich collection of relics.</p>
            <p>Madurai has an inexorable link with Gandhi. It was here that Meenakshi temple was opened to the entry of Harijans, marking a historic chapter in the fight against untouchability. The palace which now houses the museum was built during the Naick reign in 1670 AD. A replica of a hut in Sevagram sits in front of the main building of the museum.</p>
         <h5>Gandhi Memorial Museum Address:</h5><p>Gandhi Memorial Museum Tamukkam,Madurai-625020,</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Mm}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Sri Meenakshi Amman Temple</h4>
           <p>Madurai is synonymous with Sri Meenakshi Amman temple. A famous pilgrimage spot, the temple is renowned for its classic architectural style, stupendous structures and carvings.</p>
          <p> This temple finds mention in ancient texts and was completely devastated in 1310. The temple was restored to its original glory in the 14th century. It is quite an architectural marvel with 14 temple towers with a height ranging between 45-50 metres. A 1000 pillared hall is another major feature with exquisitely sculpted pillars. There are musical pillars which produce sounds of different scales.</p>
          <h5>Sri Meenakshi Amman Temple Address:</h5><p>Madurai Main, Madurai, Tamil Nadu 625001</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Ma} style={{width:'100%',height:300}} />
          <CardBody>
            <h4>Aayiram Kaal Mandapam</h4>
            <p>The mystical city of Madurai is where ancient histories and cultural richness interweave to create a tapestry of splendour. There, in the midst of this enchanting land, lies a hall of unparalleled grandeur and beauty—the Aayiram Kaal Mandapam. This hall, renowned as the "1000-pillar hall," is a testament to the architectural brilliance of the Tamil civilization. Nestled within the venerated grounds of the Meenakshi Amman Temple, this hall has been a source of awe and inspiration for generations.</p>
            <p>The musical pillars, located in the western reaches of the hall, are an experience like no other. </p>
            <h5>Aayiram Kaal Mandapam Address:</h5><p>Madurai Main, Madurai, Tamil Nadu 625001</p>
          </CardBody>
        </Col>
      </Row>
    </Container>
      </Card.Body>
      
    </Card>
  );
}

export default BasicExample;