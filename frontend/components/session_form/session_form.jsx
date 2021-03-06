import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: '',
      username: '',
      email: '',
      password: ''
    };
    this.demoUser = {
      field: 'Tony',
      username: 'Tony',
      email: 'tony@tony.com',
      password: 'password'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    .then(() => this.props.history.push('/feed'));
  }

  demoLogin(){
    this.setState(this.demoUser);
    this.props.processForm(this.demoUser)
    .then(() => { this.props.history.push('/feed');
    });
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
      <div className="form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <div className="header-text">
            Log In to 720HD
          </div>
          {this.renderErrors()}
          <div className="login-form">
            <label><div>Username or Email</div>
            <input type="text"
              value={this.state.field}
              onChange={this.update('field')}
              className="login-input"
              />
          </label>
          <label><div>Password</div>

          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="login-input"
            />
        </label>
        <input id="session-submit" type="submit" value={this.props.formType} />
        <div id="formTypeSwap1">
          <div>
            Don't have an account?
            <Link className="login_links" to="/signup" onClick={()=>this.props.removeErrors()}>
              Sign Up
            </Link>
          </div>
          <Link to={'/feed'} className="login_links" onClick={()=>this.demoLogin()}>Demo Login</Link>
        </div>

      </div>
    </form>
  </div>
);
};

signUpForm(){
  return (
    <div className="form-container">
      <form onSubmit={this.handleSubmit} className="login-form-box">
        <div className="header-text">
          Join 720HD
        </div>
        {this.renderErrors()}
        <div className="login-form">
          <label><div>Email</div>
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
            />
        </label>
        <label><div>Username</div>

        <input type="text"
          value={this.state.username}
          onChange={this.update('username')}
          className="login-input"
          />
      </label>

      <label> <div>Password</div>
      <input type="password"
        value={this.state.password}
        onChange={this.update('password')}
        className="login-input"
        />
    </label>
    <input id="session-submit" type="submit" value={this.props.formType} />
    <div id="formTypeSwap2">Already have an account?
      <div>
        <Link className="login_links" to="/login" onClick={()=>this.props.removeErrors()}>
          Log In
        </Link>
      </div>


    </div>

  </div>
</form>
</div>
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
