import request from 'supertest';
import app from '../src/app';

describe('UserController', () => {
  describe('GET /users', () => {
    it('should return all users', async () => {
      const { status, headers, body } = await request(app).get('/api/v1/users');
      expect(status).toBe(200);
      expect(headers['content-type']).toMatch(/application\/json/);
      expect(body).toBeInstanceOf(Array);
      expect(body.length).toBeGreaterThan(0);
    });
  });

  describe('GET /users/:id', () => {
    it('should return the user by ID', async () => {
      const userId = 1;
      const { status, headers, body } = await request(app).get(
        `/api/v1/users/${userId}`
      );
      expect(status).toBe(200);
      expect(headers['content-type']).toMatch(/application\/json/);
      expect(body).toEqual({});
    });
    it('should return 404 when user not found', async () => {
      const userId = 999;
      const { status, headers } = await request(app).get(
        `/api/v1/users/${userId}`
      );
      expect(status).toBe(404);
      expect(headers['content-type']).toMatch(/application\/json/);
    });
  });
});
