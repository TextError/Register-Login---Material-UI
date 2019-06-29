import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Form from './Form';

// MUI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Images
import logo from '../../../assets/logo.png';

// Css
import '../../../css/login.css'

class Login extends Component {
  render() {
    return (
      <Grid 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={6}>
          <img src={logo} alt='logo' className='m-auto p-tb-10'/>
          <Typography variant='h4' className='login-page-title'>
            Sign up
          </Typography>
          <Form />
        </Grid>   
      </Grid> 
    )
  }
}

Login.propTypes = {

}

export default Login