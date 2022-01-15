import "./App.css";
import Home from "./PortfolioContainer/Home/Home/Home";
import Skills from "./PortfolioContainer/Skills/Skills";
import Projects from "./PortfolioContainer/Projects/Porject";
import Projects2 from "./PortfolioContainer/Project2/Project2";

import Contact from "./PortfolioContainer/ContactMe/contactme";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
         <Home />

      <Skills />
      <Projects />
         <Projects2/>
    <Contact/> 
      </Router>
    </div>
  );
}

export default App;
