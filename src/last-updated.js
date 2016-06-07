import Radium from 'radium'
import React, {Component} from 'react'
import * as moment from 'moment'
import * as colors from 'material-ui/lib/styles/colors'

const styles = {
  wrapper: {
    left: 0,
    bottom: 1,
    width: '100%',
    textAlign: 'center',
    fontSize: '60%'
  },
  text: {
    color: colors.white
  }
}

@Radium
export class LastUpdated extends Component {

  render () {
    const {time} = this.props
    const formattedNow = moment.unix(time).format('MMM Do h:mm a')

    return (
      <div style={styles.wrapper}>
        <span style={styles.text}>Last Updated:</span> {formattedNow}
      </div>
    )
  }
}
