import React, {Component} from 'react'
import 'whatwg-fetch'

function fetchFile (props) {
  return fetch(`static/${props.file}`)
    .then((response) => {
      return response.json()
    }).then((json) => {
      props.onPoll(props.id, json[props.prop])
    })
}

export class Value extends Component {

  componentDidMount () {
    if (this.props.file) {
      fetchFile(this.props)
      // switch to setTimeout at some point
      setInterval(() => {
        fetchFile(this.props)
      }, this.props.freq * 1000)
    }
  }

  render () {
    const {freq, value} = this.props
    return (
      <div style={{padding: '1em', margin: 0, textAlign: 'center'}}>
        <h2>{this.props.title}</h2>
        <h2>{value[this.props.id] ? value[this.props.id] : ''}</h2>
      </div>
    )
  }
}
