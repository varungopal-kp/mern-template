import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Orders from './Orders';

export default class index extends Component {
  state = {};

  componentDidMount() {
    this.props.setTitle('Dashboard');
  }

  render() {
    return (
      <Grid container spacing={3}>        
        <Grid item xs={12}>
          <Paper className="paper2">
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
