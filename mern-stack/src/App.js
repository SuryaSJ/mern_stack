import React from 'react';
import './App.css';
import { Route, Redirect, Switch,BrowserRouter } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact><Users/></Route>
            <Route path="/:userId/places" ><UserPlaces/></Route>
            <Route path="/places/new" exact><NewPlace/></Route>
            <Redirect to="/"/>
          </Switch>
        </main>
       </BrowserRouter>
          
    </div>
  );
}

export default App;
