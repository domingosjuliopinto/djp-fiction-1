import { BrowserRouter, Routes, Route } from "react-router-dom";

// Home Page
import Home from "./components/home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            {/* Home Page */}
            <Route path="/" element={<Home />}/>  
            <Route path="/djp-fiction-1" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
