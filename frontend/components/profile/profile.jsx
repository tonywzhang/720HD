import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props){
    super(props);
    // debugger;
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.id !== nextProps.match.params.id){
      this.props.fetchUser(nextProps.match.params.id);
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  render(){
    if(!this.props.users[this.props.userId]) return null;
    if(!this.props.users[this.props.userId].photos) return null;
    return (
      <div>
        <h1 className="profile-container">
          <div className="profile-header-pic"/>
          <div className="profile-pic"><img src={window.images.guest}></img></div>

          <button className="follow">Follow</button>

          <div className="username animated bounceIn">{this.props.user.username}</div>

          <div className="user-description animated fadeIn">Lazy software-dev in-training, pretending to have in interest in photography</div>

          <div className="user-details animated fadeIn">
            <ul>
              <li>
                27,815,349 Photo Views
              </li>
              <li>
                2 Followers
              </li>
              <li>
                1 Following
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> <a href ='https://www.google.com/maps/place/San+Francisco' className="google-maps">San Francisco, CA</a>
              </li>
            </ul>
          </div>


          <div className="profile-photos">
            {Object.values(this.props.users[this.props.userId].photos).map((photo)=>{
              return <img src={photo.photoUrl} />
            })}
          </div>
        </h1>
      </div>
    );
  }
}

/*<div className="profile-1-1">
  <img src={window.images.pat1}></img>
</div>
<div className="profile-1-2">
  <img src={window.images.pat2}></img>
</div>
<div className="profile-1-3">
  <img src={window.images.yosemite}></img>
</div>
<div className="profile-1-4">
  <img src={window.images.banff2}></img>
</div>
<div className="profile-2-1">
  <img src={window.images.vc}></img>
</div>
<div className="profile-2-2">
  <img src={window.images.dwade_bron}></img>
</div>
<div className="profile-2-3">
  <img src={window.images.steph_bron}></img>
</div>
<div className="profile-2-4">
  <img src={window.images.pat1}></img>
</div>*/




export default Profile;
