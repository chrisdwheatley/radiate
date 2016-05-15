import {parse} from 'markdown'
import * as colors from 'material-ui/lib/styles/colors'
import Radium from 'radium'
import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import fetch from './fetch'

const styles = {
  title: {
    color: colors.pink200,
    textAlign: 'center',

  },
  body: {
    padding: '1vw'

  }
}

@Radium
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
      <div>
        <div style={styles.title}>{title}</div>
        <div style={styles.body}>
          {file ? <div dangerouslySetInnerHTML={text}></div> : <div>{inlineText}</div>}
        </div>
      </div>
    )
  }
}
