import React, {Component} from 'react'

export class LastUpdated extends Component {

  render () {
    return (
      <span style={{padding: '1em'}}>Last Updated: {new Date().toString()}</span>
    )
  }
}
