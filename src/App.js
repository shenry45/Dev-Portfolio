import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.scss';

// import Home from './pages/Home.js';
// import Contact from './pages/Contact.js';
// import Projects from './pages/Projects.js';
// import About from './pages/About.js';
import HomeV2 from './pages/Home2.js';
import Projects2 from './pages/Projects2.js'
import Contact2 from './pages/Contact2.js';
import About2 from './pages/About2.js';


import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomeV2} />
        <Route path="/projects" component={Projects2}/>
        <Route path="/about" component={About2} />
        <Route path="/contact" component={Contact2}/>
      </Switch>
    </div>
  );
}

export default App;
