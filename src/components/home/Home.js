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
              <HomeButton to="/readstory" text="Read Story"/>
            </Col>
            <Col>
              <HomeButton to="/test" text="Characters"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <HomeButton to="/test1" text="Extras"/>
            </Col>
            <Col>
              <HomeButton to="/test2" text="About"/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;