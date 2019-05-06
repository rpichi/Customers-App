import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component {
  renderHome = () => <h1>Home</h1>;

  renderCustomerContainer = () => <h1>Container</h1>;
  renderCustomerListContainer = () => <h1>List Container</h1>;
  // renderCustomerNewContainer = () => <h1>New</h1>;

  render () {
    return (
    <Router>
      <div>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/customers' component={this.renderCustomerContainer} />
        <Switch>
          <Route path='/customers/new' component={this.renderCustomerNewContainer} />
          <Route path='/customers/:dni' 
          render={ props => <CustomerContainer {...props} dni={props.match.params.dni}/>} />
        </Switch>
      </div>
    </Router>);
  };
}

export default App;
