import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './scss/combined.scss';

import Home from './pages/Home.js';
import Portfolio from './pages/Portfolio.js';
import About from './pages/About.js';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <p className="title"><Link to="/">Shawn Henry</Link></p>
          {/* <p className="title-sub">Full Stack Web Developer</p> */}
        </div>
        <nav>
          <Link to="/portfolio">
            <button>PORTFOLIO</button>
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
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/about" component={About} />
        <Route path="/contact" />
      </Switch>
      <footer>
        <h4>Shawn Henry</h4>
        <nav>
          <a href="https://github.com/shenry45" rel="noopener noreferrer" target="_blank">
            <i class="fab fa-github-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/shawn-p-henry/" rel="noopener noreferrer" target="_blank">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto:shawn45henry@gmail.com" rel="noopener noreferrer" target="_blank">
            <i class="fas fa-envelope-square"></i>
          </a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
