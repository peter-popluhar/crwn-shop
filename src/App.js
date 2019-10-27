import React from "react";
import "./App.css";
import HomePage from "./page/homepage/homepage.component";
import ShopPage from './page/shop/shop.component';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component.jsx'
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      this.setState({
        currentUser: userAuth
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
        <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
        </>
    );
  }
}

export default App;
