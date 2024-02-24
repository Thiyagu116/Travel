import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Ht1 from "./hotel1.jpg"
import Ht2 from "./hotel2.jpg"
import Ht5 from "./hotel5.jpg"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import KingBedIcon from '@mui/icons-material/KingBed';
import TvIcon from '@mui/icons-material/Tv';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function ContainerInsideExample() {
  return (
    <div style={{backgroundColor:"#E8FEDA"}}>
      <Container>
        <Row>
          <Col md={6} xs={12}>
      <div style={{width:'100%',marginLeft:0,marginTop:50}}>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Ht2}style={{height:450}}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={Ht5}style={{height:450}}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Ht1}style={{height:450}}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    
    </div>
    </Col>
    <Col md={6} xs={12}>
    <div style={{width:'100%',marginTop:50}}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.3320992684635!2d76.96581027480855!3d11.013690689149842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859c6624f684d%3A0x7675f4ba3a7d90e9!2sTTDC%20-%20Hotel%20Tamil%20Nadu%20Covai%20-%20Luxurious%20Hotels%20in%20Coimbatore%20in%20Tamil%20Nadu%20in%20India!5e0!3m2!1sen!2sin!4v1708581748122!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      </div>
    
    </Col>
    </Row>
    </Container>
    <div>
      <Container >
      <Card style={{ width: 'auto',margin:'auto', marginTop:100 }}>
        <Row>
          <Col md={6} xs={12}><Card.Body>
        
        <Card.Text>
          <h3>Hotel TamilNadu</h3>
          <p style={{marginTop:30,color:"#26D1C4"}}>1279 A, Mettupalayam Rd, Tatabad, Kuppakonam Pudur, Coimbatore</p>
          <p>Delightful experience</p>
          <h3>Amenities</h3>
          <Container  className='shadow-lg' >
           <Row>
              <Col md={4} xs={12}>
              <Card.Body>
        
        <Card.Text>
          <p><WifiIcon></WifiIcon> Free Wifi</p>
         </Card.Text>
          </Card.Body>
          
              </Col>
              <Col md={4} xs={12}>
              <Card.Body>
        
        <Card.Text>
          <p><AcUnitIcon></AcUnitIcon> AC</p>
         </Card.Text>
          </Card.Body>
          
              </Col>
              <Col md={4} xs={12}>
              <Card.Body>
        
        <Card.Text>
          <p><SoupKitchenIcon></SoupKitchenIcon> Kitchen</p>
         </Card.Text>
          </Card.Body>
          
              </Col>
              <Col md={4} xs={12}>
              <Card.Body>
        
        <Card.Text>
          <p><KingBedIcon></KingBedIcon> King Sized Bed</p>
         </Card.Text>
          </Card.Body>
          
              </Col>
              <Col md={4} xs={12}>
              <Card.Body>
        
        <Card.Text>
          <TvIcon></TvIcon> TV
         </Card.Text>
          </Card.Body>
          
              </Col>
              <Col md={4} xs={12}>
              <Card.Body>
        
        <Card.Text>
          <p><CoffeeMakerIcon></CoffeeMakerIcon> Coffee/tea maker</p>
         </Card.Text>
          </Card.Body>
          
              </Col>
            </Row>
          </Container>

        </Card.Text>
        <h3>About US</h3>
        <p>Located at the heart of the business hub, the luxury of Hotel Tamilnadu Coimbatore cultivates the perfect aura for your rewarding business engagements while its comfort mesmerizes your inner soul with eternal tranquility.</p>
        <h3>Hotel Policies</h3>
        <Container className='shadow-lg'>
           <Row>
              <Col md={6} xs={12}>
              <Card.Body>
        
        <Card.Text>
          <h6>Check-In</h6>
         </Card.Text>
          </Card.Body>
          </Col>
          <Col md={6} xs={12}>
              <Card.Body>
        
        <Card.Text>
          <h6>12:00 PM</h6>
         </Card.Text>
          </Card.Body>
          </Col>
          <Col md={6} xs={12}>
              <Card.Body>
        
        <Card.Text>
          <h6>Check-Out</h6>
         </Card.Text>
        
          </Card.Body>
          </Col>
          <Col md={6} xs={12}>
              <Card.Body>
        
        <Card.Text>
          <h6>11:00 AM</h6>
         </Card.Text>
          </Card.Body>
          </Col>
          <p>Couples are welcome</p>
          <p>Guests can check in using any local or outstation ID proof (PAN card not accepted).</p>
          <p>As a complimentary benefit, your stay is now insured by Acko.</p>
          
            </Row>
          </Container>

      </Card.Body>
      </Col>
          <Col md={6} xs={12}><Card.Body>
              <h5>Date</h5>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateRangePicker']}>
        <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
      </DemoContainer>
    </LocalizationProvider>

      <Container className='shadow-lg' style={{marginTop:30}}>
           <Row>
              <Col md={6} xs={12} >
              <Card.Body>
        <Card.Text>
        
        <h4>₹ 3500</h4>
        <p>+ taxes & fees: ₹197</p>
          <h6>Tue,26 Dec - Wed,27 Dec</h6>
         </Card.Text>
          </Card.Body>
          </Col>
          <Col md={6} xs={12}>
              <Card.Body>
        
        <Card.Text>
          <h5>1 Room</h5>
         </Card.Text>
          </Card.Body>
          </Col>
          </Row>
          </Container>

          <Container className='shadow-lg' style={{marginTop:50}}>
           <Row>
              <Col md={6} xs={12}>
              <Card.Body>
        
        <Card.Text>
          <p>WELCOME75 coupon applied</p>
         </Card.Text>
          </Card.Body>
          </Col>
          <Col md={6} xs={12}>
              <Card.Body>
        
        <Card.Text>
        <p> ₹ 4173</p>
         </Card.Text>
          </Card.Body>
          <hr></hr>
          </Col>
          <Col md={6} xs={12}>
              <Card.Body>
        
        <Card.Text>
        <p> Total price</p>
         </Card.Text>
          </Card.Body>
          </Col>
          <Col md={6} xs={12}>
              <Card.Body>
        
        <Card.Text>
        <p> ₹ 3500</p>
         </Card.Text>
         <p>Including taxes & fees</p>
         
          </Card.Body>
          <Button variant="success" href='/hb/hbook'>Continue To Booking <NavigateNextIcon></NavigateNextIcon></Button>{' '}
          <p style={{marginTop:50,color:"#FB0F0B"}}>Cancellation Policy</p>
          <p style={{color:"#FB0F0B"}}>Follow safety measures advised at the hotel</p>
          </Col>
          </Row>
          </Container>
          
          
          </Card.Body></Col>
      
        </Row>
        </Card>
      </Container>
    </div>
    </div>
    
  
    );
  }
  
  export default ContainerInsideExample;