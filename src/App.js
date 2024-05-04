import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main Pages
import Home from "./components/home/Home";
import Body from "./components/body/Body";
import Playstory from "./components/play_story/Playstory";
import Custombout from "./components/custom_bout/Custombout";
import Readstory from "./components/read_story/Readstory";
import Characters from "./components/characters/Characters";
import Extras from "./components/extras/Extras";
import About from "./components/about/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />}/>  
            <Route path="/djp-fiction-1" element={<Home />} />
            {/* Play Story Page */}
            <Route path="/playstory" element={<Playstory />} />
            {/* Custom Bout Page */}
            <Route path="/custom-bout" element={<Custombout />} />
            {/* Read Story Page */}
            <Route path="/readstory" element={<Body skey='4' content={<Readstory/>}/>}/>
            {/* Characters Page */}
            <Route path="/characters" element={<Characters />} />
            {/* Extras Page */}
            <Route path="/extras" element={<Extras />} />
            {/* About Page */}
            <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
