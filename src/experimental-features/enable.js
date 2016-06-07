import * as colors from 'material-ui/lib/styles/colors'
import Radium from 'Radium'
import React, {PropTypes} from 'react'

const styles = {
  link: {
    color: colors.white,
    fontWeight: 'bold'
  },
  ul: {
    margin: 20
  },
  li: {
    margin: 10
  }
}

const Enable = ({browser, os}) => {
  let instructions =
      <div>
        It doesn&#39;t look like your current browser ({browser}) and OS ({os}) combination supports CSS Grid Layout. Please try Chrome, Firefox or Opera on desktop. If you think that&#39;s incorrect, please raise an <a style={styles.link}  href="https://github.com/swirlycheetah/radiate/issues/new">issue</a> noting which browser & OS you&#39;re using.
      </div>

  if (os !== 'Android' || os !== 'iOS') {

    if (browser === 'Chrome' || browser === 'Opera') {
      instructions =
        <div>
          To enable CSS Grid Layout in {browser} follow these steps;
          <ul style={styles.ul}>
            <li style={styles.li}>Navigate to <span style={styles.link}>chrome://flags/#enable-experimental-web-platform-features</span></li>
            <li style={styles.li}>Click 'Enable'</li>
            <li style={styles.li}>Click 'Relaunch Now' to restart {browser}</li>
          </ul>
        </div>
    }

    if (browser === 'Firefox') {
      instructions =
        <div>
          To enable CSS Grid Layout in {browser} follow these steps;
          <ul>
            <li>Navigate to <span style={styles.link}>about:config</span></li>
            <li>Search for 'layout.css.grid.enabled'</li>
            <li>Toggle the value to true by double clicking the row</li>
          </ul>
        </div>
    }
  }

  return (
    <div>
      {instructions}
    </div>
  )
}

Enable.propTypes = {
  browser: PropTypes.string.isRequired,
  os: PropTypes.string.isRequired
}

export default Radium(Enable)
