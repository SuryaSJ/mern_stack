import React from 'react';
import './App.css';
import { Route, Redirect, Switch,BrowserRouter } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact><Users/></Route>
            <Route path="/places/new" exact><NewPlace/></Route>
            <Redirect to="/"/>
          </Switch>
        </main>
       </BrowserRouter>
          
    </div>
  );
}

export default App;
