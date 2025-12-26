jest.mock('../server/models/hobby', () => ({
  find: jest.fn().mockResolvedValue([]),
}));

const request = require('supertest');
const server = require('../server/index');

afterAll(() => {
  server.close();
});

describe('Routes: GET /hobbies/all', () => {
  it('should respond as expected', async () => {
    const response = await request(server).get('/hobbies/all');
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
  });
});

// TODO: finish tests and put on aproppiate file
describe('JWT middleware', () => {
  test('Should create a new token if there is no token in local storage', async () => {
  });

  test('Should put token on response.headers.x-token', async () => {
    const response = await request(server).get('/hobbies/all');
    expect(response.headers['x-token']).toBeDefined();
  });

  test('Should create a valid token', async () => {
    // const response = await request(server).get('/hobbies/all');
    // const token = response.headers['x-token'].split('Bearer ')[1]
    // const secret = 'enuncortijograndeelqueestontosemueredehambrSHHH'
    // const verification = jwt.verify(token, secret);
    // expect(verification).toThrow()
  });

  test('Should create a new token if the token is not valid', () => {
  });

  test('Should store the token in local storage', () => {
  });

  test('Should not change the token if it is already present', () => {
  });

  test('Should also put the token in ctx.token', () => {
  });
});
