import React, {Component} from 'react'
import {Grid} from 'react-flexr'

export class Row extends Component {

  render () {
    const {onPoll, value} = this.props
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        onPoll,
        value
      })
    })
    return (
      <Grid
        style={{margin: '0 -11px'}}>
        {children}
      </Grid>
    )
  }
}
