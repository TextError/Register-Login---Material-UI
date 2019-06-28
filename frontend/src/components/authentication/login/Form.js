import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Mui
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: {}
    }
  }

  onSubmit = e => {
    e.preventDefault();

    console.log('test');
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render() {
    return (
      <form noValidate onSubmit={this.onSubmit}>
        <TextField 
          id='email'
          name='email'
          type='email'
          label='Email'
          className='form-text-field'
          value={this.state.email}
          onChange={this.onChange}
          fullWidth
        /> 
        <TextField 
          id='password'
          name='password'
          type='password'
          label='Password'
          className='form-text-field'
          value={this.state.password}
          onChange={this.onChange}
          fullWidth
        /> 
        <Grid 
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Button type='submit' variant='contained' color='primary' className='form-btn'>Submit</Button>
        </Grid>
      </form>
    )
  }
}

Form.propTypes = {

}

export default Form;