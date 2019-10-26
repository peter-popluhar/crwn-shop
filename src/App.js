import React from "react";
import "./App.css";
import HomePage from "./page/homepage/homepage.component";
import ShopPage from './page/shop/shop.component';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component.jsx'
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/sign' component={SignInAndSignUp} />
    </Switch>
  </>
  );
}

export default App;
