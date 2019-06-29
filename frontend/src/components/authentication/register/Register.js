import React, { Component } from 'react';

// MUI
import Grid from '@material-ui/core/Grid';

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
            <Grid item xs={8} sm={4} md={2}>
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
            <Grid item xs={8} sm={4} md={2}>
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
          </Grid>
        </form>
      </div>
    )
  }
}

export default Register
