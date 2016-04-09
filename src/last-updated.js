import Radium from 'radium'
import React, {Component} from 'react'
import * as moment from 'moment'
import * as colors from 'material-ui/lib/styles/colors'

const styles = {
  wrapper: {
    left: 0,
    position: 'absolute',
    bottom: '11px',
    width: '100%',
    textAlign: 'center',
    '@media screen and (max-width: 600px)': {
      fontSize: '120%'
    },
    '@media screen and (min-width: 601px) and (max-width: 959px)': {
      fontSize: '130%'
    },
    '@media screen and (min-width: 960px)': {
      fontSize: '140%'
    }
  },
  text: {
    color: colors.pink200
  }
}

@Radium
export class LastUpdated extends Component {

  render () {
    const {time} = this.props
    const formattedNow = moment.unix(time).format('MMM Do h:mm:ss a')

    return (
      <div style={styles.wrapper}>
        <span style={styles.text}>Last Updated:</span> {formattedNow}
      </div>
    )
  }
}
