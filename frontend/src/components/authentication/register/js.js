import React, { Component } from 'react';

// MUI
import Button from '@material-ui/core/Button';

// Components
import InputField from './InputField';

// CSS
import '../../../css/register.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password2: ''
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { first_name, last_name, email, password, password2 } = this.state;
    return (
      <div className='register mt-5'>
        <div className='container'>
          <div className='row no-gutters'>
            <div className='col-md-6 mx-auto'>
              <div className='card'>
                <div className="card-header text-white">
                  <h4>Register</h4>
                </div>
                <div className="card-body">
                  <form noValidate onSubmit={this.onSubmit}>
                    <div className='row no-gutters'>
                      <div className='col'>
                        <InputField
                          variant='outlined'
                          id="first_name"
                          label="First Name"
                          name="first_name"
                          value={first_name}
                          autoComplete="first_name"
                          onChange={this.onChange}
                        /> 
                        <InputField
                          variant='outlined'
                          id="last_name"
                          label="First Name"
                          name="last_name"
                          value={last_name}
                          autoComplete="last_name"
                          onChange={this.onChange}
                        /> 
                      </div>
                    </div>
                    <div className='row no-gutters'>
                      <div className='col'>
                        <InputField
                          variant='outlined'
                          id="email"
                          label="Email Address"
                          name="email"
                          value={email}
                          autoComplete="email"
                          onChange={this.onChange}
                        /> 
                      </div>
                    </div>
                    <div className='row no-gutters'>
                      <div className='col'>
                        <InputField
                          variant='outlined'
                          id="password"
                          label="Password"
                          name="password"
                          value={password}
                          autoComplete="password"
                          onChange={this.onChange}
                        /> 
                      </div>
                    </div>
                    <div className='row no-gutters'>
                      <div className='col'>
                        <InputField
                          variant='outlined'
                          id="password2"
                          label="Confirm Password"
                          name="password2"
                          value={password2}
                          autoComplete="password2"
                          onChange={this.onChange}
                        /> 
                      </div>
                    </div>
                    <div className='row no-gutters'>
                      <div className='col'>
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                        >
                          Sign Up
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;