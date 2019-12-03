import React from "react";
import "./App.css";
import HomePage from "./page/homepage/homepage.component";
import ShopPage from './page/shop/shop.component';
import CheckoutPage from './page/checkout/checkout.component.jsx';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/header/header.component.jsx'
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selector'
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/user.actions'


class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession()
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route
                exact
                path='/signin'
                render={() =>
                    this.props.currentUser ? (
                        <Redirect to='/' />
                        ) : (
                            <SignInAndSignUp />
                        )
                }
            />
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: ()  => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
