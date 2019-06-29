import React, { Component } from 'react';

// MUI
import Grid from '@material-ui/core/Grid';

// Components
import InputField from './InputField';

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
    console.log(email)
    return (
      <div className='register'>
        <form className='' noValidate>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
          >
            <Grid item xs={12} sm={6}>
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
          </Grid>
        </form>
      </div>
    )
  }
}

export default Register
