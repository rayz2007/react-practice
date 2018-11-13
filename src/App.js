import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Link} from 'react-router-dom';
import projectData from './raycsv.csv';
import * as d3 from 'd3';

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
  constructor(props) {
    super(props);
    this.state = {
      dat:[]
    }
  }
  componentDidMount() {
    d3.csv(projectData, (err, data) => {
      this.setState({
          dat: data
      })
    })
    /*d3.csv(projectData).then(function(element) {
        
    }).catch(function(err) {
        throw err;
    }) */
  }
  render() {
    return ( 
      <div className = "App" >
        {this.state.dat.map((d, i) => {
          return <p>{d.Projects}</p>
        })}
      </div>
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

