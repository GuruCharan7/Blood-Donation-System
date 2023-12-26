import React from 'react';
import '../CSS/signup-style.css';

class SignUpForm extends React.Component {

  render() {
    return (
      <div>
        <header>
          <div className="login_header">
            <p className="login_header_text" style={{ marginLeft: '20px' , paddingTop:'1%'}}>
              StaffSync
            </p>
          </div>
        </header>
        <body className="login_body">
          <div className="signup_form">
            <div className="login_form_title">LOGIN</div>

            <form
              className="login_inputs"
              action="/login"
              method="post"
            >
              <fieldset className="login-group">
                <label>User Name</label>
                <input
                  type="text"
                  className="login-control"
                  name="username"
                  required
                />
              </fieldset>

              <fieldset className="login-group">
                <label>Email</label>
                <input
                  type="text"
                  className="login-control"
                  name="email"
                  required
                />
              </fieldset>

              <fieldset className="login-group">
                <label>Password</label>
                <input
                  type="password"
                  className="login-control"
                  name="password"
                  required
                />
              </fieldset>

              <div className="button_position">
                <button type="submit" className="login_button">
                  Sign Up
                </button>
                <p className='p-position'>OR</p>
              </div>

              <a href="/login" className="login_button n_2">
                Login
              </a>
            </form>

            {this.props.error && (
              <div className="error">Invalid username and password.</div>
            )}

            {this.props.logout && (
              <div className="error">You have been logged out.</div>
            )}
          </div>
        </body>
      </div>
    );
  }
}

export default SignUpForm;
