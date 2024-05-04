import logo from '../../logo.svg';
import './Home.css';

import HomeButton from './HomeButton';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
              <HomeButton to="/playstory" text="Play Story"/>
            </Col>
            <Col>
              <HomeButton to="/custom-bout" text="Custom Bout"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <HomeButton to="/readstory" text="Read Story"/>
            </Col>
            <Col>
              <HomeButton to="/characters" text="Characters"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <HomeButton to="/extras" text="Extras"/>
            </Col>
            <Col>
              <HomeButton to="/about" text="About"/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;