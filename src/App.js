import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Link} from 'react-router-dom';
import projectData from './raycsv.csv';


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
    
  }
  render() {
    var request = new XMLHttpRequest();  
    request.open("GET", projectData, false);   
    request.send(null);  

    var csvData = new Array();
    var jsonObject = request.responseText.split(/\r?\n|\r/);
    for (var i = 0; i < jsonObject.length; i++) {
      csvData.push(jsonObject[i].split(','));
    }
    // Retrived data from csv file content
    let projArray = csvData.map(element => {
      return(
        <p>
          {element[0]}
        </p>
      );
    });
    
    return(
      <div>
        {projArray}
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

