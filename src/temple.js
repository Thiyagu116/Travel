import RestoreIcon from '@mui/icons-material/Restore';
import Card from 'react-bootstrap/Card';
import Md from "./mdh.webp"
import Td from "./tra.webp"
import Tr from "./tar.webp"
import Tm from "./tm.webp"
import Tmm from "./tmm.webp"
import Tt from "./ttp.webp"
import Ta from "./tss.webp"
import Ts from "./ts.webp"
import Tk from "./tak.webp"
import Mm from "./mm.jpeg"
import Ma from "./ma.jpeg"
import Ttl from "./ttl.jpg"
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
        <Card.Title><h2 style={{marginTop:40}}>Temples</h2></Card.Title>
      <CardText><h4 style={{marginTop:40}}>The temple is one of the famous shrines in Madurai.</h4></CardText>
      <CardText><h4> There are 670 steps downhill of the hills, to reach the temple.</h4> </CardText>
      <Card.Text><h4>A temple is a building reserved for spiritual rituals and activities such as prayer and sacrifice.</h4></Card.Text>
      </Card.ImgOverlay>

      <Card.Body >
        <h4 style={{marginTop:50}}>Temples</h4>

        <p>A temple is a building reserved for spiritual rituals and activities such as prayer and sacrifice. Religions which erect temples include Christianity, Hinduism, Buddhism, Sikhism, Jainism, Islam, Judaism.</p>
        <p>The basic elements of the Hindu temple remain the same across all periods and styles. The most essential feature is the inner sanctuary, the garbhagriha or womb-chamber, where the primary murti or cult image of a deity is housed in a simple bare cell.</p>
    
    <h4 style={{marginTop:30}}>Best Time to Visit</h4>
        <p style={{marginTop:30}}> 🔆 Although Temples can be visited and explored any time of the years.</p>
        <h4>Timing</h4>
    <p><RestoreIcon></RestoreIcon> 6 am-12:30 pm, 4-8:30 pm</p>
    
    <h4>Top Attractions</h4>

    <Container style={{marginTop:30}}>
      <Row>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Tk} style={{width:'100%',height:300}} />
          <CardBody>
            
              <h4>Alagar Kovil</h4>
           
            <p>Situated on a hill in a panoramic backdrop, Azhagar Kovil temple is a popular destination in Madurai. It is one of the 108 abodes of Lord Vishnu, who is worshipped in the name of Kallazhagar.</p>
         
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Mm}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Sri Meenakshi Amman Temple</h4>
           <p>Madurai is synonymous with Sri Meenakshi Amman temple. A famous pilgrimage spot, the temple is renowned for its classic architectural style, stupendous structures and carvings.</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Ma} style={{width:'100%',height:300}} />
          <CardBody>
            <h4>Aayiram Kaal Mandapam</h4>
            <p>The mystical city of Madurai is where ancient histories and cultural richness interweave to create a tapestry of splendour.</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Tr}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Arunchalaeswarar Temple</h4>
           <p>Nestled amidst the Tiruvannamalai Hill lies a majestic jewel of the ancient world, the Arunchalaeswarar Temple. Its towering presence stands tall, reaching towards the heavens with a grandeur that takes your breath away.</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Tm}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Arulmigu Dhandayuthapani Swamy Temple, Palani</h4>
           <p>Arulmigu Dhandayuthapani Swamy Temple is one of the richest temples in India. Located 100 kilometres south-west of Coimbatore and north-west of Madurai. There are 670 steps downhill of the hills, to reach the temple.</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Td} style={{width:'100%',height:300}} />
          <CardBody>
            
              <h4>Rameswaram</h4>
           
            <p>At the very tip of the Indian peninsula lies Rameswaram, a serene strip of land that boasts of spectacular natural beauty. Renowned for being a pilgrimage destination, Rameswaram is home to the famous Ramanathaswamy Temple, known for its elaborate corridors and splendidly sculpted pillars.</p>
           
         
          </CardBody>
        </Col>

        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Tmm} style={{width:'100%',height:300}} />
          <CardBody>
            <h4>Maruthamalai Murugan Temple</h4>
            <p>Visit the magnificent Murugan Temple in Maruthamalai, which is nestled in the breathtaking Western Ghats just 15 kilometres west of Coimbatore. This temple dedicated to Lord Murugan is an absolute must-see for any tourist, with its marvellous architecture set against a stunning scenic backdrop.</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Ta}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Sri Subramaniya Swami Temple</h4>
           <p>It’s splendorous, it’s elegant and it’s sacred – all at the same time. Here is where you find inner peace and a sublime connection to an ethereal bliss. There is something so divine about Sri Subramaniya Swami Temple that can only be experienced in person.
</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Ts}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Srivilliputhur Andal Temple</h4>
           <p>The magnificent Srivilliputhur Andal Temple is a beacon of sacred splendour, radiating divine grace and beauty for all to admire and bask in its glory. This ancient temple, nestled in the lush green hills of Tamil Nadu, is a true marvel of Indian architecture and a testament to the rich cultural heritage of the land.</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Ttl} style={{width:'100%',height:300}} />
          <CardBody>
            
              <h4>Brihadeeswara Temple</h4>
           
            <p>One of the largest temples in India, the Brihadeeswara Temple also known as Peruvudaiyar Kovil is located in Thanjavur. Dedicate to Lord Shiva represented as a huge ‘Lingam’, the temple was built around 1010 AD by the Chola king Rajaraja Chola.</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Tr}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Arunchalaeswarar Temple</h4>
           <p>Nestled amidst the Tiruvannamalai Hill lies a majestic jewel of the ancient world, the Arunchalaeswarar Temple. Its towering presence stands tall, reaching towards the heavens with a grandeur that takes your breath away.</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Tt}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Tirupparankundram</h4>
           <p>Carved out of the mountain, Thiruparankundram Murugan Temple is an absolute architectural marvel. The temple is one of the famous shrines in Madurai.</p>
          </CardBody>
        </Col>
      </Row>
    </Container>
      </Card.Body>
      
    </Card>
  );
}

export default BasicExample;