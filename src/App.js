import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/navBar'
import Home from './home/home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './about/about';
import Projects from './projects/projects';
import {Helmet} from 'react-helmet';
import Bachelor from './bachelor/bachelor.js'
import Lier from './lier/lier.js';
import EazyInk from './eazyInk/eazyInk';

function App() {
  return (
    <Router>
    <div className="App">
      <Helmet>
        <style>{`body { background-color: #292a2d; } h1,h2,h3,h4,h5,p, li{ color: #a9a9b3; font-family:'Inter UI', -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif;}`}</style>
      </Helmet>
      <NavBar></NavBar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/projects/bachelor" exact component={Bachelor} />
          <Route path="/projects/lier" exact component={Lier} />
          <Route path="/projects/EazyInk" exact component={EazyInk} />


        </Switch>
    </div>
    </Router>
  );
}

export default App;
