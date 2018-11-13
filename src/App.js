import React, { Component } from 'react';

import './App.css';
import { HashRouter, Route, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="container">
          <Link to="/">Home</Link>
          { ' ' }
          <Link to="/projects">Projects</Link>
          { ' ' }
          <Link to="/about">About</Link>
          <Route exact path="/" component={ Home } />
          <Route path="/projects" component={ Projects } />
          <Route path="/about" component={ About } />
        </div>
      </HashRouter>
    );
  }
}

class Home extends Component {
  render() {
    return(
      <h1>
        Hello, my name is Ray Zhang
      </h1>
    );
  }
}

class Projects extends Component {
  render() {
    return(
      <h1>hello</h1>
    );
  }
}

class About extends Component {
  render() {
    return(
      <h1>
        This is my React Practice site.
      </h1>
    );
  }
}
 
export default App;

