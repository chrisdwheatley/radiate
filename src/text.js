import {parse} from 'markdown'
import React, {Component} from 'react'
import fetch from './fetch'

export class Text extends Component {

  constructor(props) {
    super(props)

    const {body} = this.props

    this.state = {
      text: {
        __html: body
      }
    }
  }

  componentDidMount () {
    const {file} = this.props

    if (file) {
      fetch(file, null).then(res => {
        this.setState({
          text: {
            __html: parse(res)
          }
        })
      })
    }

  }

  render () {
    const {title} = this.props
    const {text} = this.state

    return (
      <div style={{padding: '1em', margin: 0}}>
        <div style={{textAlign: 'center'}}>
          {title}
        </div>
        <p dangerouslySetInnerHTML={text}></p>
      </div>
    )
  }
}
