import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CharacterInfo from './CharacterInfo';
import CharacterImage from './CharacterImage';

function CharacterDetails() {
  return (
    <div>
        <Container>
            <Row>
                <Col>
                    <CharacterImage/>
                </Col>
                <Col>
                    <CharacterInfo/>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default CharacterDetails;