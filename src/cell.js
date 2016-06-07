import * as colors from 'material-ui/lib/styles/colors'
import Radium from 'radium'
import React, {Component} from 'react'
import {Cell as GridLayoutCell} from 'glare'
import uniqueId from 'lodash.uniqueid'
import {SIZES} from './sizes'

const colorConfig = [
  {
    light: 'rgba(103, 58, 183, .75)',
    main: colors.deepPurple500,
    fg: colors.white
  }, {
    light: 'rgba(76, 175, 80, .75)',
    main: colors.green500,
    fg: colors.white
  }, {
    light: 'rgba(233, 30, 99, .75)',
    main: colors.pink500,
    fg: colors.white
  }, {
    light: 'rgba(33, 150, 243, .75)',
    main: colors.blue500,
    fg: colors.white
  }, {
    light: 'rgba(0, 150, 136, .75)',
    main: colors.teal500,
    fg: colors.white
  }
]

const styles = {
  cell: {
    padding: '1vw',
    margin: 5,
    boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.24)',
    boxSizing: 'border-box',
    borderRadius: 2
  }
}

@Radium
export class Cell extends Component {
  componentWillMount () {
    this.setState({
      id: uniqueId('value_'),
      colorItem: Math.floor(Math.random() * colorConfig.length)
    })
  }

  render () {
    const {children, name, onPoll, value, width} = this.props

    const colors = {
      color: 'white',
      opacity: .87,
      background: `linear-gradient(22.5deg, ${colorConfig[this.state.colorItem].light} , ${colorConfig[this.state.colorItem].main})`
    }

    const childComponents = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        children,
        id: this.state.id,
        onPoll,
        value
      })
    })

    return (
      <GridLayoutCell
        name={name}
        style={Object.assign(styles.cell, colors)}>
          {childComponents}
      </GridLayoutCell>
    )
  }
}
