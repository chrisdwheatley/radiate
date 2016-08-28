import * as colors from 'material-ui/styles/colors'
import FontIcon from 'material-ui/FontIcon'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React, {PropTypes} from 'react'

const prevValue = {}

const styles = {
  compareIcon: {
    lineHeight: 1.2,
    color: colors.fullWhite,
    fontWeight: 700
  }
}

const Compare = ({id, value}) => {
  let arrow = <span style={styles.compareIcon}>-</span>

  if (value > prevValue[id]) {
    arrow = <FontIcon style={styles.compareIcon} className='material-icons'>arrow_upward</FontIcon>
  }

  if (value < prevValue[id]) {
    arrow = <FontIcon style={styles.compareIcon} className='material-icons'>arrow_downward</FontIcon>
  }

  prevValue[id] = value

  return (
    <MuiThemeProvider>
      <div>
        {arrow}
      </div>
    </MuiThemeProvider>
  )
}

Compare.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default Compare
