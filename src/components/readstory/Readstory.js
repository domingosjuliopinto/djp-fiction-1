import './Readstory.css';

import Title from '../readstory/chapters/Title.txt';

function Readstory() {
  fetch(Title)
 .then(r => r.text())
 .then(text => {
  document.getElementById("title").innerText = text;
  console.log(text);
  });
  
  return (
    <div>
    <h1>Read Story</h1>
    <h1 id='title'> </h1>
    </div>
  );
}

export default Readstory;