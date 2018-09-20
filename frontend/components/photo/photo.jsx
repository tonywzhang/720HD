import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Photo extends React.Component {
  constructor(props){
    super(props);
    this.updateLike = this.updateLike.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
    if(this.props.currentUserLikes){
      return this.props.handleDislike(this.props.match.params.photoId);
    } else {
      return this.props.handleLike(this.props.match.params.photoId);
    }
  }

  handleDelete (){
    let ownerId = this.props.owner.id;
    this.props.deletePhoto(this.props.photo.id).then(()=>this.props.history.push(`/profile/${ownerId}`));
  }

  otherPhoto(){
    return (
      <div className="photo-full">
        <div className="photo-container">
          <div className="photo-display">
            <img src={this.props.photo.photoUrl}/>
          </div>

          <div className="photo-detail-container">
            <div className="top-section">
            <div className="profile-picture">
              <Link to={`/profile/${this.props.owner.id}`}>
                <img src={window.images.guest}></img>
              </Link>
            </div>
            <div className="photo-header-section">
              <div className="photo-det-UN">
                <Link className="username-link" to={`/profile/${this.props.owner.id}`}>
                  {this.props.owner.username}
                </Link>
              </div>
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

              <div className="text-details">
              <div className="photo-title">
                {this.props.photo.title}
              </div>

              <div className="photo-description">
                {this.props.photo.description}
              </div>


              <div className="photo-date">
                | Uploaded on {new Date(this.props.photo.created_at).toString().split(" ").slice(1,4).join(" ")}
              </div>
            </div>
            <br/>

              <div className="photo-location">
                <iframe
                  width="300"
                  height="300"
                  frameBorder="0"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC8ut5JUk50mkX2jeJkzEmTotxysjpV-cg
                  &q=${this.props.photo.location.split(" ").join("+")}&zoom=7`} allowFullScreen>
                </iframe>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  };

  ownPhoto(){
    return (
      <div className="photo-full">
        <div className="photo-container">

          <div className="photo-display">
            <img src={this.props.photo.photoUrl}/>
          </div>

          <div className="photo-detail-container">
            <div className="top-section">
            <div className="profile-picture">
              <Link to={`/profile/${this.props.owner.id}`}>
                <img src={window.images.guest}></img>
              </Link>
            </div>
            <div className="photo-header-section">
              <div className="photo-det-UN">
                <Link className="username-link" to={`/profile/${this.props.owner.id}`}>
                  {this.props.owner.username}
                </Link>
              </div>
            </div>
          </div>
            <div className="photo-buttons">
              <Link className="edit" to={`/profile/${this.props.owner.id}/photos/${this.props.photo.id}/edit`}>Edit</Link>
              <br/>
              <button onClick={() => this.handleDelete()}> Delete </button>
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

                <div className="photo-date">
                  Uploaded on {new Date(this.props.photo.created_at).toString().split(" ").slice(1,4).join(" ")}
                </div>
                <br/>
                <div className="photo-location">
                  <iframe
                    width="300"
                    height="300"
                    frameBorder="0"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC8ut5JUk50mkX2jeJkzEmTotxysjpV-cg
                    &q=${this.props.photo.location.split(" ").join("+")}&zoom=7`} allowFullScreen>
                  </iframe>
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

      if(!photo || !owner || !photo.location) return <div>Loading</div>;

        return (this.props.currentUser.id === this.props.photo.author_id) ? this.ownPhoto() : this.otherPhoto();
      }
    }

    export default withRouter(Photo);
