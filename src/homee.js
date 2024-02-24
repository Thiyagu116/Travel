import Card from 'react-bootstrap/Card';

function WithHeaderExample() {
  return (
    <div>
    <Card style={{backgroundColor:"#d4f9fc"}}>
      <Card.Body >
        <h3 style={{width:"100%",justifyContent:"center",alignItems:"center",display:'flex'}}>Welcome to Tamil Nadu!</h3>
      <p  style={{width:"100%",justifyContent:"center",alignItems:"center",display:'flex'}}>A potpourri of vibrant cultures, exotic destinations and enduring memories; welcome to one of</p>
      <p  style={{width:"100%",justifyContent:"center",alignItems:"center",display:'flex'}}>the heartlands of human civilization.</p>
      <h6  style={{width:"100%",justifyContent:"center",alignItems:"center",display:'flex'}}>Tamil Nadu - where stories never end.</h6>
      </Card.Body>
    </Card>
    </div>
  );
}

export default WithHeaderExample;