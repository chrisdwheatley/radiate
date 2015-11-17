import React, {Component} from 'react'
import {connect} from 'react-redux'
import poll from './actions'

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {dispatch} = this.props
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        onPoll: (id, res) => {
          dispatch(poll(id, res))
        }, value: this.props.value})
    })

    return (
      <div style={{margin: 22}}>
        {children}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    value: state
  }
}

export default connect(mapStateToProps)(Dashboard)
