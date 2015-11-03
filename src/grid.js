import React, {Component} from 'react'
import {Grid as FlexGrid} from 'react-flexr'

export class Grid extends Component {
  render () {
    return (
      <FlexGrid>
        {this.props.children}
      </FlexGrid>
    )
  }
}
