const { expect } = require('chai');
const { agent } = require('supertest');
const app = require('../app');

const request = agent;

describe('GraphQL API server test', () => {
  it('Get request to /v1/test returns a text response', async () => {
    const res = await request(app).get('/v1/test');
    const objectResponse = res.body;
    expect(objectResponse.message).to.be.a('string');
    expect(objectResponse.message).to.equal('GraphQL Server API works');
  });
});

describe('GraphQL API server', () => {
  it('Get request to /playground returns graphql playground', async () => {
    const res = await request(app).get('/playground');
    expect(res.status).to.equal(200);
  });
});