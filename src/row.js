import React, {Component} from 'react'
import {Grid} from 'react-flexr'

export class Row extends Component {
  render () {
    return (
      <Grid {...this.props} style={{margin: '0 -11px'}}>
        {this.props.children}
      </Grid>
    )
  }
}
