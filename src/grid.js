import React, {Component} from 'react'
import {Grid as GridLayoutGrid} from 'glare'
import {mediaQueries} from './mediaQueries'

export class Grid extends Component {
  componentDidMount() {
    const {onResize} = this.props

    function mediaqueryresponse(i) {
      if (mediaQueries[i].size.matches) {
        onResize(mediaQueries[i].name)
      }
    }

    for (var i = 0; i < mediaQueries.length; i++){
      mediaqueryresponse(i)
      // need to debounce listener
      mediaQueries[i].size.addListener(mediaqueryresponse.bind(null, i))
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
