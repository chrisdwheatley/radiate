import Radium from 'radium'
import React, {Component} from 'react'
import {default as Compare} from './compare'
import {default as LastUpdated} from './last-updated'
import fetch from './fetch'
import {default as Title} from './title'

const styles = {
  wrapper: {
    textAlign: 'center'
  },
  body: {
    padding: '1vw',
    fontWeight: 700
  }
}

@Radium
export class Value extends Component {
  componentDidMount () {
    const {api, id, file, frequency, onPoll, prop} = this.props

    if (file || api) {
      fetch(file, api).then(res => {
        onPoll(id, res[prop])
      })
      if (frequency) {
        // switch to setTimeout at some point
        setInterval(() => {
          fetch(file, api).then(res => {
            onPoll(id, res[prop])
          })
        }, frequency * 1000)
      }
    }

  }

  render () {
    const {compare, frequency, id, prefix, title, value} = this.props
    const lastUpdated = this.props['last-updated']

    const val = value[id] ? value[id].res : 'fetching...'
    const time = value[id] ? value[id].time : Date.now() / 1000

    return (
      <div style={styles.wrapper}>
        <Title title={title} />
        <div style={styles.body}>
          {prefix}
          {val}
        </div>
        {compare ? <Compare value={val} /> : null}
        {lastUpdated? <LastUpdated time={time} />: null}
      </div>
    )
  }
}
