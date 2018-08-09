import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {

  const loggedOut = () => (
    <header className="header">
      <div className="navbar-1">
        <Link to={"/"}>Logo</Link>
        <Link to={"/"}>Discover</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Licensing</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>

      <div className="hook1">  Hook1 </div>
      <div className="hook2">  Hook2 </div>

      <Link to="/signup" id="second_sign_up">Sign up</Link>
    </header>
  );
  const loggedIn = () => (
    <div className="navbar-2">
      <Link to={"/"}>Logo</Link>
      <Link to={"/"}>Discover</Link>
      <button className="header-button" onClick={logout}>Log Out</button>
    </div>
  );

  return currentUser ? loggedIn() : loggedOut();
};


export default NavBar;

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
