import './App.css';
import Home from './PortfolioContainer/Home/Home/Home';
import Profile from './PortfolioContainer/Home/Profile';
import Footer from './PortfolioContainer/Home/Footer/Footer';
import Aboutme from './PortfolioContainer/AboutMe/Aboutme';
import Skills from './PortfolioContainer/Skills/Skills';
import Projects from './PortfolioContainer/Projects/Porject';
import Contact from './PortfolioContainer/ContactMe/contactme';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch

} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>

        <Home />
     
        <Aboutme />
    
        <Skills />
   
        <Projects />
       
        <Contact />
          
      </Router>
    </div>
  );
}

export default App;
