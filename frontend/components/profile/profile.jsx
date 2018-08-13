import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){
    return (
      <div>
        <h1 className="profile-container">
          Welcome to your Profile Page
        </h1>
      </div>
    );
  }
}
