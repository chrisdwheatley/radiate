import React, {Component} from 'react'
import {Cell as FlexrCell} from 'react-flexr'

export class Cell extends Component {
  render () {
    const widthsMap = {
      s: {
        palm: '3/6',
        lap: '2/6',
        desk: '2/6'
      },
      m: {
        palm: '6/6',
        lap: '4/6',
        desk: '3/6'
      },
      l: {
        palm: '6/6',
        lap: '6/6',
        desk: '4/6'
      }
    }

    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {...this.props})
    })

    return (
      <FlexrCell
        palm={widthsMap[this.props.width].palm}
        lap={widthsMap[this.props.width].lap}
        desk={widthsMap[this.props.width].desk}
        style={{padding: '0', paddingBottom: '22px', transition: 'all .5s ease-in-out'}}>
          <div
            style={{background: 'lightgrey', margin: '0 11px', height: '100%'}}>
            {children}
          </div>
      </FlexrCell>
    )
  }
}
