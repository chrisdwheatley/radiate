import React, {Component} from 'react'
import {Graph, Grid, Item} from '../src'

export default class extends Component {
  render () {
    return (
      <section>
        <Grid>
          <Item size='1/2'>
            <Graph />
          </Item>
          <Item>
            <Graph />
          </Item>
        </Grid>
        <Grid>
          <Item size='1/3'>
            <Graph />
          </Item>
          <Item>
            <Graph />
          </Item>
        </Grid>
      </section>
    )
  }
}
