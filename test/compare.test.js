import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {shallow, render} from 'enzyme'
import {default as Compare} from '../src/compare'

chai.use(chaiEnzyme())

describe('<Compare />', () => {

  describe('when a value is passed through to be compared for the first time', () => {

    it('should return a dash to denote that the value is not lower or higher', () => {
      const compare = shallow(<Compare value={1} />)

      expect(compare).to.contain.text('-')
    })

  })

  describe('when a larger value is passed through to be compared against a previous value', () => {

    it('should display an arrow upwards to denote that the value is higer', () => {
      const compare = render(<Compare value={3} />)

      expect(compare).to.contain.text('arrow_upward')
    })

  })

  describe('when a smaller value is passed through to be compared against a previous value', () => {

    it('should display an arrow downwards to denote that the value is lower', () => {
      const compare = render(<Compare value={2} />)

      expect(compare).to.contain.text('arrow_downward')
    })

  })

  describe('when the same value is passed through to be compared against a previous value', () => {

    it('should display a dash to denote that the value hasn\'t changed', () => {
      const compare = render(<Compare value={2} />)

      expect(compare).to.contain.text('-')
    })

  })

})
