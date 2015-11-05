import React, {Component} from 'react'

export class Dashboard extends Component {
  render () {
    return (
      <div style={{margin: 22}}>
        {this.props.children}
      </div>
    )
  }
}
