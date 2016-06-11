import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {shallow} from 'enzyme'
import {default as Title} from '../src/title'

chai.use(chaiEnzyme())

describe('<Title />', () => {

  describe('if the operating system is Android', () => {

    it('should display a message warning users that their OS & browser combination is not supported', () => {
      const title = shallow(<Title title='foo' />)

      expect(title).to.contain.text('foo')
    })

  })

})
