import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {render} from 'enzyme'
import {Text} from '../src/text'

chai.use(chaiEnzyme())

describe('<Text />', function() {

  describe('when there is text inlined within the text component', function() {

    it('should display the text', function() {
      const text = render(<Text>foo</Text>)

      expect(text).to.contain.text('foo')
    })

  })

})
