import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Ab from './ab.jpg'
import Cb from './cb.jpeg'
import Form from 'react-bootstrap/Form';
import CircularProgress from '@mui/material/CircularProgress';
import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CardBody from 'react-bootstrap/esm/CardBody';


function BasicExample() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div style={{backgroundColor:"#FEEFEF",height:740, }}>
    <Container id="about">
      <Row>
        <Card style={{ width: 'auto',margin:'auto', marginTop:90}}>
      <Row>
       <Col md={6} xs={12}>
       <Card.Body>

       <Card.Body style={{backgroundColor:"#DAF5F8"}}>
       <p style={{marginLeft:180}}>🎉 Yay! Enjoy 20% Offer</p>
       </Card.Body>
    <h5 style={{marginTop:20}}>Hey! what’s your number?</h5>
    <p>Please login with this number.</p>
    <h4 style={{marginTop:30}}>Enter your details</h4>
    <p style={{marginTop:20}}>We will use these details to share your booking information</p>
    <Form>
       <Form.Label style={{marginTop:20}}> Full Name</Form.Label>
        <Form.Control type="text" placeholder="Thiyagu R" />
      
        <Form.Label style={{marginTop:20}}>Mobile Number</Form.Label>
        <Form.Control type="phone" placeholder="Mobile"/>

    </Form>

    <p style={{marginTop:10}}>We’ll text you to confirm your number.</p>
    <Button onClick={handleOpen} style={{backgroundColor: '#478FFE',color:'#f7faf8'}}>  GET OTP  <SendIcon></SendIcon></Button>
<Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
  onClick={handleClose}
>
  <CircularProgress color="inherit" />
</Backdrop>

      </Card.Body></Col>
       <Col md={6} xs={12}><Card.Body>
       <h5 style={{marginTop:30}}> Pay Eazy</h5>
      <p style={{marginTop:30}}>Go Cashless + Earn EazyPoints + Avail Payment Discounts everytime you pay your dining bill with PayEazy! It's convenient, hassle free & guarantees secured payments.Payment Discounts everytime you pay your dining bill with PayEazy! It's convenient, hassle free & guarantees secured payments.</p>
      
       <h5> 2 Offers available</h5>
       <Container>
      <Row>
        <Col xs={12} md={6}>  
          <Image src={Ab}  rounded  style={{width:70,height:70,marginLeft:50,marginTop:30}}/>
          <p style={{marginLeft:50}}>AXIS Bank</p>
          <p style={{marginTop:20}}>40% Off Upto ₹1000 on Magnus, Vistara Infinite, Burgundy Private and Reserve Credit Cards on min. bill of ₹2500. Valid once per month.</p>
        </Col>
        
        <Col xs={12} md={6}>
          <Image src={Cb} thumbnail style={{width:70,height:70,marginLeft:70,marginTop:30}} />
          <p style={{marginLeft:20}}>Citi Credit & Debit Cards</p>
          <p style={{marginTop:20}}>20% Off Upto ₹1000 on Citi Credit & Debit Cards on min. bill of ₹4000. Valid twice per month.</p>
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

      