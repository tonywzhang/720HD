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
        <h1 className="nf-container">

          <div>
            <img src={window.images.logo}></img>
          </div>

          <h1 className="nf-header">Page not found </h1>

          <h3 className="nf-body-text">
            We could not find the above page on our servers.
          </h3>

          <h3 className="nf-body-text">
            Click <Link to={`/feed`}>here</Link> to return to the home page.
          </h3>
        </h1>
      </div>
    );
  }

}

export default Feed;
