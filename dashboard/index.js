import React, {Component} from 'react'
import {Dashboard, Graph, Row, Cell, Value} from '../src'
import {optimizedResize, findBreakpoints} from 'react-flexr'

export default class extends Component {
  render () {
    return (
      <Dashboard>
        <Row>
          <Cell width='m'>
            <Value id='0' title='Placeholder:' file='example.json' prop='item' freq='10' />
          </Cell>
          <Cell width='m'>
            <Value id='1' title='GitHub is:' freq='15m' />
          </Cell>
        </Row>
        <Row>
          <Cell width='m'>
            <Value id='2' title='Placeholder:' freq='2s' />
          </Cell>
          <Cell width='s'>
            <Value id='3' title='Placeholder:' freq='2s' />
          </Cell>
          <Cell width='s'>
            <Value id='4' title='Placeholder:' freq='2s' />
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
