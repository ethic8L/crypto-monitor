import request from 'supertest';
import app from '../app.js';
import  {expect, describe, it}  from '@jest/globals';

describe('Signup API', () => {
  it('should return 201 and create a new user', async () => {
    const res = await request(app).post('/register').send({
      email: 'newuser@example.com',
      password: 'securepassword',
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('message', 'User created successfully');
  });

  it('should return 400 for missing fields', async () => {
    const res = await request(app).post('/register').send({
      email: '',
      password: '',
    });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error', 'Email and password are required');
  });
});
