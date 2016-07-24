import chai, {expect} from 'chai'
import sinon from 'sinon'
import reducer from '../src/reducers'

sinon.useFakeTimers()

describe('top level reducer', () => {

  describe('when no state is set', () => {

    describe('when the action type is POLL', () => {

      it('should return the state object with the POLL action keyed by action id', () => {
        const action = {
          type: 'POLL',
          id: 99,
          res: {
            data: 'foo'
          }
        }

        const reduction = reducer({}, action)

        const expected = {
          99 : {
            res: {
              data: 'foo'
            },
            time: 0
          }
        }

        expect(reduction).to.deep.equal(expected)
      })

    })

    describe('when the action type is RESIZE', () => {

      it('should return the state object with a width set', () => {
        const action = {
          type: 'RESIZE',
          width: 'lap'
        }

        const reduction = reducer({}, action)

        const expected = {
          width: 'lap'
        }

        expect(reduction).to.deep.equal(expected)
      })

    })

  })

  describe('when there is already state set', () => {

    describe('when the action type is POLL', () => {

      describe('when an action with a new action id is passed in', () => {

        it('should return the state object with a new poll item', () => {
          const previouslySet = {
            1 : {
              res: {
                data: 'bar'
              },
              time: 0
            },
            width: 'lap'
          }

          const action = {
            type: 'POLL',
            id: 99,
            res: {
              data: 'foo'
            }
          }

          const reduction = reducer(previouslySet, action)

          const expected = {
            1 : {
              res: {
                data: 'bar'
              },
              time: 0
            },
            99 : {
              res: {
                data: 'foo'
              },
              time: 0
            },
            width: 'lap'
          }

          expect(reduction).to.deep.equal(expected)
        })

      })

      describe('when an action with the same action id is passed in', () => {

        it('should return the state object with the state item amended', () => {
          const previouslySet = {
            1 : {
              res: {
                data: 'bar'
              },
              time: 0
            }
          }

          const action = {
            type: 'POLL',
            id: 1,
            res: {
              data: 'foo'
            }
          }

          const reduction = reducer(previouslySet, action)

          const expected = {
            1 : {
              res: {
                data: 'foo'
              },
              time: 0
            }
          }

          expect(reduction).to.deep.equal(expected)
        })

      })

    })

    describe('when the action type is RESIZE', () => {

      it('should return the state object with width amended if required', () => {
        const previouslySet = {
          1 : {
            res: {
              data: 'bar'
            },
            time: 0
          },
          width: 'lap'
        }

        const action = {
          type: 'RESIZE',
          width: 'palm'
        }

        const reduction = reducer(previouslySet, action)

        const expected = {
          1 : {
            res: {
              data: 'bar'
            },
            time: 0
          },
          width: 'palm'
        }

        expect(reduction).to.deep.equal(expected)
      })

    })

  })

})
