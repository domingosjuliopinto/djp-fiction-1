import logo from '../../logo.svg';
import './Home.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <div className='App-header Vertical-align'>
        <Container>
          <Row>
            <Col><div className='bg'><img src={logo} className="App-logo" alt="logo" /></div></Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Link to="/readstory">
                <div className="mb-2 d-grid gap-2">
                  <Button variant="outline-primary" size="lg">
                    Read Story
                  </Button>
                </div>
              </Link>
            </Col>
            <Col>
              <div className="mb-2 d-grid gap-2">
                <Button variant="outline-primary" size="lg">
                  Characters
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
          <Col>
              <div className="mb-2 d-grid gap-2">
                <Button variant="outline-primary" size="lg">
                  Extras
                </Button>
              </div>
            </Col>
            <Col>
              <div className="mb-2 d-grid gap-2">
                <Button variant="outline-primary" size="lg">
                  About
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;