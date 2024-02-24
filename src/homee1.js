import Card from 'react-bootstrap/Card';
import Ap from "./home2.jpg"
function ImgOverlayExample() {
  return (<div style={{marginTop:30}}>
    <Card className="bg-dark text-white">
      <Card.Img src={Ap} alt="Card image" style={{height:'47vh'}} />
      <Card.ImgOverlay>
        <Card.Title><h2 style={{marginTop:40}}>Ready To Embark On Your</h2></Card.Title>
        <Card.Title><h2>Next Adventure</h2></Card.Title>
        <Card.Text>
          <h4 style={{marginTop:30}}>Discover the fastestand most enjoyable way to plan your dream </h4>
        </Card.Text>
        <Card.Text><h4>trip! with practical and intuitive solutions</h4></Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>
  );
}

export default ImgOverlayExample;