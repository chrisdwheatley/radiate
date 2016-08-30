import * as colors from 'material-ui/styles/colors'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {poll, resize} from './actions'
import {default as VersionOverlay} from './versioning/version-overlay'

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
    const {children, dark, dispatch, value} = this.props

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
      <div style={Object.assign(styles.dashboard, {background: dark ? '#1f1f1f' : 'white'})}>
        {childComponents}
        <VersionOverlay currentVersion='0.1.0' />
      </div>
    )
  }
}

export default connect(mapStateToProps)(Dashboard)
