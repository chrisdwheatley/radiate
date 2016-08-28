import React, {Component} from 'react'
import {layout} from './layout'
import {Cell, Dashboard, Grid, Text, Value} from '../src' // eslint-disable-line

export default class extends Component {
  render () {
    return (
      <Dashboard>
        <Grid layout={layout}>
          <Cell name='a'>
            {/* component goes here */}
          </Cell>
          <Cell name='b'>
            {/* component goes here */}
          </Cell>
          <Cell name='c'>
            {/* component goes here */}
          </Cell>
          <Cell name='d'>
            {/* component goes here */}
          </Cell>
          <Cell name='e'>
            {/* component goes here */}
          </Cell>
          <Cell name='f'>
            {/* component goes here */}
          </Cell>
        </Grid>
      </Dashboard>
    )
  }
}
