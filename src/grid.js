import React, {Component} from 'react'
import {Grid as GridLayoutGrid} from 'glare'
import {mediaQueries, setupMqs} from './mediaQueries'

export class Grid extends Component {
  componentDidMount() {
    const {onResize} = this.props

    setupMqs(onResize)
  }

  render () {
    const {layout, onPoll, value} = this.props

    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        onPoll,
        value
      })
    })

    const width = value.width || 'palm'
    const rows = layout[width].length
    const rowHeight = width === 'palm' ? '100% '.repeat(rows) : `${Math.floor(100 / rows) - .1}vh `.repeat(rows)

    return (
      <GridLayoutGrid
        layout={layout[width]}
        style={{
          gridTemplateRows: rowHeight,
          fontSize: mediaQueries[width].fontSize
        }}>
        {children}
      </GridLayoutGrid>
    )
  }
}
