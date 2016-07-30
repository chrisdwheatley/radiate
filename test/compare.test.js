import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {render} from 'enzyme'
import {default as Compare} from '../src/compare'

chai.use(chaiEnzyme())

describe('<Compare />', function() {

  describe('when a value is passed through to be compared for the first time', function() {

    it('should return a dash to denote that the value is not lower or higher', function() {
      const compare = render(<Compare value={1} />)

      expect(compare).to.contain.text('-')
    })

  })

  describe('when a larger value is passed through to be compared against a previous value', function() {

    it('should display an arrow upwards to denote that the value is higer', function() {
      const compare = render(<Compare value={3} />)

      expect(compare).to.contain.text('arrow_upward')
    })

  })

  describe('when a smaller value is passed through to be compared against a previous value', function() {

    it('should display an arrow downwards to denote that the value is lower', function() {
      const compare = render(<Compare value={2} />)

      expect(compare).to.contain.text('arrow_downward')
    })

  })

  describe('when the same value is passed through to be compared against a previous value', function() {

    it('should display a dash to denote that the value hasn\'t changed', function() {
      const compare = render(<Compare value={2} />)

      expect(compare).to.contain.text('-')
    })

  })

})
