import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

import './Extras.css';

import characterArt from './character-art.jpg'

// Character Art
// Sunday Prian
import sundayPrianBGConcept from '../characters/Concept-Art/Sunday Prian/Sunday Prian - Boroventia Gym (Concept).jpg'

// Ryush Shin
import ryushShinBGConcept from '../characters/Concept-Art/Ryush Shin/Ryush Shin - Boroventia Gym (Concept).jpg'

// Vait Shin
import vaitShinBGConcept from '../characters/Concept-Art/Vait Shin/Vait Shin - Boroventia Gym (Concept).jpg'

// Aayi Barbooza
import aayiBarboozaNLhConcept from  '../characters/Concept-Art/Aayi Barbooza (NLhack)/Aayi Barbooza - NLhack (Concept).jpg'

// Game Location
import boroventiaGym from '../../utilities/game-locations/Boroventia Gym.jpg'
import boroventiaRoad from '../../utilities/game-locations/Boroventia Road.jpg'

function Extras() {
  const [el_isVisible, el_setIsVisible] = useState(true);
  const [ca_isVisible, ca_setIsVisible] = useState(false);
  const [la_isVisible, la_setIsVisible] = useState(false);

  const showCa = () => {
    el_setIsVisible(false);
    ca_setIsVisible(true);
    la_setIsVisible(false);
  };

  const showLa = () => {
    el_setIsVisible(false);
    ca_setIsVisible(false);
    la_setIsVisible(true);
  };

  const extra_landing = {
    display: el_isVisible ? 'initial' : 'none',
  };

  const character_art = {
    display: ca_isVisible ? 'initial' : 'none',
  };

  const location_art = {
    display: la_isVisible ? 'initial' : 'none',
  };

  return (
    <div>
      <div style={extra_landing}>
        <h1>Extras</h1>
        <Container>
          <Row>
            <Col className='vertical-center'>
              <Card className='card-width'>
              <Card.Img variant="top" src={characterArt} />
              <Card.Body>
                <Button onClick={showCa} variant="primary">Character Art</Button>
              </Card.Body>
              </Card>
            </Col>
            <Col className='vertical-center'>
              <Card className='card-width'>
              <Card.Img variant="top" src={boroventiaGym} />
              <Card.Body>
              <Button onClick={showLa} variant="primary">Location Art</Button>
              </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={character_art}>
        <Button onClick={showLa} variant="primary">Go to Location Art</Button>
        <h2>Character Art</h2>
        <Container>
        <Row>
          <Col>
            <h3>Sunday Prian</h3>
            <Carousel  interval={null}>
              <Carousel.Item>
                <img src={sundayPrianBGConcept} alt='Sunday Prian - Boroventia Gym (Concept)' />
                <Carousel.Caption className='caption-black'>
                  <h4>Boroventia Gym (Concept)</h4>
                  <h5>Sunday Prian</h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col>
          <h3>Ryush Shin</h3>
          <Carousel interval={null}>
            <Carousel.Item>
            <img src={ryushShinBGConcept} alt='Ryush Shin - Boroventia Gym (Concept)' />
              <Carousel.Caption className='caption-black'>
                  <h4>Boroventia Gym (Concept)</h4>
                  <h5>Ryush Shin</h5>
                </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Col>
          <Col>
          <h3>Vait Shin</h3>
          <Carousel interval={null}>
            <Carousel.Item>
              <img src={vaitShinBGConcept} alt='Vait Shin - Boroventia Gym (Concept)' />
                <Carousel.Caption className='caption-black'>
                  <h4>Boroventia Gym (Concept)</h4>
                  <h5>Vait Shin</h5>
                </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Col>
        </Row>{/*
        <br/>
        <Row>
          <Carousel interval={null}>
            <Carousel.Item>
              <img src={aayiBarboozaNLhConcept} alt='Aayi Barbooza - NLhack (Concept)' />
                <Carousel.Caption className='caption-black'>
                  <h4>NLhack (Concept)</h4>
                  <h5>Aayi Barbooza</h5>
                </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
  </Row>*/}
        </Container>
      </div>

      <div style={location_art}>
        <Button onClick={showCa} variant="primary">Go to Character Art</Button>
        <h2>Location Art</h2>
        <h3>Boroventia Gym</h3>
        <img className='width-adjust' src={boroventiaGym} alt='Boroventia Gym' />
        <h3>Boroventia Road</h3>
        <img className='width-adjust' src={boroventiaRoad} alt='Boroventia Road' />
      </div>
    </div>
  );
}

export default Extras;