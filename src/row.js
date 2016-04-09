import Radium from 'radium'
import React, {Component} from 'react'
import {Grid} from 'react-flexr'

const styles = {
  grid: {
    margin: '0 -11px'
  }
}

@Radium
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
        style={styles.grid}>
        {children}
      </Grid>
    )
  }
}
