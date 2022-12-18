const {async} = require('seed/lib/seed');
const request = require('supertest');
const app = require('../app');
// const seedUsers = require('../seeds/user-seeds');

// beforeAll( () => {
//     return seedUsers();
// });

describe('GET /api/users', () => {
  describe("Initializations", () => {
    it('should initialize the server', () => { expect(app).toBeDefined(); });
  });
  it('should return 200 OK',
     () => { return request(app).get('/api/users').expect(200); });
  it('should return an array of users', () => {
    return request(app).get('/api/users').then(response => {
      expect(response.body).toBeDefined();
      expect(response.body).toBeInstanceOf(Array);
    });
  });
  // Get a single user
  it('should return a single user', () => {
    return request(app).get('/api/users/1').then(response => {
      expect(response.body).toBeDefined();
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('name');
      expect(response.body).toHaveProperty('email');
    });
  });

  // Create a new user
  it('should create a new user', () => {
    let random = Math.floor(Math.random() * 100);
    return request(app)
        .post('/api/users')
        .send({
          name : 'testuser' + random,
          email : 'testuser' + random + '@test.com',
          password : 'password12345'
        })
        .then(response => {
          expect(response.body).toBeDefined();
          expect(response.body).toHaveProperty('id');
          expect(response.body).toHaveProperty('name');
          expect(response.body).toHaveProperty('email');
        });
  });

  // Login a user
  it('should login a user', () => {
    return request(app)
        .post('/api/users/login')
        .send({email : 'test@test.com', password : 'password12345'})
        .then(response => {
          expect(response.body).toBeDefined();
          expect(response.body).toHaveProperty('message');
        });
  });

  // Logout a user
  it('should logout a user', () => {
    return request(app).post('/api/users/logout').then(response => {
      expect(response.body).toBeDefined();
      expect(response.body).toHaveProperty('message');
    });
  });

  // Update a user
  it('should update a user', () => {
    let random = Math.floor(Math.random() * 100);
    return request(app)
        .put('/api/users/1')
        .send({
          username : 'testuser' + random,
          email : 'testuser' + random + '@test.com',
          password : 'password12345'
        })
        .then(response => {
          console.log("response", response.body)

          expect(response.body).toBeDefined();
          expect(response.body).toHaveProperty('id');
          expect(response.body).toHaveProperty('name');
          expect(response.body).toHaveProperty('email');
          expect(response.body).toHaveProperty('password');
        });
  });

  // Delete a user
  it('should delete a user', () => {
    return request(app).delete('/api/users/1').then(response => {
      expect(response.body).toBeDefined();
      expect(response.body).toHaveProperty('message');
    });
  });

  // Get all posts
  it('should return all posts', () => {
    return request(app).get('/api/posts').then(response => {
      expect(response.body).toBeDefined();
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  // Get a single post
  it('should return a single post', () => {
    return request(app).get('/api/posts/1').then(response => {
      expect(response.body).toBeDefined();
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('title');
      expect(response.body).toHaveProperty('contents');
      expect(response.body).toHaveProperty('user_id');
    });
  });

  // Create a new post
  it('should create a new post', () => {
    return request(app)
        .post('/api/posts')
        .send({
          title : 'Test Post',
          contents : 'This is a test post',
          user_id : 1
        })
        .then(response => {
          expect(response.body).toBeDefined();
          expect(response.body).toHaveProperty('id');
          expect(response.body).toHaveProperty('title');
          expect(response.body).toHaveProperty('contents');
          expect(response.body).toHaveProperty('user_id');
        });
  });

  // Update a post
  it('should update a post', () => {
    return request(app)
        .put('/api/posts/1')
        .send({
          title : 'Test Post',
          contents : 'This is a test post',
          user_id : 1
        })
        .then(response => {
          expect(response.body).toBeDefined();
          expect(response.body).toHaveProperty('id');
          expect(response.body).toHaveProperty('title');
          expect(response.body).toHaveProperty('contents');
          expect(response.body).toHaveProperty('user_id');
        });
  });

  // Delete a post
  it('should delete a post', () => {
    return request(app).delete('/api/posts/1').then(response => {
      expect(response.body).toBeDefined();
      expect(response.body).toHaveProperty('message');
    });
  });

  // Get all comments
  it('should return all comments', () => {
    return request(app).get('/api/comments').then(response => {
      expect(response.body).toBeDefined();
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  // Get a single comment
  it('should return a single comment', () => {
    return request(app).get('/api/comments/1').then(response => {
      expect(response.body).toBeDefined();
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('text');
      expect(response.body).toHaveProperty('user_id');
      expect(response.body).toHaveProperty('post_id');
    });
  });

  // Create a new comment
  it('should create a new comment', () => {
    return request(app)
        .post('/api/comments')
        .send({text : 'Test Comment', user_id : 1, post_id : 1})
        .then(response => {
          expect(response.body).toBeDefined();
          expect(response.body).toHaveProperty('id');
          expect(response.body).toHaveProperty('text');
          expect(response.body).toHaveProperty('user_id');
          expect(response.body).toHaveProperty('post_id');
        });
  });

  // Update a comment
  it('should update a comment', () => {
    return request(app)
        .put('/api/comments/1')
        .send({text : 'Test Comment', user_id : 1, post_id : 1})
        .then(response => {
          expect(response.body).toBeDefined();
          expect(response.body).toHaveProperty('id');
          expect(response.body).toHaveProperty('text');
          expect(response.body).toHaveProperty('user_id');
          expect(response.body).toHaveProperty('post_id');
        });
  });

  // Delete a comment
  it('should delete a comment', () => {
    return request(app).delete('/api/comments/1').then(response => {
      expect(response.body).toBeDefined();
      expect(response.body).toHaveProperty('message');
    });
  });
});