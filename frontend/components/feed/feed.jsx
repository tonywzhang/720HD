import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Feed extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.id !== nextProps.match.params.id){
      this.props.fetchUser(nextProps.match.params.id);
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  render(){
    return (
      <div className="feed">
        <div className="feed-container">
          <h1 className="feed-header">
            Most Recent Photos
          </h1>

          <div className="feed-photos">
            {Object.values(this.props.photos).reverse().map((photo)=>{
              return (
              <div className="pf-container">
              <Link className="feed-show" to={`/profile/${this.props.currentUser.id}/photos/${photo.id}`}>
                  <img src={photo.photoUrl} />
                </Link>
              </div>
            );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Feed);
