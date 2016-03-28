import React, {Component} from 'react'
import {connect} from 'react-redux'
import poll from './actions'

function mapStateToProps (state) {
  return {
    value: state
  }
}

class Dashboard extends Component {

  render () {
    const {dispatch, value} = this.props
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        onPoll: (id, res) => {
          dispatch(poll(id, res))
        }, value})
    })

    return (
      <div style={{margin: 22, color: '#ffffff'}}>
        {children}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Dashboard)
