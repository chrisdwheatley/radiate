import React, {Component} from 'react'
import {Grid as GridLayoutGrid} from 'glare'

export class Grid extends Component {
  componentDidMount() {
    const {onResize} = this.props

    const mediaQueries = [
      window.matchMedia('(max-width: 600px)'),
      window.matchMedia('(min-width: 601px) and (max-width: 959px)'),
      window.matchMedia('(min-width: 960px)')
    ]

    function mediaqueryresponse() {
      if (mediaQueries[0].matches) {
        onResize('palm')
      } else if (mediaQueries[1].matches) {
        onResize('lap')
      } else if (mediaQueries[2].matches) {
        onResize('desk')
      }
    }

    for (var i = 0; i < mediaQueries.length; i++){
      mediaqueryresponse()
      mediaQueries[i].addListener(mediaqueryresponse)
    }
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
