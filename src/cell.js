import {colorConfig} from './colors'
import Radium from 'radium'
import React, {Component} from 'react'
import {Cell as GridLayoutCell} from 'glare'
import uniqueId from 'lodash.uniqueid'
import {SIZES} from './sizes'

const styles = {
  cell: {
    padding: '1vw',
    margin: 5,
    boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.24)',
    boxSizing: 'border-box',
    borderRadius: 2,
    color: '#fff'
  }
}

let colorIndex = 0

@Radium
export class Cell extends Component {
  componentWillMount () {
    this.setState({
      id: uniqueId('cell_'),
      color: colorConfig[colorIndex]
    })

    colorIndex++

    if (colorIndex === colorConfig.length) {
      colorIndex = 0
    }
  }

  render () {
    const {children, name, onPoll, value, width} = this.props

    const randomColor = {
      background: `linear-gradient(22.5deg, ${this.state.color.light} , ${this.state.color.dark})`
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
        style={Object.assign(styles.cell, randomColor)}>
          {childComponents}
      </GridLayoutCell>
    )
  }
}
