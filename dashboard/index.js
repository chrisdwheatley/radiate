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
              A responsive dashboard written in React - built for all screen sizes
            </Text>
          </Cell>
          <Cell width='s'>
            <Value title='GitHub Stars:' api='https://api.github.com/repos/swirlycheetah/radiate' prop='stargazers_count' freq={300} last-updated/>
          </Cell>
        </Row>
        <Row>
          <Cell width='s' last-updated>
            <Value title='Share Price:' file='shareprice.json' prop='price' freq={10} prefix='$' compare />
          </Cell>
          <Cell width='m'>
            <Value title='Today&#8217;s Special:' file='weeklymenu.json' prop={new Date().getDay()} freq={43200} />
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
