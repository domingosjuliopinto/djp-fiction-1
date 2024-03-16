import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import LeftArrow from '../../utilities/arrows/left-arrow.png'
import RightArrow from '../../utilities/arrows/right-arrow.png'
import BackArrow from '../../utilities/arrows/back-arrow.png'

import './Readstory.css';

import Title from '../readstory/chapters/Title.txt';
import Chapter1 from '../readstory/chapters/Chapter1.txt';
import Chapter2 from '../readstory/chapters/Chapter2.txt';
import Chapter3 from '../readstory/chapters/Chapter3.txt';

function Readstory() {
  const pageArray = [Title,Chapter1,Chapter2,Chapter3];

  const [ba_isVisible, ba_setIsVisible] = useState(false);
  const [fa_isVisible, fa_setIsVisible] = useState(true);
  const [pageNumber, setpageNumber] = useState(0);

  const back_land = {
    display: ba_isVisible ? 'initial' : 'none',
  };

  const front_land = {
    display: fa_isVisible ? 'initial' : 'none',
  };

  function Readtext(Data){
    fetch(Data)
    .then(r => r.text())
    .then(text => {
      if(pageNumber>0){
        var firstLine = text.split('\n')[0];
        // break the textblock into an array of lines
        var lines = text.split('\n');
        // remove one line, starting at the first position
        lines.splice(0,1);
        // join the array back into a single string
        text = lines.join('\n');

        document.getElementById("chapters").innerText = text;
        document.getElementById("title").innerText = firstLine;
      }else{
        document.getElementById("title").innerText = text;
        document.getElementById("chapters").innerText = " ";
      }
  });
  }

  const pageBackward = ()=>{
    setpageNumber(pageNumber-1);
    Readtext(pageArray[pageNumber]);
    if(pageNumber-1<=pageArray.length-2){
      fa_setIsVisible(true);
    }
    if(pageNumber-1===0){
      ba_setIsVisible(false);
    }
  }
  
  const pageForward = ()=>{
    setpageNumber(pageNumber+1);
    Readtext(pageArray[pageNumber]);
    if(pageNumber+1>pageArray.length-2){
      fa_setIsVisible(false);
    }
    if(pageNumber+1>0){
      ba_setIsVisible(true);
    }
  }
  
  Readtext(pageArray[pageNumber]);

  return (
    <div>
      <Container>
      <Row>
        <Col>
        <Link to="/">
          <img width={50} src={BackArrow} alt='back-arrow'/>
        </Link>
        </Col>
        <Col><h1>Read Story</h1></Col>
        <Col></Col>
      </Row>
      <div className='content'>
      <Row>
        <Col><h1 id='title'> </h1></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col><p id='chapters'> </p></Col>
        <Col></Col>
      </Row>
      </div>
      <Row>
        <Col>
          <img style={back_land} onClick={pageBackward} width={100} src={LeftArrow} alt='left-arrow'/>
        </Col>
        <Col></Col>
        <Col>
          <img style={front_land} onClick={pageForward} width={100} src={RightArrow} alt='right-arrow'/>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default Readstory;