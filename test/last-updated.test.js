import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {shallow} from 'enzyme'
import sinon from 'sinon'
import {default as LastUpdated} from '../src/last-updated'

chai.use(chaiEnzyme())
sinon.useFakeTimers()

describe('<LastUpdated />', function() {

  describe('when the date and time is passed through', function() {

    it('should display the last updated date and time', function() {
      const lastUpdated = shallow(<LastUpdated time={new Date()} />)

      expect(lastUpdated).to.contain.text('Jan 1st 12:00 am')
    })

  })

})
