import React from 'react';
import './App.css';
import { Route, Redirect, Switch,BrowserRouter } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          <Route path="/" exact><Users/></Route>
          <Route path="/places/new" exact><NewPlace/></Route>
          <Redirect to="/"/>
        </Switch>
       </BrowserRouter>
          
    </div>
  );
}

export default App;
