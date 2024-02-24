import Table from 'react-bootstrap/Table';

function BasicExample() {
  return (
    <Table striped bordered hover style={{width:800}}>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Mail</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Thiyagu</td>
          <td>thiyagu@gmail.com</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Gowtham</td>
          <td>gowtham@gmail.com</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Santhosh</td>
          <td>santhosh@gmail.com</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Deva</td>
          <td>deva@gmail.com</td>
        </tr>
        <tr>
          <td>5</td>
          <td>venky</td>
          <td>venky@gmail.com</td>
        </tr>
        <tr>
          <td>6</td>
          <td>vijay</td>
          <td>vijay@gmail.com</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default BasicExample;