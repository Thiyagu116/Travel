import RestoreIcon from '@mui/icons-material/Restore';
import Card from 'react-bootstrap/Card';
import Vp from "./vp.jpg"
import Vf from "./vf.jpg"
import Vg from "./vg.jpg"
import Vt from "./vt.jpg"
import CardBody from 'react-bootstrap/esm/CardBody';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardText from 'react-bootstrap/esm/CardText';

function BasicExample() {
  return (
    <Card style={{ width: '18rem',height:700,width:'100%'}}>
      <Card.Img variant="top" src={Vp}  style={{ height:700,width:'100%'}} />

      <Card.ImgOverlay style={{color:'white'}}>
        <Card.Title><h2 style={{marginTop:40}}>Valparai</h2></Card.Title>
      <CardText><h4 style={{marginTop:40}}>Hills are good places to get a nice view.</h4></CardText>
      <CardText><h4>It looks like a little bump in the Earth</h4> </CardText>
      <Card.Text><h4>A hill is a piece of land that rises higher than everything surrounding it.</h4></Card.Text>
      </Card.ImgOverlay>

      <Card.Body >
        <h4 style={{marginTop:50}}>Valparai</h4>
        <p style={{marginTop:30}}>Valparai Hill station is located above 3500 feet height from the sea level on the Anamalai mountain range of the Western Ghats and is also one of the best  tourist places in Tamilnadu. At a distance of 64 km from Pollachi and 102 kms distance from Coimbatore. Valparai Hill station is pollution free heavenly land surrounded with full of tea estates.It stands majestically with Green Spread Mountains and picturesque forest all around. Travelling between Pollachi to Valparai is itself an exotic experience.</p>
        <p >Valparai is a hill station located in the Coimbatore district of Tamil Nadu, India. It is situated in the Anaimalai Hills of the Western Ghats and is surrounded by tea plantations, forests, and mountains, making it a popular destination for nature lovers and adventure enthusiasts. Apart from nature, Valparai also has a rich cultural heritage, with many tribal communities living in the region.
</p>
        <p>This place has number of tea and coffee estates surrounded by thick forest. The climate of Valparai is most suitable for tea, coffee, cardamom and cincona trees. According to the earlier records, in 1846, Mr. Ramaswamy Mudaliyar started cultivating coffee in his private estate.</p>
    
    <h4 style={{marginTop:30}}>Best Time to Visit</h4>
    <p style={{marginTop:30}}> 🔆 Although Valparai can be visited and explored any time of the year, the best is the summer months between March and June</p>
    <h4>Timing</h4>
    <p><RestoreIcon></RestoreIcon> 7:00 am – 6:30 pm</p>

    <h4>Entry Fee</h4>
    <p> ₹ 30 per person for Adults</p>
    <p>₹ 15 per person for Children</p>
    <p>₹ 100 for Video Camera</p>
    
    <h4>Top Attractions</h4>
    <Container style={{marginTop:30}}>
      <Row>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Vf} style={{width:'100%',height:300}} />
          <CardBody>
            
              <h4>Monkey waterfalls</h4>
            <p>A Scenic View</p>
            <p>The Monkey Falls are a popular tourist attraction located in the town of Valparai in the Coimbatore district of Tamil Nadu. </p>
            <p>They are known locally as ‘Chinna Kallar’ and are a part of the Anaimalai Hills range. The Monkey Falls are so named because of the large number of monkeys that inhabit the surrounding forest.</p>
            <h5>Monkey waterfalls Address:</h5><p> Pollachi Valparai Road, Anaimalai, Pollachi - 642104 (Near Uphill Ghat Road, Valparai)</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Vt}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Tea Estate Garden</h4>
           <p>Fresh Tea Tasting</p>
          <p>Valparai is famous for its tea estates, which are spread across the hills and valleys of the Western Ghats. The tea estates in Valparai are known for producing high-quality tea that is exported to various parts of the world. Tea estate garden in Valparai is a must-visit for anyone traveling to the region. </p><p>Paddle boat-, motor boat- and rowing boat services are also available.  </p>
          <h5>Tea Estate Garden Address:</h5><p>  Valparai - Athirapilli Rd, Valparai, Tamil Nadu 642127 </p>
          </CardBody>
        </Col>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Vg} style={{width:'100%',height:300}} />
          <CardBody>
            <h4>Grass Hills National Park</h4>
            <p>For the Nature Enthusiasts</p>
            <p>Grass Hills National Park is a protected area located in the Western Ghats of Tamil Nadu. The park is spread over an area of around 35 square kilometres and is known for its unique ecosystem, which is dominated by montane grasslands and shola forests. The park is home to several species of animals, including the Nilgiri tahr, sambar deer, barking deer, wild boar, and leopard.</p>
            <h5>Grass Hills National Park Address:</h5><p>  Valparai - Athirapilli Rd, Valparai, Tamil Nadu 642127 </p>
          </CardBody>
        </Col>
      </Row>
    </Container>
      </Card.Body>
      
    </Card>
  );
}

export default BasicExample;