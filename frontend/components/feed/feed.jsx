import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <div>
        <h1 className="feed-container">
          Most Recent Photos
        </h1>
      </div>
    );
  }

}

export default Feed;
