import * as colors from 'material-ui/lib/styles/colors'
import FontIcon from 'material-ui/lib/font-icon'
import React, {PropTypes} from 'react'

let prevValue

const styles = {
  compareIcon: {
    lineHeight: 1.2,
    color: colors.fullWhite,
    fontWeight: 700
  }
}

const Compare = ({value}) => {
  let arrow = <span style={styles.compareIcon}>-</span>

  if (value > prevValue) {
    arrow = <FontIcon style={styles.compareIcon} className='material-icons'>arrow_upward</FontIcon>
  }

  if (value < prevValue) {
    arrow = <FontIcon style={styles.compareIcon} className='material-icons'>arrow_downward</FontIcon>
  }

  prevValue = value

  return (
    <div>
      {arrow}
    </div>
  )
}

Compare.propTypes = {
  value: PropTypes.number
}

export default Compare
