import React, {Component} from 'react'

const styles = {
  image: {
    width: '100%',
    height: '100%'
  }
}

export class Image extends Component {

  render () {
    const {file, source, src} = this.props

    const image = file ? `/${file}` : src || source

    return (
      <img src={image} style={styles.image} />
    )
  }
}
