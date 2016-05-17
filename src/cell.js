import * as colors from 'material-ui/lib/styles/colors'
import Radium from 'radium'
import React, {Component} from 'react'
import {Cell as GridLayoutCell} from 'glare'
import uniqueId from 'lodash.uniqueid'
import {SIZES} from './sizes'

const styles = {
  cell: {
    padding: '1vw',
    marginBottom: 1,
    transition: 'width .5s ease-in-out',
    margin: 1,
    background: colors.indigo500
  }
}

@Radium
export class Cell extends Component {
  componentWillMount () {
    this.setState({
      id: uniqueId('value_')
    })
  }

  render () {
    const {children, name, onPoll, value, width} = this.props

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
        style={styles.cell}>
          {childComponents}
      </GridLayoutCell>
    )
  }
}
