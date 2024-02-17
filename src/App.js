import './App.css';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'

// Main Pages
import Home from './components/home/Home';
import Storymode from './components/storymode/Storymode';
import Custombouts from './components/custombouts/Custombouts';
import Readstory from './components/readstory/Readstory';
import Characters from './components/characters/Characters';
import About from './components/about/About';
import Extras from './components/extras/Extras';

import CharacterDetails from './components/characters/CharacterDetails';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/djp-fiction-1' element={<Home />} />
        <Route path='/storymode' element={<Storymode />} />
        <Route path='/custombouts' element={<Custombouts />} />
        <Route path='/djp-fiction-1/fullstory' element={<Readstory />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/about' element={<About />} />
        <Route path='/extras' element={<Extras />} />
        
        <Route path='/characters/Sunday-Prian' element={<CharacterDetails />} />
        <Route path='/characters/Ryush-Shin' element={<CharacterDetails />} />
        <Route path='/characters/Vait-Shin' element={<CharacterDetails />} />
        <Route path='/characters/Aayi-Barbooza-(NLhack)' element={<CharacterDetails />} />
      </Route>

    )
  );
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
