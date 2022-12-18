const request = require('supertest');
const app = require('../app');

describe('GET /api/users', () => {

    describe("Initializations", () => {
        it('should initialize the server', () => {
            expect(app).toBeDefined();
        });
    });
    it('should return 200 OK', () => {
        return request(app)
            .get('/api/users')
            .expect(200);
    });
    it('should return an array of users', () => {
        return request(app)
            .get('/api/users')
            .then(response => {
                expect(response.body).toBeDefined();
                expect(response.body).toBeInstanceOf(Array);
            });
    }
    );
    // Get a single user
    it('should return a single user', () => {
        return request(app)
            .get('/api/users/1')
            .then(response => {
                expect(response.body).toBeDefined();
                expect(response.body).toHaveProperty('id');
                expect(response.body).toHaveProperty('username');
                expect(response.body).toHaveProperty('email');
            });
    });

    // Create a new user
    it('should create a new user', () => {
        let random = Math.floor(Math.random()*100);
        return request(app)
            .post('/api/users')
            .send({
                username: 'testuser' + random,
                email: 'testuser' + random +  '@test.com',
                password: 'password12345'
            })
            .then(response => {
                expect(response.body).toBeDefined();
                expect(response.body).toHaveProperty('id');
                expect(response.body).toHaveProperty('username');
                expect(response.body).toHaveProperty('email');
            }   
            );
        });

    // Login a user
    it('should login a user', () => {
        return request(app)
            .post('/api/users/login')
            .send({
                email: 'test@test.com',
                password: 'password12345'
            })
            .then(response => {
                expect(response.body).toBeDefined();
                expect(response.body).toHaveProperty('message');
            }
            );
        });

    // Logout a user
    it('should logout a user', () => {
        return request(app)
            .post('/api/users/logout')
            .then(response => {
                expect(response.body).toBeDefined();
                expect(response.body).toHaveProperty('message');
            }
            );
        }
    );

    // Update a user
    it('should update a user', () => {
        let random = Math.floor(Math.random()*100);
        return request(app)
            .put('/api/users/1')
            .send({
                username: 'testuser'+random,
                email: 'testuser'+random+'@test.com',
                password: 'password12345'
            })
            .then(response => {
                console.log("response",response.body)

                expect(response.body).toBeDefined();
                expect(response.body).toHaveProperty('id');
                expect(response.body).toHaveProperty('username');
                expect(response.body).toHaveProperty('email');
                expect(response.body).toHaveProperty('password');
            }
            );
        }
    );

    // Delete a user
    it('should delete a user', () => {
        return request(app)
            .delete('/api/users/1')
            .then(response => {
                expect(response.body).toBeDefined();
                expect(response.body).toHaveProperty('message');
            }
            );
        }
    );

    // Get all posts

});