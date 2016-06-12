import * as colors from 'material-ui/lib/styles/colors'
import Radium from 'radium'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {poll, resize} from './actions'

const styles = {
  dashboard: {
    color: colors.fullWhite,
    padding: 5,
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
    const {children, dispatch, value, dark, light} = this.props

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
      <div style={Object.assign(styles.dashboard, {background: dark ? 'black' : 'white'})}>
        {childComponents}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Radium(Dashboard))
