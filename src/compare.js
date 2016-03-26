import React, {Component} from 'react'

let prevValue

export class Compare extends Component {

  render () {
    const {value} = this.props
    let arrow = <p></p>

    // need to stop the <Value> component rerendering on each xhr poll
    // will hopefully come with refactor of redux setup

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
