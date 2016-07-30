import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {shallow} from 'enzyme'
import {default as VerionOverlay} from '../../src/versioning/version-overlay'

chai.use(chaiEnzyme())

describe('<VerionOverlay />', function() {

  describe('when the current version number is passed through', function() {

    it('should display the current version', function() {
      const title = shallow(<VerionOverlay currentVersion='0.99.999' />)

      expect(title).to.contain.text('0.99.999')
    })

  })

})
