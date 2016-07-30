import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {shallow} from 'enzyme'
import {default as Title} from '../src/title'

chai.use(chaiEnzyme())

describe('<Title />', function() {

  describe('when the title value is passed through', function() {

    it('should display the title text', function() {
      const title = shallow(<Title title='foo' />)

      expect(title).to.contain.text('foo')
    })

  })

})
