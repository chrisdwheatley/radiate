import {colorConfig} from '../dashboard/colors'
import React, {Component} from 'react'
import {Cell as GridLayoutCell} from 'glare'
import uniqueId from 'lodash.uniqueid'

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

export class Cell extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: uniqueId('cell_'),
      automaticColor: colorConfig[colorIndex]
    }

    colorIndex++

    if (colorIndex === colorConfig.length) {
      colorIndex = 0
    }
  }

  render () {
    const {children, color, name, onPoll, value} = this.props

    const chosenColor = color ? colorConfig.find(item => item.name === color) : this.state.automaticColor

    const background = {
      background: `linear-gradient(22.5deg, ${chosenColor.light} , ${chosenColor.dark})`
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
        style={Object.assign(styles.cell, background)}>
          {childComponents}
      </GridLayoutCell>
    )
  }
}
