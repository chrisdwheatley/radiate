const request = require('supertest')

describe('the server', () => {
  let server

  beforeEach(() => {
    delete require.cache[require.resolve('../../src/lib/server')]
    server = require('../../src/lib/server')
  })

  afterEach((done) => {
    server.close(done)
  })

  describe('when receiving a GET request to the root \'/\'', () => {

    it('should respond with a 200 response code', () => {
      request(server).get('/').expect(200)
    })

  })

  describe('when receiving a POST request to\'/data/:filename\'', () => {

    it('should repond with a success message if the data was stored successfully', () => {
      const data = {
        foo: 'bar'
      }
      const expectedResponse = {
        success: 'Data sent successfully.'
      }

      request(server).post('/data/foo').send(data).expect(200).expect(expectedResponse)
    })

  })

  describe('when receiving a GET request to any other path', () => {

    it('should respond with a 404 response code', () => {
      request(server).get('/foo/bar').expect(404)
    })

  })

})
