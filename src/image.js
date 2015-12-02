import React, {Component} from 'react'

export class Image extends Component {

  render () {
    const {file, source, src} = this.props

    const image = file ? `static/${file}` : src || source

    return (
      <img src={image} style={{minWidth: '50%', maxWidth: '100%'}} />
    )
  }
}
