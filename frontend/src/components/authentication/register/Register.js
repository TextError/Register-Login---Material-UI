import React, { Component } from 'react';

// MUI
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// Components
import InputField from './InputField';

class Register extends Component {
  render() {
    return (
      <div className='register'>
        <form className='' noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <InputField
                variant='outlined'
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }
}

export default Register
