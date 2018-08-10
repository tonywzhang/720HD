import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {

  const loggedOut = () => (
    <div className="splash-navbar">
      <div className="navbar-1">
        <div className = "nav_float_left">
          <Link to={"/"}>Logo</Link>
          <Link to={"/"}>Discover</Link>
          <Link to={"/"}>About</Link>
        </div>
      </div>

      <div className = "nav_float_right">
        <Link to="/login" id="login_link">Log in</Link>
        <Link to="/signup" id="first_sign_up">Sign up</Link>
      </div>

    </div>
  );

  return loggedOut();
};


export default NavBar;


//from navbar-1
//<Link className="logo" to={"/"}><img src={window.images.logo}></img></Link>
// from navbar-1
//  <div className="hook1">  Hook1 </div>
//  <div className="hook2">  Hook2 </div>

//from nav_bar.css
// .hook1 {
//   font-size: 36px;
//   color: black;
// }
//
// .hook2 {
//   font-size: 24px;
//   color: black;
// }
