import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// Components
import InputField from '../InputField';

// CSS
import '../../../css/signUp.css';

// Logo
import logo from '../../../assets/logo.png';

class SignUp extends Component {
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

  onSubmit = e => {
    e.preventDefault();

    console.log('test')
  }

  render() {
    const { first_name, last_name, email, password, password2 } = this.state;
    return (
      <div className='login'>
        <Grid 
          container
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          <img src={logo} alt='logo' />
          <Typography component="h1" variant="h4" className='register-sign-up'>
            Sign up
          </Typography>
          <form className='register-form' noValidate onSubmit={this.onSubmit}>
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
                  label="First Name"
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
                  type="password"
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
                  type="password2"
                  autoComplete="password2"
                  onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  className='register-checkbox'
                />
              </Grid>
            </Grid>
            <Box mt={1}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className='register-btn'
              >
                Sign Up
              </Button>
            </Box>
            <Grid container justify="flex-end">
              <Grid item className='register-link'>
                <Box mt={2}>
                  <Link to='/sign-in'>
                    Already have an account? Sign in
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </div>
    );
  };
};

SignUp.propTypes = {

}

export default SignUp;