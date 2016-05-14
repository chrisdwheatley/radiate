import React, {Component} from 'react'
import {layout} from './layout'
import {Cell, Dashboard, Graph, Image, Grid, Text, Value} from '../src'

export default class extends Component {
  render () {
    return (
      <Dashboard>
        <Grid layout={layout}>
          <Cell name='title'>
            <Text title='Radiate'>
              A responsive dashboard written in React - built for all screen sizes
            </Text>
          </Cell>
          <Cell name='menu'>
            <Value title='Today&#8217;s Special:' file='weeklymenu.json' prop={new Date().getDay()} freq={43200} />
          </Cell>
          <Cell name='shares'>
            <Value title='Share Price:' file='shareprice.json' prop='price' freq={10} prefix='$' compare last-updated/>
          </Cell>
          <Cell name='stars'>
            <Value title='GitHub Stars:' api='https://api.github.com/repos/swirlycheetah/radiate' prop='stargazers_count' freq={300}/>
          </Cell>
          <Cell name='md'>
            <Text title='Supports Markdown' file='text.md' />
          </Cell>
        </Grid>
      </Dashboard>
    )
  }
}
