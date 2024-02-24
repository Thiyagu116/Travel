import RestoreIcon from '@mui/icons-material/Restore';
import Card from 'react-bootstrap/Card';
import Kn from "./kan.jpg"
import Kk from "./kk.webp"
import Kkd from "./kkd.webp"
import Ks from "./ks.webp"
import CardBody from 'react-bootstrap/esm/CardBody';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardText from 'react-bootstrap/esm/CardText';

function BasicExample() {
  return (
    <Card style={{ width: '18rem',height:700,width:'100%'}}>
      <Card.Img variant="top" src={Kn}  style={{ height:700,width:'100%'}} />

      <Card.ImgOverlay style={{color:'white'}}>
        <Card.Title><h2 style={{marginTop:40}}>Kanniyakumari</h2></Card.Title>
      <CardText><h4 style={{marginTop:40}}>It is the southernmost tip of the mainland of India.</h4></CardText>
      <CardText><h4>The place gets its name from the Hindu goddess Devi Kanniyakumari</h4> </CardText>
      <Card.Text><h4>Two popular attractions of the region are the Vivekananda Rock Memorial and the Statue of Thiruvalluvar located side by side in the sea.  </h4></Card.Text>
      </Card.ImgOverlay>

      <Card.Body >
        <h4 style={{marginTop:50}}>Kanniyakumari</h4>
        
        <p style={{marginTop:30}}>Dreaming of a delightful vacation by a splendid seaside where you can watch sunrise and sunset in all its glory? Or simply walk around the place, mesmerised by the enchanting beauty and historic virtues it treats you with? Welcome to Kanniyakumari .</p>
        <p>Kanniyakumari is a special destination in many different ways. It is the southernmost tip of the mainland of India. Three major water bodies – the Arabian Sea, Bay of Bengal and the Indian Ocean – converge right here in Kanniyakumari. Such a geographically blessed destination is rare and these features make Kanniyakumari  one of the most visited places in India annually. 
 
</p>
<p>The place gets its name from the Hindu goddess Devi Kanniyakumari, who is considered to be the sister of Lord Krishna. When the Dutch East India Company conquered Portuguese Ceylon from the Portuguese East Indies, the name Kanniyakumari was shortened to Comorin. Eventually during the British regime in India, the destination began to be called Cape Comorin. Later, the Government of India renamed it as Kanniyakumari.Two popular attractions of the region are the Vivekananda Rock Memorial and the Statue of Thiruvalluvar located side by side in the sea. 
</p>
    
    <h4 style={{marginTop:30}}>Best Time to Visit</h4>
    <p style={{marginTop:30}}> 🔆 Although Kanniyakumari can be visited and explored any time of the year, the best is the summer months between March and June</p>
    <h4>Timing</h4>
    <p><RestoreIcon></RestoreIcon> 6 am-12:30 pm, 4-8:30 pm</p>

    <h4>Entry Fee</h4>
    <p> Free</p>

    <h4>Top Attractions</h4>
    <Container style={{marginTop:30}}>
      <Row>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Ks} style={{width:'100%',height:300}} />
          <CardBody>
            
              <h4>Thiruvalluvar Statue</h4>
            <p>The waves around remind the words of his poems; high and low tides full of varied emotions, so profound and elegant. The Thiruvalluvar Statue in Kanniyakumari is not just a splendid work of art, it is a masterpiece for generations.
</p>
          <p>It’s a sight to behold – the majesty of the Thiruvalluvar Statue that can be seen from a long distance. It stands tall at 41 metres, with the deep blue sky and resplendent sea in the backdrop. Located on a rock, right next to the Vivekananda Rock Memorial in Kanniyakumari, the breathtaking statue of Thiruvalluvar was created by the Indian sculptor.</p>
          <h5>Thiruvalluvar Statue Address:</h5><p>Kanyakumari, Tamil Nadu 629164</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Kk}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Vivekananda Rock Memorial</h4>
           <p>Amid the soothing sea breeze and dancing waves is a rock, so enigmatic and elegant. It’s a tribute to India’s greatest monk who took this land’s spiritual brilliance to the world. The Vivekananda Rock Memorial is as timeless as the sage himself.
</p>
          <p>A 19th century philosopher and author, Swami Vivekananda took India’s spiritual fame to the world at the Parliament of World’s Religions held in Chicago in 1893. It was in honour of the great monk that the memorial was erected in 1970. The rock on which the memorial is built is said to be where Vivekananda attained enlightenment.</p>
          <h5>Vivekananda Rock Memorial Address:</h5><p>Kanyakumari, Tamil Nadu 629164</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Kkd} style={{width:'100%',height:300}} />
          <CardBody>
            <h4>Mathoor Aqueduct & Hanging Bridge</h4>
            <p>Here’s an engineering wonder amid lush greenery, that offers visitors breathtaking scenes of the stunning surroundings. Rivers, hills and the thrills of being one with Nature – Mathoor Hanging Bridge is a delightful place to visit and explore.</p>
            <p>he beauty of Nature is a factor we all love to explore.The peculiarities of Nature are something that we will be delighted to know about and experience. Sometimes, man-made structures that are set on the picture-perfect backdrop of lush greenery will also offer a splendid visual treat.</p>
            <h5>Mathoor Aqueduct & Hanging Bridge Address:</h5><p>Mathoor Hanging Trough, Aruvikkarai,Kanyakumari, Tamil Nadu 629164</p>
          </CardBody>
        </Col>
      </Row>
    </Container>
      </Card.Body>
      
    </Card>
  );
}

export default BasicExample;