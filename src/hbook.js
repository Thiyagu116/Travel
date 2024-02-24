import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import CircularProgress from '@mui/material/CircularProgress';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SendIcon from '@mui/icons-material/Send';


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


function BasicExample() {
  
  const [open, setOpen] = React.useState(false);
const handleClose = () => {
  setOpen(false);
};
const handleOpen = () => {
  setOpen(true);
};
  const value = 3.5;
  return (
    <div style={{backgroundColor:"#FEEFEF",height:740, }}>
    <Container id="about">
      <Row>
        <Card style={{ width: 'auto',margin:'auto', marginTop:90}}>
      <Row>
       <Col md={6} xs={12}>
       <Card.Body>

       <Card.Body style={{backgroundColor:"#DAF5F8"}}>
       <p style={{marginLeft:40}}>🎉 Yay! you just saved ₹1207 on this booking!</p>
      </Card.Body>
    
       <h4 style={{marginTop:30}}>Enter your details</h4>
       <p style={{marginTop:30}}>We will use these details to share your booking information</p>

       <Form>
       <Form.Label style={{marginTop:20}}> Full Name</Form.Label>
        <Form.Control type="text" placeholder="Thiyagu R" />
      
        <Form.Label style={{marginTop:20}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      
        <Form.Label style={{marginTop:20}}>Mobile Number</Form.Label>
        <Form.Control type="phone" placeholder="Mobile"/>

    </Form>
  
    <div style={{marginTop:30}}>
    <p>We’ll text you to confirm your number.</p>
      <Button onClick={handleOpen} style={{backgroundColor: '#478FFE'}}>  GET OTP  <SendIcon></SendIcon></Button>
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
      </Card.Body></Col>
       <Col md={6} xs={12}><Card.Body>
        <h6>Hotel TamilNadu</h6>
        <h6>1279 A, Mettupalayam Rd, Coimbatore</h6>
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


        <p>1 Night</p>
        <Container className='shadow-lg'>
           <Row>
              <Col md={6} xs={12}>
              <Card.Body>
        
        <Card.Text>
          <h6>Tue,26 Dec - Wed,27 Dec</h6>
         </Card.Text>
          <p style={{marginTop:70}}>Room price for 1 Night X 1 Guest</p>
          <p>Instant discount</p>
          <p>59% Coupon Discount</p>
          <p>Price surge</p>
          <h5 style={{marginTop:50}}>Payable Amount</h5>
          </Card.Body>
          </Col>
          <Col md={6} xs={12}>
          
              <Card.Body>
        
        <Card.Text>
          <h6>1 Room, 1 Guest</h6>
         </Card.Text>
         <p style={{marginTop:70}}>₹ 3500</p>
         <p>-₹ 999</p>
         <p>-₹ 207</p>
         <p>₹ 72</p>
         <hr></hr>
         <h5 style={{marginTop:30}}>₹2277</h5>
          </Card.Body>
          </Col>
          </Row>
          </Container>
        
        
        
      </Card.Body></Col>
      </Row>
      </Card>
</Row>
    </Container>
    </div>
    
  );
}

export default BasicExample; 

      