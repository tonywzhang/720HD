import React from 'react';
import { Link } from 'react-router-dom';

const splash = () => {
  return (
    <div className="header">
      <br/>
      <br/>
      <br/>
      <div id="large_header_text">Find your passion. Submit your best photos!</div>
      <br/>
      <br/>
      <br/>

      <div id="medium_header_text">Start building your portfolio today!</div>
      <br/>
      <br/>
      <br/>
      <br/>
      <Link to="/signup" id="second_sign_up">Join 720HD</Link>
    </div>
  );
};

export default splash;
