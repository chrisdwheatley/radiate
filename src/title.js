import * as colors from 'material-ui/styles/colors'
import React, {PropTypes} from 'react'

const styles = {
  color: 'rgba(255, 255, 255, 0.70)',
  textAlign: 'center',
  fontSize: '66.6%',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-.02em'
}

const Title = ({title}) => <div style={styles}>{title}</div>

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title
