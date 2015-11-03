import React, {Component} from 'react'
import {Cell} from 'react-flexr'

export class Item extends Component {
  render () {
    return (
      <Cell {...this.props}>
        {this.props.children}
      </Cell>
    )
  }
}
