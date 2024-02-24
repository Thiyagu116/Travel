import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Rt1 from "./rest1.jpg"
import Rt7 from "./rest7.jpg"
import Rt4 from "./rest4.jpg"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import CardTitle from 'react-bootstrap/esm/CardTitle';
import CardText from 'react-bootstrap/esm/CardText';
import WifiIcon from '@mui/icons-material/Wifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TvIcon from '@mui/icons-material/Tv';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import KebabDiningIcon from '@mui/icons-material/KebabDining';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};
const today = dayjs();
const todayStartOfTheDay = today.startOf('day');


function ContainerInsideExample() {
  const value = 3.5;

  return (
    <div style={{backgroundColor:"#EBFDE4"}}>
      <Container>
        <Row>
          <Col md={6} xs={12}>
      <div style={{width:'100%',marginTop:50}}>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Rt4}style={{height:450}}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Rt1}style={{height:450}}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Rt7}style={{height:450}}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </Col>
    <Col md={6} xs={12}>
    <div style={{width:'100%',marginTop:50}}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62202.96503861778!2d80.217097!3d12.991968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267623833c671%3A0x7aef2cb8413dcb23!2sBOULEVARD%20by%20Design%20Hotel%20Chennai!5e0!3m2!1sen!2sin!4v1708585284497!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      </div>

    </Col>
    
    </Row>
    </Container>
    <div>
      <Container style={{marginTop:50}}>
        <Row>
        <Col md={6} xs={12} >
        <Card>
        <Card.Body>
            <CardTitle>
                <h3>Drizzle</h3>
            </CardTitle>
            <CardText style={{color:"#26D1C4"}}>
            Velachery, Chennai
            </CardText>
            <p>₹ 1000 for two approx | Beverages Chinese Desserts  </p>
           <p>Open from 11:30 AM - 03:00 PM 07:00 PM - 10:00 PM</p>
           <h3 style={{marginTop:50}}>About</h3>
           <p>If you like to experiment with superb and flavorsome non vegetarian and vegetarian food having best taste and aromas then Rose water is your perfect dining venue in Chennai.</p>
           <h3>Restaurant Features</h3>
           <Container  className='shadow-lg'style={{marginTop:20}} >
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
          <p><KebabDiningIcon></KebabDiningIcon> KebabDining</p>
         </Card.Text>
          </Card.Body>
          
              </Col>
              <Col md={4} xs={12}>
              <Card.Body>
        
        <Card.Text>
          <p><LocalParkingIcon></LocalParkingIcon> Valet Parking</p>
         </Card.Text>
          </Card.Body>
          
              </Col>
              <Col md={4} xs={12}>
              <Card.Body>
        
        <Card.Text>
          <p><TvIcon></TvIcon> TV</p>
         </Card.Text>
          </Card.Body>
          
              </Col>
              <Col md={4} xs={12}>
              <Card.Body>
        
        <Card.Text>
          <p><RamenDiningIcon></RamenDiningIcon> RamenDining</p>
         </Card.Text>
          </Card.Body>
          
              </Col>
            </Row>
          </Container>
          <h3 style={{marginTop:20}} >Insider Tips</h3>
          <p style={{marginTop:20}}>‘Chicken Hyderabadi Biriyani’, ‘Mutton Lucknowi Biriyani’ and ‘Aatish-E-Prawn Biriyani’ are lip-smacking</p>
          <p>‘Rosewater Mutton Handi’ – Tender lamb preparation tossed with coarsely ground spices prepared on dum is worth-a-try</p>
          <p>Their desserts are delectable. Do try ‘Gulab Jamun’, ‘Kulfi Falooda’ or ‘Saffron Rasmalai’</p>
        
           </Card.Body>
        </Card>
        </Col>

        <Col md={6} xs={12}>
        <Card>
        <Card.Body>
          <h5 >Rating</h5>
          <Box style={{marginTop:20}}
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>

        <h5 style={{marginTop:30}}>Table reservation deals for</h5>
       
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Date</Form.Label>
        <Form.Control type="Date" />
      </Form.Group>
      </Form>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem label="TimePicker">
          <TimePicker defaultValue={todayStartOfTheDay}  />
        </DemoItem>
        </LocalizationProvider>
    <h5 style={{marginTop:20}}>4deals at 8:00 PM</h5>
    <p style={{marginTop:20}}>25% off on food & soft bev. + Pay on the app to save EXTRA guaranteed 25% upto ₹1000 off instantly with select cards</p>
    <p>20% off on food & soft bev. + Pay on the app to save EXTRA guaranteed 25% upto ₹1000 off instantly with select cards</p>
    <p>20% off on buffet + Pay on the app to save EXTRA guaranteed 25% upto ₹1000 off instantly with select cards</p>
    <p>25% off on buffet + Pay on the app to save EXTRA guaranteed 25% upto ₹1000 off instantly with select cards</p>
    <Button variant="info" href='/rb/rbook'>Continue Booking <NavigateNextIcon></NavigateNextIcon></Button>{' '}

        </Card.Body>
        </Card>
        </Col>
        </Row>
      </Container>
    </div>
    </div>
    
  
    );
  }
  
  export default ContainerInsideExample;
  