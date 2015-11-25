import React, {Component} from 'react'
import {Cell as FlexrCell} from 'react-flexr'
import {SIZES} from './sizes'
import {LastUpdated} from './last-updated'

export class Cell extends Component {

  render () {
    const {children, width} = this.props

    const kids = React.Children.map(children, (child) => {
      return React.cloneElement(child, {...this.props})
    })

    return (
      <FlexrCell
        palm={SIZES[width].palm}
        lap={SIZES[width].lap}
        desk={SIZES[width].desk}
        style={{padding: '0', marginBottom: 22, transition: 'all .5s ease-in-out'}}>
          <div
            style={{background: '#83A1E4', height: '100%', margin: '0 11px', boxShadow: '0 9px 20px rgba(0, 0, 0, 0.3)'}}>
            {kids}
            {this.props['last-updated'] ? <LastUpdated /> : null}
          </div>
      </FlexrCell>
    )
  }
}
