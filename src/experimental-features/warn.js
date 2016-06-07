import * as colors from 'material-ui/lib/styles/colors'
import Radium from 'radium'
import React, {PropTypes} from 'react'
import {UAParser} from 'ua-parser-js'
import {default as Enable} from './enable'

const styles = {
  cell: {
    padding: '1vw',
    margin: 10,
    background: colors.indigo500,
    boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.24)',
    boxSizing: 'border-box',
    borderRadius: 2,
    color: '#ffffff',
    fontFamily: 'Roboto, sans-serif',
    fontSize: 22
  },
  copy: {
    margin: 20
  },
  link: {
    color: colors.white
  }
}

const userAgent = new UAParser()

const browser = userAgent.getBrowser().name
const os = userAgent.getOS().name

const Warn = () => {
  return (
    <div>
      <div style={styles.cell}>
        <div style={styles.copy}>
          Radiate relies on <a style={styles.link} href="https://www.w3.org/TR/css-grid-1/">CSS Grid Layout</a>, which is an experimental feature available in some browsers.
        </div>

        <div style={styles.copy}>
          <Enable browser={browser} os={os} />
        </div>

        <div style={styles.copy}>
          For further details on browser support take a look at <a style={styles.link} href="http://caniuse.com/#feat=css-grid">Can I Use</a>.
        </div>
      </div>
    </div>
  )
}

export default Radium(Warn)
