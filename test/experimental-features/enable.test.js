import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {shallow} from 'enzyme'
import {default as Enable} from '../../src/experimental-features/enable'

chai.use(chaiEnzyme())

describe('<Enable />', () => {

  describe('when the operating system is Android', () => {

    it('should display a message warning users that their OS & browser combination is not supported', () => {
      const enable = shallow(<Enable browser={'foo'} os={'Android'} />)

      expect(enable).to.contain.text(
        'It doesn\'t look like your current browser (foo) and OS (Android) combination supports CSS Grid Layout.'
      )
    })

  })

  describe('when the operating system is iOS', () => {

    it('should display a message warning users that their OS & browser combination is not supported', () => {
      const enable = shallow(<Enable browser={'bar'} os={'iOS'} />)

      expect(enable).to.contain.text(
        'It doesn\'t look like your current browser (bar) and OS (iOS) combination supports CSS Grid Layout.'
      )
    })

  })

  describe('when the operating system is not Android or iOS', () => {

    describe('when the browser is Chrome', () => {

      it('should display the information to enable CSS Grid Layout on Chrome', () => {

        const enable = shallow(<Enable browser={'Chrome'} os={'foo'} />)

        expect(enable).to.contain.text(
          'chrome://flags/#enable-experimental-web-platform-features'
        )

      })

    })

    describe('when the browser is Firefox', () => {

      it('should display the information to enable CSS Grid Layout on Firefox', () => {

        const enable = shallow(<Enable browser={'Firefox'} os={'bar'} />)

        expect(enable).to.contain.text(
          'layout.css.grid.enabled'
        )

      })

    })

  })

})
