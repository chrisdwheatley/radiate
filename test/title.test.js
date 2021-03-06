import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {shallow} from 'enzyme'
import {default as Title} from '../src/title'

chai.use(chaiEnzyme())

describe('<Title />', () => {

  describe('when the title value is passed through', () => {

    it('should display the title text', () => {
      const title = shallow(<Title title='foo' />)

      expect(title).to.contain.text('foo')
    })

  })

})
