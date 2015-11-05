import React, {Component} from 'react'
import {Dashboard, Graph, Row, Cell, Value} from '../src'
import {optimizedResize, findBreakpoints} from 'react-flexr'

export default class extends Component {
  render () {
    return (
      <Dashboard>
        <Row>
          <Cell width='m'>
            <Value title='Placeholder:' event='rng' freq='2s' />
          </Cell>
          <Cell width='l'>
            <Value title='GitHub is:' event='gh-status-check' freq='15m' />
          </Cell>
        </Row>
        <Row>
          <Cell width='m'>
            <Value title='Placeholder:' event='rng' freq='2s' />
          </Cell>
          <Cell width='s'>
            <Value title='Placeholder:' event='rng' freq='2s' />
          </Cell>
          <Cell width='s'>
            <Value title='Placeholder:' event='rng' freq='2s' />
          </Cell>
        </Row>
      </Dashboard>
    )
  }

  constructor (props) {
    super(props)
    optimizedResize.init(() => {
      if (findBreakpoints()) {
        this.forceUpdate()
      }
    })
  }
}
