import {parse} from 'markdown'
import React, {Component} from 'react'
import fetch from './fetch'
import {default as Title} from './title'

const styles = {
  body: {
    padding: '1vw',
    fontWeight: 700,
    lineHeight: 1.2
  }
}

export class Text extends Component {
  constructor(props) {
    super(props)

    const {body, file} = this.props

    this.state = {
      text: {
        __html: body
      }
    }

    if (file) {
      fetch(file, null).then(res => {
        this.state = {
          text: {
            __html: parse(res)
          }
        }
      })
    }
  }

  render () {
    const {children, file, title} = this.props
    const {text} = this.state
    const inlineText = children.props ? children.props.children : children

    return (
      <div>
        <Title title={title} />
        <div style={styles.body}>
          {file ? <div dangerouslySetInnerHTML={text}></div> : <div>{inlineText}</div>}
        </div>
      </div>
    )
  }
}
