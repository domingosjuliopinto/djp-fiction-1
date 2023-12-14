import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import './Characters.css';

// Sunday Prian
import SundayPrianBoroventiaGym from './Sunday Prian/Sunday Prian - Boroventia Gym (landing).png'

// Ryush Shin
import RyushShinBoroventiaGym from './Ryush Shin/Ryush Shin - Boroventia Gym (landing).png'

// Vait Shin
import VaitShinBoroventiaGym from './Vait Shin/Vait Shin - Boroventia Gym (landing).png'

// Gaayi Barbooza (NLhack)
import GaayiBarboozaNLhack from './Gaayi Barbooza (NLhack)/Gaayi Barbooza - NLhack (landing).png'

function Characters() {
  return (
    <div>
    <h1>Characters</h1>
    <Container>
    <Row>
      <Col>
        <Link to="/characters/Sunday-Prian">
          <img src={SundayPrianBoroventiaGym} alt='Sunday Prian - Boroventia Gym'/>
        </Link>
      </Col>
      <Col>
        <Link to="/characters/Ryush-Shin">
          <img src={RyushShinBoroventiaGym} alt='Ryush Shin - Boroventia Gym'/>
        </Link>
      </Col>
      <Col>
        <Link to="/characters/Vait-Shin">
          <img src={VaitShinBoroventiaGym} alt='Vait Shin - Boroventia Gym'/>
        </Link>
      </Col>
      {/*<Col>
        <Link to="/characters/Gaayi-Barbooza-(NLhack)">
          <img src={GaayiBarboozaNLhack} alt='Gaayi Barbooza - NLhack'/>
        </Link>
      </Col>*/}
    </Row>
    </Container>
    </div>
  );
}

export default Characters;