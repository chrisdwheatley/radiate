import React, {PropTypes} from 'react'
import * as moment from 'moment'

const styles = {
  wrapper: {
    left: 0,
    bottom: 1,
    width: '100%',
    textAlign: 'center',
    fontSize: '50%',
    color: 'rgba(255, 255, 255, 0.70)'
  }
}

const LastUpdated = ({time}) => {
  return (
    <div style={styles.wrapper}>Last Updated: {moment.unix(time).format('MMM Do h:mm a')}</div>
  )
}

LastUpdated.propTypes = {
  time: PropTypes.number.isRequired
}

export default LastUpdated
