import {parse} from 'markdown'
import * as colors from 'material-ui/lib/styles/colors'
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
    const {children, file, title} = this.props
    const {text} = this.state
    const inlineText = children.props.children

    return (
      <div style={{padding: '.5em', margin: 0}}>
        <div style={{color: colors.pink200, fontSize: '5vw', textAlign: 'center'}}>{title}</div>
        <div style={{fontSize: '3vw', padding: '1vw'}}>
          {file ? <div dangerouslySetInnerHTML={text}></div> : <div>{inlineText}</div>}
        </div>
      </div>
    )
  }
}
