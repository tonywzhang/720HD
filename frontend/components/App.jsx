import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import NavBarContainer from './navbar/navbar_container';
import Splash from './splash_page/splash';
import Upload from './upload/upload';
import Feed from './feed/feed';
import ProfileContainer from './profile/profile_container';
import NotFound from './not_found';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={Splash} />
      <ProtectedRoute exact path="/feed" component={Feed}/>
      <ProtectedRoute exact path="/upload" component={Upload}/>
      <ProtectedRoute exact path="/profile/:id" component={ProfileContainer}/>
      <Route path="/" component={NotFound}/>
    </Switch>

  </div>
);

export default App;
