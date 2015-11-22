import React, {Component} from 'react'

export class Image extends Component {
  render () {
    const {src} = this.props
    return (
      <img src={src} style={{minWidth: '50%', maxWidth: '100%'}} />
    )
  }
}
