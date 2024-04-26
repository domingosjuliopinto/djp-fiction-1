import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main Pages
import Home from "./components/home/Home";
import Readstory from "./components/read_story/Readstory";

import Test from "./components/Test";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />}/>  
            <Route path="/djp-fiction-1" element={<Home />} />
            <Route path="/readstory" element={<Readstory />}/>

            <Route path="/test" element={<Test />}/>
            <Route path="/test1" element={<Test />}/>
            <Route path="/test2" element={<Test />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
