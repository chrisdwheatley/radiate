import React, {Component} from 'react'
import {Responsive as ResponsiveGrid} from 'react-grid-layout'

export class Grid extends Component {
  render() {
    return (
      <ResponsiveGrid
        cols={{lg: 5, md: 4, sm: 3, xs: 2, xxs: 1}}>
        <div key={1} _grid={{w: 1, h: 1, x: 0, y: 0}}><span className="text">1</span></div>
        <div key={2} _grid={{w: 1, h: 1, x: 1, y: 0}}><span className="text">2</span></div>
        <div key={3} _grid={{w: 1, h: 1, x: 2, y: 0}}><span className="text">3</span></div>
        <div key={4} _grid={{w: 1, h: 1, x: 3, y: 0}}><span className="text">4</span></div>
        <div key={5} _grid={{w: 1, h: 1, x: 4, y: 0}}><span className="text">5</span></div>
      </ResponsiveGrid>
    );
  }
};
