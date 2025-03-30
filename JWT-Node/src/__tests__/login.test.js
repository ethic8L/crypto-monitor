import request from 'supertest';
import  {expect, describe, it}  from '@jest/globals';
import app from '../app.js'; 

describe('Login API', () => {
  it('should return 200 and a token for valid credentials', async () => {
    const res = await request(app).post('/login').send({
      email: 'test@example.com',
      password: 'password123',
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should return 401 for invalid credentials', async () => {
    const res = await request(app).post('/login').send({
      email: 'wrong@example.com',
      password: 'wrongpassword',
    });

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty('error', 'Invalid credentials');
  });
});
