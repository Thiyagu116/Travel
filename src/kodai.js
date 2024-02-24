import RestoreIcon from '@mui/icons-material/Restore';
import Card from 'react-bootstrap/Card';
import Kd from "./kd.jpg"
import Kl from "./kl.jpg"
import Kgc from "./kgc.jpg"
import Kfp from "./kfp.jpg"
import CardBody from 'react-bootstrap/esm/CardBody';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardText from 'react-bootstrap/esm/CardText';

function BasicExample() {
  return (
    <Card style={{ width: '18rem',height:700,width:'100%'}}>
      <Card.Img variant="top" src={Kd}  style={{ height:700,width:'100%'}} />

      <Card.ImgOverlay style={{color:'white'}}>
        <Card.Title><h2 style={{marginTop:40}}>Kodaikanal</h2></Card.Title>
      <CardText><h4 style={{marginTop:40}}>Hills are good places to get a nice view.</h4></CardText>
      <CardText><h4> It looks like a little bump in the Earth</h4> </CardText>
      <Card.Text><h4>A hill is a piece of land that rises higher than everything surrounding it.</h4></Card.Text>
      </Card.ImgOverlay>

      <Card.Body >
        <h4 style={{marginTop:50}}>Kodaikanal</h4>
        
        <p style={{marginTop:30}}>Hills and valleys filled with the enigmatic hug of mist, lush mountain ranges that offer a warm welcome to visitors, enjoyment and experiences that proffer beautiful memories for a lifetime – Kodaikanal is a wonder in ways much more than one.However, the earliest references to the stunning hill station can be found as early as the Sangam literature time. However the modern era of Kodaikanal began only after the British came in. It served as a summer retreat and a vacation spot for the colonial power. Ever since those days, Kodaikanal has been a popular choice among hill station lovers for a quick escape up the mountain</p>
        <p>f you’ve ever dreamt of being pampered by the lulling lullabies of Nature, and being embraced affectionately by the cool breeze that flows in from picturesque hill slopes, then Kodaikanal is indeed the place to be in to make those dreams come true. The scenic beauty of Kodaikanal never ceases to amaze travellers. 
</p>
<p>Referred to as the “Princess of Hills”, Kodaikanal is one of the most sought-after hill station destinations in Tamil Nadu and the whole of India. Located at about 7000 ft above the sea-level, Kodaikanal was established as a destination by British bureaucrats and Christian missionaries in the year of 1845. For a discerning traveller, the locale offers much to see, enjoy and experience. Plenty of activities await a visitor here. Boating, cycling, horse riding and trekking are some of the most common among them. One of the other spectacles of this region is the Kurinji flower that blooms only once in 12 years, making itself a unique spectacle to watch.
</p>
    
    <h4 style={{marginTop:30}}>Best Time to Visit</h4>
    <p style={{marginTop:30}}> 🔆 Although Kodaikanal can be visited and explored any time of the year, the best is the summer months between March and June</p>
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
          
        <Card.Img variant="top" src={Kgc} style={{width:'100%',height:300}} />
          <CardBody>
            
              <h4>Guna Caves</h4>
            <p>Located on the Moir Point road, the caves are situated 10 kilometres from Kodaikanal. You reach the caves after a walk through pine forests. Whilst you may not be able to enter them for safety reasons, you can always view the caves from a safe distance.</p>
            <p> You can always take a look at the deep narrow caves which are now barricaded and grilled with iron bars. If it is a little bit of mystery and history you are looking for, then Guna caves is the ideal place to plan a picnic.</p>
          <p>History has it that an American Mr B. S. Ward discovered the place in 1821. </p>
          <h5>Guna Caves Address:</h5><p> Nilgiris, Vannarapettai, kodaikanal, Tamil Nadu,624103, India</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Kl}style={{width:'100%',height:300}} />
          <CardBody>
           <h4>Kodaikanal Lake</h4>
           <p>The picturesque kodaikanal Lake, also known as the kodaikanal boat house, is a much sought-after tourist attraction located in the midst of serene greenery. The kodaikanal Lake is an artificially constructed lake, built by John Sullivan in 1824.</p>
          <p>Boat races and boat pageantry are also conducted as part of the summer festival conducted here in May. </p>
          <p>Paddle boat-, motor boat- and rowing boat services are also available. The ride offers a view of the serene greenery around and also of the distant hills.  </p>
          <h5>Kodaikanal Lake Address:</h5> <p>kodaikanal Lake, Ooty, The Nilgiris, Tamil Nadu,624103, India</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Kfp} style={{width:'100%',height:300}} />
          <CardBody>
            <h4>Pine Forest, Kodaikanal</h4>
            <p>A journey of just 15 minutes from Kodaikanal town centre will take you to the famed Pine Tree Forests of Kodaikanal. These scenic woodlands, obscured in a fleeting veil of mist, offer a delightful experience to all travellers.</p>
            <p>Nestled in the slopes of Nilgiris, the Pine Tree Forest is a grove of orderly growing pine trees that are several hundreds of years old</p>
            <p>Wander with your beloved through these woods obscured in white blanket of mist or enjoy a leisurely picnic with family, Pine Tree Forest promises.</p>
            <h5>Pine Tree Forests kodaikanal Address:</h5> <p>Nagapattinam - Coimbatore - Gundlupet Hwy, kodaikanal, Tamil Nadu, 624103, India</p>
          </CardBody>
        </Col>
      </Row>
    </Container>
      </Card.Body>
      
    </Card>
  );
}

export default BasicExample;