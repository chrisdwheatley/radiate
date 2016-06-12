import * as colors from 'material-ui/lib/styles/colors'
import FontIcon from 'material-ui/lib/font-icon'
import Radium from 'radium'
import React, {Component} from 'react'

let prevValue

const styles = {
  compareIcon: {
    lineHeight: 1.2,
    color: colors.fullWhite,
    fontWeight: 700
  }
}

@Radium
export class Compare extends Component {

  render () {
    const {value} = this.props
    let arrow = null

    if (value > prevValue) {
      arrow = <FontIcon style={styles.compareIcon} className='material-icons'>arrow_upward</FontIcon>
    }

    if (value < prevValue) {
      arrow = <FontIcon style={styles.compareIcon} className='material-icons'>arrow_downward</FontIcon>
    }

    if (value === prevValue) {
      arrow = <span style={styles.compareIcon}>-</span>
    }

    prevValue = value

    return (
      <div style={styles.compareIcon}>
        {arrow}
      </div>
    )
  }
}
