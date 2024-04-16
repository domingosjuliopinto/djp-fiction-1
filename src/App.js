import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main Pages
import Home from "./components/home/Home";
import Readstory from "./components/read_story/Readstory";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />}/>  
            <Route path="/djp-fiction-1" element={<Home />} />
            <Route path="/readstory" element={<Readstory />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
