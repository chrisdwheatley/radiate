import React, {Component} from 'react'

export class Image extends Component {
  render () {
    const {src} = this.props
    return (
      <img src={src.includes('http://') ? src: `http://${src}`} width='100%' />
    )
  }
}
