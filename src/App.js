import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employees from './Employees'
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple React App</h1>
        </header>
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/employeelist"/>
                )}/>
                 <Route exact path='/employeelist' component={Employees} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
