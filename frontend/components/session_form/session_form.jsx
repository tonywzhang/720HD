import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  loginForm(){
    return (
      <form onSubmit={this.handleSubmit} className="login-form-box">
        Log In to 720 PICS
        <br/>
        {this.renderErrors()}
        <div className="login-form">
          <br/>
          <label> Username
          <br/>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
              placeholder="Username"
              />
          </label>
          <br/>
          <label>Password
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Password"
              />
          </label>
          <br/>
          <input className="session-submit" type="submit" value={this.props.formType} />
          <br>
          </br>
          Don't have an account? {this.props.navLink}

        </div>
      </form>
    );
  };

  signUpForm(){
    return (
      <form onSubmit={this.handleSubmit} className="login-form-box">
        Join 720 PICS
        <br/>
        {this.renderErrors()}
        <div className="login-form">
          <br/>
          <label> Username
          <br/>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
              placeholder="Username"
              />
          </label>
          <br/>
          <label>Password
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Password"
              />
          </label>
          <br/>
          <input className="session-submit" type="submit" value={this.props.formType} />
          <br>
          </br>
          Already have an account? {this.props.navLink}

        </div>
      </form>
    );
  };



  render() {
    return (
      <div className="login-form-container">
        {(this.props.formType==="Sign Up") ? this.signUpForm() : this.loginForm()}
      </div>
    );
  }
}

export default withRouter(SessionForm);
