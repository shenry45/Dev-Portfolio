import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.scss';

// import Home from './pages/Home.js';
import HomeV2 from './pages/Home2.js';
import Projects from './pages/Projects.js';
import Projects2 from './pages/Projects2';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

// import Footer from './components/Footer.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomeV2} />
        <Route path="/projects" component={Projects}/>
        <Route path="/projects2" component={Projects2}/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact}/>
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
