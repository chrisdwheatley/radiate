import React, {Component} from 'react'
import {layout} from './layout'
import {Cell, Dashboard, Grid, Text, Value} from '../src'

export default class extends Component {
  render () {
    return (
      <Dashboard>
        <Grid layout={layout}>
          <Cell name='a'>

          </Cell>
          <Cell name='b'>

          </Cell>
          <Cell name='c'>

          </Cell>
          <Cell name='d'>

          </Cell>
          <Cell name='e'>

          </Cell>
          <Cell name='f'>

          </Cell>
        </Grid>
      </Dashboard>
    )
  }
}
