import React from 'react';
import { Provider } from 'react-redux';
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import NavBarContainer from './navbar/navbar_container';
import Splash from './splash_page/splash';
import Upload from './upload/upload';
import FeedContainer from './feed/feed_container';
import ProfileContainer from './profile/profile_container';
import NotFound from './not_found';
import PhotoContainer from './photo/photo_container';
import EditPhotoContainer from './photo/edit_photo_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/profile/:id/photos/:photoId/edit" component={EditPhotoContainer} />
      <ProtectedRoute exact path="/profile/:id/photos/:photoId" component={PhotoContainer} />
      <ProtectedRoute exact path="/profile/:id" component={ProfileContainer}/>
      <ProtectedRoute exact path="/feed" component={FeedContainer}/>
      <AuthRoute exact path="/" component={Splash} />
      <ProtectedRoute exact path="/upload" component={Upload}/>
    </Switch>

  </div>
);

export default App;
