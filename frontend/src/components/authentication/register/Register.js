import React, { Component } from 'react';

// MUI
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
      <div className='register d-flex'>
        <div className='container'>
          <div className='row no-gutters'>
            <div className='col d-flex'>
              <div className='m-auto'>
                <div className='register-form'>
                  <div className='register-paper'>
                    <Avatar className='register-avatar'>

                    </Avatar>
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
                            label="I want to receive inspiration, marketing promotions and updates via email."
                          />
                        </Grid>
                      </Grid>
                    </form>
                  </div>
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