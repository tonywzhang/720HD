import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Photo extends React.Component {
  constructor(props){
    super(props);
    this.updateLike = this.updateLike.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.photoId !== nextProps.match.params.photoId){
      this.props.fetchPhoto(nextProps.match.params.photoId);
    }
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  updateLike (){
    // debugger;
    if(this.props.currentUserLikes){
      return this.props.handleDislike(this.props.match.params.photoId);
    } else {
      return this.props.handleLike(this.props.match.params.photoId);
    }
  }

  otherPhoto(){
    return (
      <div className="photo-full">
        <div className="photo-container">

          <div className="photo-display">
            <img src={this.props.photo.photoUrl}/>
          </div>

          <div className="photo-detail-container">
            <div className="profile-picture">
              <img src={window.images.guest}></img>
            </div>
            <div className="photo-header-section">
              <div className="photo-det-UN">
                <Link className="username-link" to={`/profile/${this.props.owner.id}`}>
                  {this.props.owner.username}
                </Link>
              </div>
            </div>

            <div className="buttons">
              <div className="follow-button">
                <button>Follow</button>
              </div>

              <div className="like-button">
                <button onClick={this.updateLike}> ♡{this.props.numLikes} </button>
              </div>
            </div>

            <div className="photo-details animated bounceIn">

              <div className="photo-title">
                {this.props.photo.title}
              </div>

              <div className="photo-description">
                {this.props.photo.description}
              </div>

              <div className="photo-location">
                {this.props.photo.location}
              </div>

              <div className="photo-date">
                Uploaded on {new Date(this.props.photo.created_at).toString().split(" ").slice(1,4).join(" ")}
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
            <img src={this.props.photo.photoUrl}/>
          </div>
          <div className="photo-detail-container">
            <div className="profile-picture">
              <img src={window.images.guest}></img>
            </div>
            <div className="photo-header-section">
              <div className="photo-det-UN">
                <Link to={`/profile/${this.props.owner.id}`}>
                  {this.props.owner.username}
                </Link>
              </div>
            </div>
            <div className="photo-buttons">
              <Link className="edit" to={`/profile/${this.props.owner.id}/photos/${this.props.photo.id}/edit`}>Edit</Link>
              <br/>
              <button onClick={() => this.props.deletePhoto(this.props.photo.id).then(()=>this.props.history.push(`/profile/${this.props.owner.id}`))}> Delete </button>
            </div>

            <div className="buttons">
              <div className="like-button">
                <button onClick={() => this.updateLike()}> ♡{this.props.numLikes} </button>
              </div>
            </div>


            <div className="photo-details animated bounceIn">
              <div className="photo-title">
                {this.props.photo.title}
              </div>
              <div className="photo-description">
                {this.props.photo.description}
              </div>
              <div className="photo-location">
                <i className="fas fa-map-marker-alt"> </i>{this.props.photo.location}
              </div>

              <div className="photo-date">
                Uploaded on {new Date(this.props.photo.created_at).toString().split(" ").slice(1,4).join(" ")}
              </div>
            </div>
          </div>


        </div>
      </div>
    )
  };

  render(){
    let owner = this.props.owner;
    let photo = this.props.photo;

    if(!photo || !owner) return <div>Loading</div>;

    return (this.props.currentUser.id === this.props.photo.author_id) ? this.ownPhoto() : this.otherPhoto();
  }
}

export default withRouter(Photo);
