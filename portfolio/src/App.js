import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './style.css';

import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import About from './pages/About.js';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <p className="title"><a href="/">Shawn Henry</a></p>
          <p className="title-sub">Full Stack Web Developer</p>
        </div>
        <nav>
          <Link to="/projects">
            <button>PROJECTS</button>
          </Link>
          <Link to="/about">
            <button>ABOUT</button>
          </Link>
          <Link to="/contact">
            <button>CONTACT</button>
          </Link>
        </nav>
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects}/>
        <Route path="/about" component={About} />
        <Route path="/contact" />
      </Switch>
      <footer>
        <p>Footer belongs here</p>
      </footer>
    </div>
  );
}

export default App;
