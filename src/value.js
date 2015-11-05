import React, {Component} from 'react'
import 'whatwg-fetch'

export class Value extends Component {
  constructor(props) {
    super(props)
    // fetch(this.props.source).then(res => {
    //   return res.json()
    // }).then(data => {
    //   console.log('parsed data', data[this.props.property])
    // })
  }

  render () {
    return (
      <div>
        <h2 style={{padding: '1em', margin: 0, textAlign: 'center'}}>{this.props.title}</h2>
      </div>
    )
  }
}
