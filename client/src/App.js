import React, {useEffect, lazy, Suspense} from "react";
import "./App.css";
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/header/header.component.jsx'
import Spinner from './components/spinner/spinner.component'
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selector'
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/user.actions'
import ErrorBoundary from './components/error-boundary/error-boundary.component';

const HomePage = lazy(() => import('./page/homepage/homepage.component'))
const ShopPage = lazy(() => import('./page/shop/shop.component'))
const CheckoutPage = lazy(() => import('./page/checkout/checkout.component.jsx'))
const SignInAndSignUp = lazy(() => import('./page/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'))

const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])


  return (
      <div>
        <Header />
        <Switch>
            <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route
                        exact
                        path='/signin'
                        render={() =>
                        currentUser ? (
                        <Redirect to='/' />
                            ) : (
                                <SignInAndSignUp />
                            )
                        }
                    />
                </Suspense>
            </ErrorBoundary>
        </Switch>
      </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: ()  => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
