import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/index';
import {BrowserRouter as Router} from "react-router-dom";
import { NavbarLogo } from './Components/Navbar/NavbarElements';
import Sidebar from './Components/Sidebar/index';

function App() {
  return (
    <Router>
    <Sidebar/>
    <Navbar />
    
    {/* <NavbarLogo/> */}
      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
    </Router>
  );
}

export default App;
