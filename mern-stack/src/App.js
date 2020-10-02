import React, { useState,useCallback } from 'react';
import { Route, Redirect, Switch,BrowserRouter } from 'react-router-dom';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './users/pages/Auth';
import { AuthContext } from './shared/context/AuthContext';
import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] =useState(false);

  const loginHandler=useCallback(
    () => {
      setIsLoggedIn(true);
    },
    [],
  );

  const logoutHandler=useCallback(
    () => {
      setIsLoggedIn(false);
    },
    [],
  );

  let routes;

  if(!isLoggedIn){

    routes=(
      <Switch>
        <Route path="/" exact><Users/></Route>
        <Route path="/auth" exact><Auth/></Route>
        <Route path="/:userId/places" ><UserPlaces/></Route>
        <Redirect to="/auth"/>
     </Switch>
    );

  }else{
    routes=(
      <Switch>
      <Route path="/" exact><Users/></Route>
      <Route path="/:userId/places" ><UserPlaces/></Route>
      <Route path="/places/new" exact><NewPlace/></Route>
      <Route path="/places/:placeId"><UpdatePlace/></Route>
      <Redirect to="/"/>
    </Switch>
    );
  }
  return (
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn, login:loginHandler, logout:logoutHandler}}>
    <div className="App">
       <BrowserRouter>
        <MainNavigation />
        <main>
         {routes}
        </main>
       </BrowserRouter>         
    </div>
    </AuthContext.Provider>
  );
}

export default App;
