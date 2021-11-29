import './App.css';
import Home from './PortfolioContainer/Home/Home/Home';
import Aboutme from './PortfolioContainer/AboutMe/Aboutme';
import Skills from './PortfolioContainer/Skills/Skills';
import Projects from './PortfolioContainer/Projects/Porject';
import Contact from './PortfolioContainer/Home/ContactMe/contactme';
function App() {
  return (
    <div className="App">
     <Home/>
     <Aboutme/>
     <Skills/>
     <Projects/>
     <Contact/>
    </div>
  );
}

export default App;
