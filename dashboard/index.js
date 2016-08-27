import React, {Component} from 'react'
import {layout} from './layout'
import {Cell, Dashboard, Grid, Text, Value} from '../src'

export default class extends Component {
  render () {
    return (
      <Dashboard>
        <Grid layout={layout}>
          <Cell name='title'>
            <Text title='Radiate'>
              Radiate is a responsive dashboard written in React - built for all screen sizes
            </Text>
          </Cell>
          <Cell name='remote-data'>
            <Value title='Data can be fetched, compared & updated from eternal sources, for example Radiate has the following number of GitHub stars' api='https://api.github.com/repos/chrisdwheatley/radiate' prop='stargazers_count' frequency={300} />
          </Cell>
          <Cell name='local-data'>
            <Value title='Data can be fetched from JSON stored locally and updated via POST, for example the current temperature' file='weather.json' prop='temperature' frequency={10} suffix='°F' compare last-updated/>
          </Cell>
          <Cell name='getting-started'>
            <Text title='Here are some useful links to help you get started' file='links.md' />
          </Cell>
          <Cell name='layout'>
            <Text title='Customizable Layout'>
              Radiate uses CSS Grid Layout to handle any layout imaginable, layouts can be set per breakpoint.
            </Text>
          </Cell>
          <Cell name='roadmap'>
            <Text title='The roadmap includes;' file="roadmap.md"/>
          </Cell>
        </Grid>
      </Dashboard>
    )
  }
}
