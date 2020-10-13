import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.scss';

import Home from './pages/Home.js';
import Projects from './pages/Projects.js'
import Contact from './pages/Contact.js';
import About from './pages/About.js';

import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects}/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;
