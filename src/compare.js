import Radium from 'radium'
import React, {Component} from 'react'

let prevValue

const styles = {
  compareIcon: {
    fontSize: '180%'
  }
}

@Radium
export class Compare extends Component {

  render () {
    const {value} = this.props
    let arrow = null

    if (value > prevValue) {
      arrow = '/\\'
    }

    if (value < prevValue) {
      arrow = '\\/'
    }

    if (value === prevValue) {
      arrow = '-'
    }

    prevValue = value

    return (
      <div style={styles.compareIcon}>
        {arrow}
      </div>
    )
  }
}
