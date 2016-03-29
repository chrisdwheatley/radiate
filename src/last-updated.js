import React, {Component} from 'react'
import * as moment from 'moment'
import * as colors from 'material-ui/lib/styles/colors'

export class LastUpdated extends Component {

  render () {
    const now = moment.default()
    const formattedNow = now.format('MMM Do h:mm:ss a')
    return (
      <div style={{flex: 1, width: '100%', position: 'absolute', bottom: 0, padding: '1em 0', textAlign: 'center'}}>
        <span style={{color: colors.pink200}}>Last Updated:</span> {formattedNow}
      </div>
    )
  }
}
