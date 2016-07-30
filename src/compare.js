import * as colors from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
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

  console.log(value, prevValue);

  prevValue = value

  return (
    <MuiThemeProvider>
      <div>
        {arrow}
      </div>
    </MuiThemeProvider>
  )
}

Compare.propTypes = {
  value: PropTypes.string
}

export default Compare
