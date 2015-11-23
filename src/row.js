import React, {Component} from 'react'
import {Grid} from 'react-flexr'

export class Row extends Component {
  
  render () {
    const children = React.Children.map(this.props.children, (child) => {
      // not sure why i can't do {...this.props} as the 2nd arg below
      return React.cloneElement(child, {
        onPoll: this.props.onPoll,
        value: this.props.value
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
