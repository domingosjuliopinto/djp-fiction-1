import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import logo from '../../logo.svg';
import './Home.css';

function Home() {
  return (
    <Container className='home d-grid gap-2'>
      <Row className='App-center'>
        <img src={logo} className="App-logo" alt="logo" />
      </Row>
      <Row className="hide-row">
        <Col lg={6} md={6} sm={6}><Link to="/storymode"><Button variant="outline-primary" size="lg" className='my-button'>Play Story</Button></Link></Col>
        <Col lg={6} md={6} sm={6}><Link to="/custombouts"><Button variant="outline-primary" size="lg" className='my-button'>Custom Bouts</Button></Link></Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6} xs={12}><Link to="/djp-fiction-1/fullstory"><Button variant="outline-primary" size="lg" className='my-button'>Read Story</Button></Link></Col>
        <Col lg={6} md={6} sm={6} xs={12}><Link to="/characters"><Button variant="outline-primary" size="lg" className='my-button'>Characters</Button></Link></Col>
      </Row>
      <Row>
        <Col lg={6} md={6} sm={6}><Link to="/extras"><Button variant="outline-primary" size="lg" className='my-button'>Extras</Button></Link></Col>
        <Col lg={6} md={6} sm={6}><Link to="/about"><Button variant="outline-primary" size="lg" className='my-button'>About</Button></Link></Col>
      </Row>
    </Container>
  );
}

export default Home;
