import request from 'supertest';
import app from '../../src/app';

describe('get /api', () => {
  it('should return the correct message', async () => {
    expect.assertions(2);

    const response = await request(app).get('/api');
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({ message: 'ok' });
  });
});
