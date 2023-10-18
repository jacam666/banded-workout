import './App.css';
import Arms from './pages/Arms';
import Chest from './pages/Chest';
import Legs from './pages/Legs';
import Back from './pages/Back';
import Shoulders from './pages/Shoulders';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
//import CustomNavbar from './Components/Navbar';
import Abs from './pages/Abs';
import ResponsiveNavbar from './Components/ResponsiveNavbar';
import ResistanceBandArms from './pages/ResistanceBandArms';

function App() {
  return (
    <div className="App">
      {/* <CustomNavbar /> */}
      <ResponsiveNavbar />
      <Routes>
        <Route path='/' element={<Home />}/>
            <Route path='/Arms' element={<Arms />}/>
            <Route path='/ResistanceBandArms' element={<ResistanceBandArms />}/>
            <Route path='/Abs' element={<Abs />}/>
            <Route path='/Chest' element={<Chest />}/>
            <Route path='/Legs' element={<Legs />}/>
            <Route path='/Back' element={<Back />}/>
            <Route path='/Shoulders' element={<Shoulders />}/>
        </Routes>
    </div>
  );
}

export default App;