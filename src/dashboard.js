import Radium from 'radium'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import poll from './actions'

const styles = {
  dashboard: {
    margin: 22,
    color: '#ffffff'
  }
}

function mapStateToProps (state) {
  return {
    value: state
  }
}

@Radium
class Dashboard extends Component {

  render () {
    const {children, dispatch, value} = this.props
    const childComponents = React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        onPoll: (id, res) => {
          dispatch(poll(id, res))
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

export default connect(mapStateToProps)(Dashboard)
