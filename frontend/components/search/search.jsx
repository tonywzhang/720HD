import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {Link, withRouter} from 'react-router-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: ''};
    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount(){
    this.props.fetchUsers();
  };

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  matches() {
    let matches = [];
    if (this.state.inputVal.length === 0) {
      return [];
    }

    this.props.users.forEach(name => {
      const sub = name.username.slice(0, this.state.inputVal.length);
      if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  selectName(userId) {
    if (userId === undefined){
      return null;
    }

    return () => {
      this.setState({inputVal: ""});
    }
  }

  render() {
    if(!this.props.users) return null;

    const results = this.matches().map((result, i) => {
      return (
        <li className="search-results"><Link to={`/profile/${result.id}`} key={i} onClick={this.selectName(result.id)}>{result.username}</Link></li>
      );
    });

    return(
      <div>
        <div className='searchbar_div'>
          <span className="fas fa-search"></span>
          <input
            type="text"
            className="searchbar"
            placeholder="       Search for photos, location, or people"
            onChange={this.handleInput}
            value={this.state.inputVal}
            />
          <ul>
            {results}
          </ul>
        </div>
      </div>
    );
  }
};

export default withRouter(Search);
