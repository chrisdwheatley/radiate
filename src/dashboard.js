import Radium from 'radium'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {poll, resize} from './actions'

const styles = {
  dashboard: {
    color: '#ffffff',
    fontFamily: 'Roboto, sans-serif'
  }
}

function mapStateToProps (state) {
  return {
    value: state
  }
}

class Dashboard extends Component {

  render () {
    const {children, dispatch, value} = this.props

    const childComponents = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        onPoll: (id, res) => {
          dispatch(poll(id, res))
        },
        onResize: (size) => {
          dispatch(resize(size))
        },
        value
      })
    })

    return (
      <div style={styles.dashboard}>
        {childComponents}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Radium(Dashboard))
