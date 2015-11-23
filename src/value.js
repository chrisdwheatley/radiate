import React, {Component} from 'react'
import fetch from './fetch'

export class Value extends Component {

  componentDidMount () {
    const {api, id, file, freq, onPoll, prop} = this.props

    if (file || api) {
      fetch(file, api).then(res => {
        onPoll(id, res[prop])
      })
      // switch to setTimeout at some point
      setInterval(() => {
        fetch(file, api).then(res => {
          onPoll(id, res[prop])
        })
      }, freq * 1000)
    }

  }

  render () {
    const {freq, id, title, value} = this.props

    return (
      <div style={{padding: '1em', margin: 0, textAlign: 'center'}}>
        <h3>{title}</h3>
        <h2>{value[id] ? value[id] : ''}</h2>
      </div>
    )
  }
}
