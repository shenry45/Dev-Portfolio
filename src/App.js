import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './scss/combined.scss';

import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

import Footer from './components/Footer.js';
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
      <Footer />
    </div>
  );
}

export default App;
