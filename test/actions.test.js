import chai, {expect} from 'chai'
import {poll, resize} from '../src/actions'

describe('poll action', () => {

  describe('when an id and response is passed into poll()', () => {

    it('should return an object with the expected values', () => {
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

describe('resize action', () => {

  describe('when a width is passed into resize()', () => {

    it('should return an object with the expected values', () => {
      const resizeCall = resize('palm')

      const resizeResponse = {
        type: 'RESIZE',
        width: 'palm'
      }

      expect(resizeCall).to.deep.equal(resizeResponse)
    })

  })

})
