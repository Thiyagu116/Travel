import RestoreIcon from '@mui/icons-material/Restore';
import Card from 'react-bootstrap/Card';
import Th from "./thanjai.jpg"
import Tt from "./tt.jpg"
import Tl from "./tl.jpg"
import Ttl from "./ttl.jpg"
import CardBody from 'react-bootstrap/esm/CardBody';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardText from 'react-bootstrap/esm/CardText';

function BasicExample() {
  return (
    <Card style={{ width: '18rem',height:700,width:'100%'}}>
      <Card.Img variant="top" src={Th} style={{ height:700,width:'100%'}} />

      <Card.ImgOverlay style={{color:'white'}}>
        <Card.Title><h2 style={{marginTop:40}}>Thanjavur</h2></Card.Title>
      <CardText><h4 style={{marginTop:40}}> However this historic city is much more than that.</h4></CardText>
      <CardText><h4>Thanjavur is one destination where you get to see an abundance of them</h4> </CardText>
      <Card.Text><h4>Their rich patronage to paintings, dance and music has made Thanjavur a destination of cultural exuberance. </h4></Card.Text>
      </Card.ImgOverlay>

      <Card.Body >
        <h4 style={{marginTop:50}}>Thanjavur</h4>
        <p style={{marginTop:30}}>Thanjavur has been under the reign of various dynasties including the Cholas, Pandyas, Nayaks, Vijayanagara Kings and the Marathas, subsequently falling under the rule of the British. Every kingdom left its own indelible legacy that can be seen in every nook and corner of the town today. Their rich patronage to paintings, dance and music has made Thanjavur a destination of cultural exuberance. 
</p>
        <p >Stretches of temples that speak volumes about the brilliance of Dravidian architecture – that is what Thanjavur is in one glimpse. However this historic city is much more than that. Arrive at the destination and be wondered about the breadth of lush green paddy fields that offer an absolute feast to the eyes.
</p>
        <p>Thanjavur is one destination where you get to see an abundance of them; most of them being stunning architectural wonders that carry the glory of their plush past to this day. </p>
    
    <h4 style={{marginTop:30}}>Best Time to Visit</h4>
    <p style={{marginTop:30}}> 🔆 Although Thanjavur can be visited and explored any time of the years.</p>
    <h4>Timing</h4>
    <p><RestoreIcon></RestoreIcon> 6 am-12:30 pm, 4-8:30 pm</p>

    <h4>Entry Fee</h4>
    <p> Free</p>
    
    <h4>Top Attractions</h4>
    <Container style={{marginTop:30}}>
      <Row>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Ttl} style={{width:'100%',height:300}} />
          <CardBody>
            
              <h4>Brihadeeswara Temple</h4>
           
            <p>One of the largest temples in India, the Brihadeeswara Temple also known as Peruvudaiyar Kovil is located in Thanjavur. Dedicate to Lord Shiva represented as a huge ‘Lingam’, the temple was built around 1010 AD by the Chola king Rajaraja Chola I.</p>
            <p>One of the main attractions of the temple is a big statue of Nandi, the sacred bull of Lord Shiva. 13 ft high and 16 ft wide, the statue is sculpted out of a single rock. Fortified walls rich in elaborate rock art works surround the temple and give a grand look to the entire complex. The main temple tower is 216 ft high and the tallest of its kind in the world.</p>
            <h5>Brihadeeswara Temple Address:</h5><p>Membalam Rd, Balaganapathy Nagar, Thanjavur, Tamil Nadu 613007</p>
            
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Tl}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Saraswathi Mahal Library</h4>
           <p>Libraries are unrivalled cultural repositories and treasure houses of knowledge. They are the bridge between people and the outside world. If you go to Thanjavur, you can visit one of the oldest libraries in Asia called Saraswathi Mahal Library also known as Thanjavur Maharaja Serfoji's Saraswathi Mahal Library.</p>
          <p>A large hall of Saraswathi Mahal, in addition to the library section, serves as the museum. You can find the statue of the Goddess Saraswathi, a large picture of Rama Pattabhishekam, a few smaller but equally stunning paintings of Ganesha and Lakshmi, miniatures of several Tanjore Maratha King.</p>
          <h5>Saraswathi Mahal Library Address:</h5><p>Membalam Rd, Balaganapathy Nagar, Thanjavur, Tamil Nadu 613007</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Tt} style={{width:'100%',height:300}} />
          <CardBody>
            <h4>Punnainallur Mariamman Temple</h4>
            <p>Punnai Nallur Mariamman temple is a Hindu temple located at Thanjavur in the state of Tamil Nadu, India. The temple of goddess Mariamman is one of the famous temples around Thanjavur District. There is an important temple at Punnai nallur, 6 miles from Tanjore, dedicated to Mariamman.</p>
            <p>The Sthala  Puranam states that, before waging a war with the demon Tanja of Tanjore, Lore Siva stationed the Ashta Saktis (eight powers) one at each of the eight directions, and the one stationed at the eastern direction is now the presiding deity of this temple.</p>
            <h5>Punnainallur Mariamman Temple Address:</h5><p>No 10, Mariamman Kovil, Thanjavur, Arulmolipet, Tamil Nadu 613001</p>
          </CardBody>
        </Col>
      </Row>
    </Container>
      </Card.Body>
      
    </Card>
  );
}

export default BasicExample;