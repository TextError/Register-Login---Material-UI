import React, { Component } from 'react';

// MUI
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
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
      <div className='register'>
        <form className='' noValidate>
          <Grid 
            container
            spacing={0}
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputField
                  variant='outlined'
                  id="first_name"
                  label="First Name"
                  name="first_name"
                  value={first_name}
                  autoComplete="first_name"
                  onChange={this.onChange}
                /> 
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputField
                  variant='outlined'
                  id="last_name"
                  label="Last Name"
                  name="last_name"
                  value={last_name}
                  autoComplete="last_name"
                  onChange={this.onChange}
                /> 
              </Grid>
              <Grid item xs={12}>
                <InputField
                  variant='outlined'
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  autoComplete="email"
                  onChange={this.onChange}
                /> 
              </Grid>
              <Grid item xs={12}>
                <InputField
                  variant='outlined'
                  id="password"
                  label="Password"
                  name="password"
                  value={password}
                  autoComplete="password"
                  onChange={this.onChange}
                /> 
              </Grid>
              <Grid item xs={12}>
                <InputField
                  variant='outlined'
                  id="password2"
                  label="Confirm Password"
                  name="password2"
                  value={password2}
                  autoComplete="password2"
                  onChange={this.onChange}
                /> 
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }
}

export default Register;