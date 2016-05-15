import React, {Component} from 'react'
import {Grid as GridLayoutGrid} from 'glare'

export class Grid extends Component {
  componentDidMount() {
    const {onResize} = this.props

    const mediaQuery = window.matchMedia('(max-width: 600px)')

    if (mediaQuery.matches) {
      onResize('palm')
    } else {
      onResize('desk')
    }

    mediaQuery.addListener((mq) => {
      if (mq.matches) {
        onResize('palm')
      } else {
        onResize('desk')
      }
    })
  }

  render () {
    const {layout, onPoll, value} = this.props

    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        onPoll,
        value
      })
    })

    const rows = layout[value.width || 'palm'].length
    const rowHeight = 100 / rows

    return (
      <GridLayoutGrid
        layout={layout[value.width || 'palm']}
        style={{
          gridTemplateRows: `${Math.floor(rowHeight) - .1}vh `.repeat(rows)
        }}>
        {children}
      </GridLayoutGrid>
    )
  }
}
