import * as colors from 'material-ui/styles/colors'
import Radium from 'radium'
import React from 'react'
import {UAParser} from 'ua-parser-js'
import {default as Enable} from './enable'
import {default as Title} from '../title'

const styles = {
  cell: {
    padding: '1vw',
    margin: 5,
    boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.24)',
    boxSizing: 'border-box',
    borderRadius: 2,
    color: colors.fullWhite,
    fontFamily: 'Roboto, sans-serif',
    fontSize: 28,
    background: `linear-gradient(22.5deg, rgba(103, 58, 183, .75), ${colors.deepPurple500})`,
    fontWeight: 700,
    lineHeight: 1.2
  },
  copy: {
    margin: 20
  },
  link: {
    color: colors.fullWhite
  }
}

const userAgent = new UAParser()

const browser = userAgent.getBrowser().name
const os = userAgent.getOS().name

const Warn = () => {
  return (
    <div>
      <div style={styles.cell}>
        <Title title='Radiate' />
        <div style={styles.copy}>
          Radiate is a responsive dashboard written in React - built for all screen sizes
        </div>
      </div>
      <div style={styles.cell}>
        <Title title='Enabling CSS Grid Layout' />
        <div style={styles.copy}>
          Radiate relies on <a style={styles.link} href='https://www.w3.org/TR/css-grid-1/'>CSS Grid Layout</a>, which is an experimental feature available in some browsers.
        </div>

        <div style={styles.copy}>
          <Enable browser={browser} os={os} />
        </div>

        <div style={styles.copy}>
          For further details on browser support take a look at <a style={styles.link} href='http://caniuse.com/#feat=css-grid'>Can I Use</a>.
        </div>
      </div>
      <div style={styles.cell}>
        <Title title='Links' />
        <div style={styles.copy}>
          <a style={styles.link} href='https://github.com/chrisdwheatley/radiate'>GitHub Repository</a>
        </div>
        <div style={styles.copy}>
          <a style={styles.link} href='https://github.com/chrisdwheatley/radiate/issues'>Raise an issues</a>
        </div>
      </div>
    </div>
  )
}

export default Radium(Warn)
