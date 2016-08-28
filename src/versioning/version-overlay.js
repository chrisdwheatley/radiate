import React from 'react'

const styles = {
  overlay: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: '1em',
    display: 'none'
  }
}

const VersionOverlay = ({currentVersion}) => <div style={styles.overlay}>{currentVersion}</div>

/**
 * this is where we'll be able to let people know their dashboard is out of date
 * and they need to update to get the latest & greatest features
 *
 * currently we only grab the current version which is hard coded
 * in `./src/dashboard.js`, eventually we'll need to also fetch the latest
 * version from
 * https://raw.githubusercontent.com/chrisdwheatley/radiate/master/package.json
 * and compare the two
 *
 * if the current version is older than the one in master then we can pop up
 * a dialog box (http://www.material-ui.com/#/components/dialog) warning the
 * their dashboard is out of date and the new features available if they
 * update (get this from changelog/tag notes)
 *
 * the modal should disappear after n seconds for those who may have radiate
 * on a dashboard they don't have easy access to
 *
 * it should link to the latest version and link to instuctions on how to
 * update
 */
VersionOverlay.propTypes = {
  currentVersion: React.PropTypes.string.isRequired
}

export default VersionOverlay
