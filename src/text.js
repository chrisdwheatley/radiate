import {parse} from 'markdown'
import React, {Component} from 'react'
import fetch from './fetch'
import Radium, {Style} from 'radium'
import {default as Title} from './title'

const styles = {
  body: {
    padding: '1vw',
    fontWeight: 700,
    lineHeight: 1.2
  },
  links: {
    a: {
      color: 'white'
    }
  }
}

class Text extends Component {
  constructor (props) {
    super(props)

    const {children, file} = this.props

    if (children.props && children.props.children) {
      this.state = {
        text: {
          __html: children.props.children
        }
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
    const {title} = this.props
    const {text} = this.state

    return (
      <div>
        <Style rules={styles.links} />
        <Title title={title} />
        <div style={styles.body}>
          <div dangerouslySetInnerHTML={text} />
        </div>
      </div>
    )
  }
}

export default Radium(Text)
