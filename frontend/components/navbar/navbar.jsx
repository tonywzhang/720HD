import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchContainer from '../search/search_container';

const NavBar = ({ currentUser, logout }) => {

  const loggedOut = () => (
    <div className="splash-navbar">
      <div className="navbar-1">
        <div className = "nav_float_left">
          <a href="/"><img src={window.images.logo}></img></a>
          <div className = "left_links">
            <ul>
              <a href="#">Discover</a>
              <a href="#">About</a>
              <a href="#">Licensing</a>
            </ul>
          </div>
        </div>
      </div>

      <div className = "nav_float_right">
        <Link to="/login" id="login_link">Log in</Link>
        <Link to="/signup" id="first_sign_up">Sign up</Link>
      </div>

    </div>
  );


  const loggedIn = () => (
    <div className="splash-navbar">
      <div className="navbar-1">
        <div className = "nav_float_left">
          <a href="/#/feed"><img src={window.images.logo}></img></a>
          <div className = "left_links">
            <ul>
              <a href="#">Discover</a>
              <a href="#">...</a>
            </ul>
          </div>
        </div>

      </div>
      <div className = "nav_float_right">

        <SearchContainer />

        <div className="fa-icons">
          <Link to={`/profile/${currentUser.id}`} className="navLink">
            <i className="fas fa-user-ninja"></i>
          </Link>
        </div>

        <div className="fa-icons">
          <Link to={'/upload'} className="navLink">
            <i className="fas fa-cloud-upload-alt"></i>
          </Link>
        </div>

        <Link to="/" id="first_sign_up" onClick={()=> logout()}>Log Out</Link>
      </div>

    </div>
  );

  return currentUser ? loggedIn() : loggedOut();
};


export default withRouter(NavBar);
