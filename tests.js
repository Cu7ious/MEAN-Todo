var request = require('supertest')
var app = require('./app')

describe('Requests to the root path', function () {
  it('Returns a 200 status code', function (done) {
    request(app)
      .get('/')
      .expect(200, done)
  })

  it('Returns HTML format', function (done) {
    request(app)
      .get('/')
      .expect('Content-Type', /html/, done)
  })
})

describe('Requests to the todos API', function () {
  it('Returns a 200 status code', function (done) {
    request(app)
      .get('/api/todos')
      .expect(200, done)
  })

  it('Returns JSON format', function (done) {
    request(app)
      .get('/api/todos')
      .expect('Content-Type', /json/, done)
  })
})
