import * as colors from 'material-ui/lib/styles/colors'
import Radium from 'radium'
import React, {Component} from 'react'
import {Compare} from './compare'
import {LastUpdated} from './last-updated'
import fetch from './fetch'

const styles = {
  wrapper: {
    textAlign: 'center'
  },
  title: {
    color: colors.pink200
  },
  body: {
    fontWeight: 'bold'
  }
}

@Radium
export class Value extends Component {

  componentDidMount () {
    const {api, file, freq, onPoll, prop} = this.props
    const id = this._reactInternalInstance._rootNodeID

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
    const {compare, freq, prefix, title, value} = this.props
    const id = this._reactInternalInstance._rootNodeID

    const val = value[id] ? value[id].res : 'fetching...'
    const time = value[id] ? value[id].time : Date.now() / 1000

    return (
      <div style={styles.wrapper}>
        <div style={styles.title}>{title}</div>
        <div style={styles.body}>
          {prefix}
          {val}
        </div>
        {compare ? <Compare value={val} /> : ''}
        <LastUpdated time={time} />
      </div>
    )
  }
}
