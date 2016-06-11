import * as colors from 'material-ui/lib/styles/colors'
import React, {PropTypes} from 'react'

const styles = {
  color: 'rgba(255, 255, 255, 0.70)',
  textAlign: 'center'
}

const Title = ({title}) => <div style={styles}>{title}</div>

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title
