import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Photo extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.photoId !== nextProps.match.params.photoId){
      this.props.fetchPhoto(nextProps.match.params.photoId);
    }
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  otherPhoto(){
    return (
      <div className="photo-full">
        <div className="photo-container">

          <div className="photo-display">
            <img src={this.props.details.photoUrl}/>
          </div>

          <div className="photo-detail-container">
            <div className="profile-picture">
              <img src={window.images.guest}></img>
            </div>
            <div className="photo-header-section">
              <div className="photo-det-UN">
                <Link className="username-link" to={`/profile/${this.props.userId}`}>
                  {this.props.details.username}
                </Link>
              </div>
            </div>

            <div className="buttons">
              <div className="follow-button">
                <button>Follow</button>
              </div>

              <div className="like-button">
                <button> ♡68 </button>
              </div>
            </div>

            <div className="photo-details animated bounceIn">

              <div className="photo-title">
                {this.props.details.title}
              </div>

              <div className="photo-description">
                {this.props.details.description}
              </div>

              <div className="photo-location">
                {this.props.details.location}
              </div>

              <div className="photo-date">
                Uploaded on {new Date(this.props.details.created_at).toString().split(" ").slice(1,4).join(" ")}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

  ownPhoto(){
    return (
      <div>
        <div className="photo-container">
          <div className="photo-display">
            <img src={this.props.details.photoUrl}/>
          </div>
          <div className="photo-detail-container">
            <div className="profile-picture">
              <img src={window.images.guest}></img>
            </div>
            <div className="photo-header-section">
              <div className="photo-det-UN">
                <Link to={`/profile/${this.props.userId}`}>
                  {this.props.details.username}
                </Link>
              </div>
            </div>
            <div className="photo-buttons">
              <Link className="edit" to={`/profile/${this.props.userId}/photos/${this.props.details.id}/edit`}>Edit</Link>
              <br/>
              <button onClick={() => this.props.deletePhoto(this.props.details.id).then(()=>this.props.history.push(`/profile/${this.props.userId}`))}> Delete </button>
            </div>
            <div className="photo-details animated bounceIn">
              <div className="photo-title">
                {this.props.details.title}
              </div>
              <div className="photo-description">
                {this.props.details.description}
              </div>
              <div className="photo-location">
                <i className="fas fa-map-marker-alt"> </i>{this.props.details.location}
              </div>

              <div className="photo-date">
                Uploaded on {new Date(this.props.details.created_at).toString().split(" ").slice(1,4).join(" ")}
              </div>
            </div>
          </div>


        </div>
      </div>
    )
  };

  render(){
    if(Object.values(this.props.details).length===0) return "Loading";

    return (this.props.currentUser.id === this.props.details.author_id) ? this.ownPhoto() : this.otherPhoto();
  }
}

export default withRouter(Photo);
