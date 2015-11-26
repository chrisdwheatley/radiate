import React, {Component} from 'react'

export class Text extends Component {

  render () {
    const {body, title} = this.props
    return (
      <div style={{padding: '1em', margin: 0}}>
        <h3 style={{textAlign: 'center'}}>{title}</h3>
        <p>{body}</p>
      </div>
    )
  }
}
