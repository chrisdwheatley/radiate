import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {shallow} from 'enzyme'
import {default as Enable} from '../../src/experimental-features/enable'

chai.use(chaiEnzyme())

describe('<Enable />', () => {

  describe('if the operating system is Android', () => {

    it('should display a message warning users that their OS & browser combination is not supported', () => {
      const enable = shallow(<Enable browser={'foo'} os={'Android'} />)

      expect(enable).to.contain.text(
        'It doesn\'t look like your current browser (foo) and OS (Android) combination supports CSS Grid Layout.'
      )
    })

  })

  describe('if the operating system is iOS', () => {

    it('should display a message warning users that their OS & browser combination is not supported', () => {
      const enable = shallow(<Enable browser={'bar'} os={'iOS'} />)

      expect(enable).to.contain.text(
        'It doesn\'t look like your current browser (bar) and OS (iOS) combination supports CSS Grid Layout.'
      )
    })

  })

  describe('if the operating system is not Android or iOS', () => {

    describe('if the browser is Chrome', () => {

      it('should display the information to enable CSS Grid Layout on Chrome', () => {

        const enable = shallow(<Enable browser={'Chrome'} os={'foo'} />)

        expect(enable).to.contain.text(
          'chrome://flags/#enable-experimental-web-platform-features'
        )

      })

    })

    describe('if the browser is Firefox', () => {

      it('should display the information to enable CSS Grid Layout on Firefox', () => {

        const enable = shallow(<Enable browser={'Firefox'} os={'bar'} />)

        expect(enable).to.contain.text(
          'layout.css.grid.enabled'
        )

      })

    })

  })

  // describe('when neither column, name or row are passed through as props', () => {
  //
  //   it('should render a cell component with no styles set', () => {
  //     const cell = shallow(<Cell />)
  //
  //     expect(cell).to.not.have.style('grid-area')
  //   })
  //
  // })
  //
  // describe('when name is passed through as a prop', () => {
  //
  //   it('should render a cell component with grid-area set as name', () => {
  //     const cell = shallow(<Cell name='foo' />)
  //
  //     expect(cell).to.have.style('grid-area', 'foo')
  //   })
  //
  // })
  //
  // describe('when column and row are passed through as props', () => {
  //
  //   it('should render a cell component with grid-area set based on the columns and rows defined', () => {
  //     const row = [
  //       1,
  //       2
  //     ]
  //     const column = [
  //       2,
  //       4
  //     ]
  //     const cell = shallow(<Cell row={row} column={column} />)
  //
  //     expect(cell).to.have.style('grid-area', '1 / 2 / 2 / 4')
  //   })
  //
  // })
  //
  // describe('when column, row and name are passed through as props', () => {
  //
  //   it('should render a cell component with grid-area set based on the columns and rows defined', () => {
  //     const row = [
  //       1,
  //       2
  //     ]
  //     const column = [
  //       2,
  //       4
  //     ]
  //     const cell = shallow(<Cell row={row} column={column} name='bar' />)
  //
  //     expect(cell).to.have.style('grid-area', '1 / 2 / 2 / 4')
  //   })
  //
  // })

})
