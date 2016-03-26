import React, {Component} from 'react'
import {findBreakpoints, optimizedResize} from 'react-flexr'
import {Cell, Dashboard, Graph, Image, Row, Text, Value} from '../src'
import injectTapEventPlugin from 'react-tap-event-plugin'

export default class extends Component {
  render () {
    return (
      <Dashboard>
        <Row>
          <Cell width='m'>
            <Text title='Radiate'>
              A responsive dashboard written in React - built for both small & large screens
            </Text>
          </Cell>
          <Cell width='s' last-updated>
            <Value title='GitHub Stars:' id='1' api='https://api.github.com/repos/swirlycheetah/es6-hot-module-replacement' prop='stargazers_count' freq={300} />
          </Cell>
        </Row>
        <Row>
          <Cell width='s' last-updated>
            <Value title='Share Price:' id='2' file='shareprice.json' prop='price' freq={10} prefix='$' compare />
          </Cell>
          <Cell width='m'>
            <Value title='Today&#8217;s Special:' id='3' file='weeklymenu.json' prop={new Date().getDay()} freq={43200} />
          </Cell>
        </Row>
        <Row>
          <Cell width='l'>
            <Text title='Supports Markdown' file='text.md' />
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
