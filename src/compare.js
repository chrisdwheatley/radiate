import React, {Component} from 'react'

let prevValue

export class Compare extends Component {

  render () {
    const {value} = this.props
    let arrow = <p></p>

    if (value > prevValue) {
      arrow = <p>/\</p>
    }

    if (value < prevValue) {
      arrow = <p>\/</p>
    }

    if (value === prevValue) {
      arrow = <p>-</p>
    }

    prevValue = value

    return arrow
  }
}
