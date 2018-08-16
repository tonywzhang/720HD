import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class EditPhotoForm extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.details;
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
        location: photo.details.location,
        description: photo.details.description,
        title: photo.details.title
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
    const newPhotoObj = Object.assign({}, fields, { id: this.props.photoId}, {author_id: this.props.userId})
    console.warn(newPhotoObj)
    this.props.updatePhoto(newPhotoObj).then(()=>this.props.history.push(`/profile/${this.props.userId}`));
  }


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

            <div className="photo-details">
              <form onSubmit={this.handleSubmit} className="edit-form">
                <label>Title
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

      if(Object.values(this.props.details).length===0) return "Loading";

      return this.ownPhoto();
    }
  }

  export default withRouter(EditPhotoForm);
