import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import NavBarContainer from './navbar/navbar_container';
import Splash from './splash_page/splash';


const App = () => (
  <div>
    <NavBarContainer />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={Splash} />
  </div>
);

export default App;
