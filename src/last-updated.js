import Radium from 'radium'
import React, {Component} from 'react'
import * as moment from 'moment'

const styles = {
  wrapper: {
    left: 0,
    bottom: 1,
    width: '100%',
    textAlign: 'center',
    fontSize: '60%',
    color: 'rgba(255, 255, 255, 0.70)'
  }
}

@Radium
export class LastUpdated extends Component {

  render () {
    const {time} = this.props
    const formattedNow = moment.unix(time).format('MMM Do h:mm a')

    return (
      <div style={styles.wrapper}>Last Updated: {formattedNow}</div>
    )
  }
}
