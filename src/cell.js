import * as colors from 'material-ui/lib/styles/colors'
import {Card, CardTitle} from 'material-ui/lib'
import Radium from 'radium'
import React, {Component} from 'react'
import {Cell as FlexrCell} from 'react-flexr'
import uniqueId from 'lodash.uniqueid'
import {SIZES} from './sizes'

const styles = {
  cell: {
    padding: 0,
    marginBottom: 22,
    transition: 'width .5s ease-in-out'
  },
  wrapper: {
    margin: '0 11px'
  },
  card: {
    height: '29vh',
    background: colors.indigo500,
    position: 'relative',
    padding: '1vw'
  }
}

@Radium
export class Cell extends Component {
  componentWillMount () {
    this.setState({
      id: uniqueId()
    })
  }

  render () {
    const {children, onPoll, value, width} = this.props
    const childComponents = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        children,
        id: this.state.id,
        onPoll,
        value
      })
    })

    return (
      <FlexrCell
        palm={SIZES[width].palm}
        lap={SIZES[width].lap}
        desk={SIZES[width].desk}
        style={styles.cell}>
          <div
            style={styles.wrapper}>
            <Card style={styles.card}>
              {childComponents}
            </Card>
          </div>
      </FlexrCell>
    )
  }
}
