import * as colors from 'material-ui/lib/styles/colors'
import React, {Component} from 'react'
import {Compare} from './compare'
import fetch from './fetch'

export class Value extends Component {

  componentDidMount () {
    const {api, id, file, freq, onPoll, prop} = this.props

    if (file || api) {
      fetch(file, api).then(res => {
        onPoll(id, res[prop])
      })
      if (freq) {
        // switch to setTimeout at some point
        setInterval(() => {
          fetch(file, api).then(res => {
            onPoll(id, res[prop])
          })
        }, freq * 1000)
      }
    }

  }

  render () {
    const {compare, freq, id, prefix, title, value} = this.props

    return (
      <div style={{padding: '.5em', margin: 0, textAlign: 'center'}}>
        <div style={{color: colors.pink200}}>{title}</div>
        <div style={{fontWeight: 'bold'}}>
          {prefix}
          {value[id]}
        </div>
        {compare ? <Compare value={value[id]} /> : ''}
      </div>
    )
  }
}
