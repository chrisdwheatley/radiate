import React, {Component} from 'react'

export class LastUpdated extends Component {
  
  render () {
    return (
      <span>Last Updated: {new Date().toString()}</span>
    )
  }
}
