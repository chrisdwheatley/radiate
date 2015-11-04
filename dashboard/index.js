import React, {Component} from 'react'
import {Dashboard, Graph, Row, Item, Value} from '../src'
import {optimizedResize, findBreakpoints} from 'react-flexr'

export default class extends Component {
  render () {
    return (
      <Dashboard>
        <Row height='m'>
          <Item width='s'>
            <Graph data=''/>
          </Item>
          <Item width='l' palm='hidden'>
            <Value freq='1m' name='Branch' />
          </Item>
        </Row>
        <Row height='s'>
          <Item width='s'>
            <Graph />
          </Item>
          <Item width='s'>
            <Graph />
          </Item>
          <Item width='s'>
            <Graph />
          </Item>
        </Row>
        <Row height='l'>
          <Item width='m'>
            <Graph />
          </Item>
          <Item width='m'>
            <Graph />
          </Item>
        </Row>
      </Dashboard>
    )
  }

  constructor() {
    super()
    optimizedResize.init(() => {
      if (findBreakpoints()) {
        this.forceUpdate()
      }
    })
  }
}
