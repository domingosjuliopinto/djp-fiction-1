import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import logo from '../../logo.svg';
import './Home.css';

function Home() {
  return (
    <Container className='home App-center'>
      <img src={logo} className="App-logo" alt="logo" />
      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
        <div className='App-header App-center'>
          <div className="d-grid gap-2">
            <Link to="/storymode"><Button variant="outline-success" size="lg" className='my-button'>Story Mode</Button></Link>
            <Link to="/custombouts"><Button variant="outline-success" size="lg" className='my-button'>Custom Bouts</Button></Link>
          </div>
        </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
        <div className='App-header App-center'>
          <div className="d-grid gap-2">
            <Link to="/characters"><Button variant="outline-success" size="lg" className='my-button'>Characters</Button></Link>
            <Link to="/about"><Button variant="outline-success" size="lg" className='my-button'>About</Button></Link>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
