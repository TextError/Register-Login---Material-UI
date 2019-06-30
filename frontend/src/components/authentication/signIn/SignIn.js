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

// Logo
import logo from '../../../assets/logo.png';

// Css
import '../../../css/signIn.css'

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    console.log('test')
  };

  render() {
    const { email, password } = this.state;
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
          <Typography component="h1" variant="h4" className='login-sign-up'>
            Sign in
          </Typography>
          <form className='login-form' noValidate onSubmit={this.onSubmit}>
            <Grid container>
              <Grid item xs={12}>
                <Box mb={2}>
                  <InputField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    autoComplete="email"
                    autoFocus
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box mb={2}>
                  <InputField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={this.onChange}
                    autoComplete="current-password"
                  />
                </Box>
              </Grid>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className='login-btn'
              >
                Sign In
              </Button>
                <Grid container>
                  <Grid item xs>
                    <Box mt={2}>
                      <Link to='/recover-password'>
                        Forgot password?
                      </Link>
                    </Box>
                  </Grid>
                <Grid item>
                  <Box mt={2}>
                    <Link to='/register'>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid> 
      </div>
    );
  };
};

SignIn.propTypes = {

}

export default SignIn;