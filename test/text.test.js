import React from 'react'
import chai, {expect} from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {render} from 'enzyme'
import {Text} from '../src/text'

chai.use(chaiEnzyme())

describe('<Text />', () => {

  describe('when there is text inlined within the text component', () => {

    it('should display the text', () => {
      const text = render(<Text>foo</Text>)

      expect(text).to.contain.text('foo')
    })

  })

})
