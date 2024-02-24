import Card from 'react-bootstrap/Card';
import Ot from "./ootyhome.jpg"
import Rs from "./rose.jpg"
import Lk from "./lake.jpg"
import Pi from "./pine.jpg"
import CardBody from 'react-bootstrap/esm/CardBody';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestoreIcon from '@mui/icons-material/Restore';
import CardText from 'react-bootstrap/esm/CardText';

function BasicExample() {
  return (
    <Card style={{ width: '18rem',height:700,width:'100%'}}>
      <Card.Img variant="top" src={Ot}  style={{ height:700,width:'100%'}} ></Card.Img>
      <Card.ImgOverlay style={{color:'white'}}>
        <Card.Title><h2 style={{marginTop:40}}>Ooty</h2></Card.Title>
      <CardText><h4 style={{marginTop:40}}>Hills are good places to get a nice view.</h4></CardText>
      <CardText><h4>It looks like a little bump in the Earth</h4> </CardText>
      <Card.Text><h4>A hill is a piece of land that rises higher than everything surrounding it.</h4></Card.Text>
      </Card.ImgOverlay>
      <Card.Body >
        <h4 style={{marginTop:50}}>Ooty</h4>
        
        <p style={{marginTop:30}}>She is charming, she is classy, she is unique – she is the Queen of Hill Stations in India. Udhagamandalam, popularly known as Ooty is a hill station that will surely mesmerise you with its beguiling beauty.</p>
        <p>A chain of misty hills spread across a lush green carpet – with plenty to see, enjoy and experience. Ooty is much more than a visitor’s paradise. It lends a piece of itself to its guests that they will be thrilled to take back. One of the most beautiful hill stations in India, Ooty nestles in the Nilgiri district of Tamil Nadu. An erstwhile summer resort of the British Raj in India, Ooty has transformed over the years into one of the most sought-after tourism destinations in Tamil Nadu. 
</p>
<p>With a cool and soothing climate almost all year round, Ooty welcomes tourists from far and wide. It’s not just about the mountains and hills, Ooty offers much more to discerning travellers who drive up the winding roads to reach the pinnacle. Lakes, gardens, parks, peaks, waterfalls and simply amazing accommodation options. No wonder Ooty is called the 'Switzerland of India', of such grandeur is the scenic beauty the destination is so well acclaimed for. If you would love to relax over a cup of tea, sitting back and gazing at the vastness of nature, Ooty is indeed the place to be. Besides that, the Nilgiri biosphere is rich in flora and fauna, allowing you to escape into the depths of mystic jungles and explore once-in-a-lifetime experiences. 
</p>
    
    <h4 style={{marginTop:30}}>Best Time to Visit</h4>
    <p style={{marginTop:30}}> 🔆 Although Ooty can be visited and explored any time of the year, the best is the summer months between March and June</p>
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
          
        <Card.Img variant="top" src={Rs} style={{width:'100%',height:300}} />
          <CardBody>
            
          <h4>Government Botanical Garden, Ooty</h4>
          <p>The Government Botanical Garden in Ooty, spread over 55 acres, is a mesmerizing tourist site that has been attracting visitors for years.</p>
          <p> Situated about 2400 – 2500 mts above sea level, the botanical garden was established by Marquis of Tweedale in 1897 with William Graham McIvor as the architect.</p>
          <p>Flower lovers are sure to find Conservatory where many varieties of flowering plants are nurtured</p>
          <h5>Ooty Botanical Gardens Address:</h5><p> Nilgiris, Vannarapettai, Ooty, Tamil Nadu, 643001, India</p>
          </CardBody>
        </Col>
        <Col md={4} xs={12} >
          
        <Card.Img variant="top" src={Lk}style={{width:'100%',height:300}} />
          <CardBody>
          <h4>Ooty Lake</h4>
          <p>The picturesque Ooty Lake, also known as the Ooty boat house, is a much sought-after tourist attraction located in the midst of serene greenery. The Ooty Lake is an artificially constructed lake, built by John Sullivan in 1824.</p>
          <p>Boat races and boat pageantry are also conducted as part of the summer festival conducted here in May. </p>
          <p>Paddle boat-, motor boat- and rowing boat services are also available. The ride offers a view of the serene greenery around and also of the distant hills.  </p>
          <h5>Ooty Lake Address:</h5> <p>Ooty Lake, Ooty, The Nilgiris, Tamil Nadu, 643001, India</p>
        </CardBody>
        </Col>
        <Col md={4} xs={12}>
          
        <Card.Img variant="top" src={Pi} style={{width:'100%',height:300}} />
          <CardBody>
            <h4>Pine Forest</h4>
            <p>A journey of just 15 minutes from Ooty town centre will take you to the famed Pine Tree Forests of Ooty. These scenic woodlands, obscured in a fleeting veil of mist, offer a delightful experience to all travellers.</p>
            <p>Nestled in the slopes of Nilgiris, the Pine Tree Forest is a grove of orderly growing pine trees that are several hundreds of years old</p>
            <p>Wander with your beloved through these woods obscured in white blanket of mist or enjoy a leisurely picnic with family, Pine Tree Forest promises.</p>
            <h5>Pine Tree Forests Ooty Address:</h5> <p>Nagapattinam - Coimbatore - Gundlupet Hwy, Ooty, Tamil Nadu, 643005, India</p>
          </CardBody>
        </Col>
      </Row>
    </Container>
      </Card.Body>
      
    </Card>
  );
}

export default BasicExample;