import React, {Component} from 'react'

export class Image extends Component {

  render () {
    const {file, source, src} = this.props

    const image = file ? `static/${file}` : src || source

    return (
      <img src={image} style={{width: '100%', height: '100%'}} />
    )
  }
}
