import React, { Component } from 'react';

// MUI
import Grid from '@material-ui/core/Grid';

class Home extends Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <p>Content ...</p>
        </Grid>
        <Grid item sm={6} xs={12}>
          <p>Content ...</p>
        </Grid>
      </Grid>
    )
  }
}

export default Home
