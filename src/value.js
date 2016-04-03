import * as colors from 'material-ui/lib/styles/colors'
import React, {Component} from 'react'
import {Compare} from './compare'
import {LastUpdated} from './last-updated'
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

    const val = value[id] ? value[id].res : 'fetching...'
    const time = value[id] ? value[id].time : Date.now() / 1000

    return (
      <div style={{textAlign: 'center'}}>
        <div style={{color: colors.pink200}}>{title}</div>
        <div style={{fontWeight: 'bold'}}>
          {prefix}
          {val}
        </div>
        {compare ? <Compare value={val} /> : ''}
        <LastUpdated time={time} />
      </div>
    )
  }
}
