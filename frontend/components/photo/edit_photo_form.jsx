import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class EditPhotoForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.photo;

  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.photoId !== nextProps.match.params.photoId){
      this.props.fetchPhoto(nextProps.match.params.photoId);
    }
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId)
    .then(({ photo}) => {
      this.setState({
        location: this.props.photo.location,
        description: this.props.photo.description,
        title: this.props.photo.title
      })});

    }

    update(field) {
      return (e) => {
        this.setState({[field]: e.target.value});
      };
    }

    handleSubmit(e) {
      e.preventDefault();
      const fields = this.state
      const newPhotoObj = Object.assign({}, fields, { id: this.props.photo.id}, {author_id: this.props.owner.id})
      this.props.updatePhoto(newPhotoObj).then(()=>this.props.history.push(`/profile/${this.props.owner.id}`));
    }


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
                  <img src={window.images.guest}></img>
                </div>
                <div className="photo-header-section">
                  <div className="photo-det-UN">
                    <Link className="username-link"
                      to={`/profile/${this.props.owner.id}`}>
                      {this.props.owner.username}
                    </Link>
                  </div>
                </div>
              </div>

                <div className="photo-details">
                  <form onSubmit={this.handleSubmit} className="edit-form">
                    <label >Title
                      <input
                        type="text"
                        value={this.state.title}
                        onChange={this.update('title')} />
                    </label>

                    <label> Description
                      <textarea
                        value={this.state.description}
                        onChange={this.update('description')} />
                    </label>

                    <label> Location
                      <input
                        type="text"
                        value={this.state.location}
                        onChange={this.update('location')} />
                    </label>

                    <input type="submit" value="Submit Changes" className="submit-button"/>
                  </form>
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
          return this.ownPhoto();
        }
      }

      export default withRouter(EditPhotoForm);
