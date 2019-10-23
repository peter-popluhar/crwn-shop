import React from "react";
import "./App.css";
import HomePage from "./page/homepage.component";
import {Switch, Route} from 'react-router-dom';

const HatsPage = () => (
  <div>tst</div>
)

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/hats' component={HatsPage} />
    </Switch>
  </>
  );
}

export default App;
