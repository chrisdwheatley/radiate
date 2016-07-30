import chai, {expect} from 'chai'
import {poll, resize} from '../src/actions'

describe('poll action', function() {

  describe('when an id and response is passed into poll()', function() {

    it('should return an object with the expected values', function() {
      const pollCall = poll(99, {data: 'foo'})

      const pollResponse = {
        type: 'POLL',
        id: 99,
        res: {
          data: 'foo'
        }
      }

      expect(pollCall).to.deep.equal(pollResponse)
    })

  })

})

describe('resize action', function() {

  describe('when a width is passed into resize()', function() {

    it('should return an object with the expected values', function() {
      const resizeCall = resize('palm')

      const resizeResponse = {
        type: 'RESIZE',
        width: 'palm'
      }

      expect(resizeCall).to.deep.equal(resizeResponse)
    })

  })

})
