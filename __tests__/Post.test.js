var Post = require('../models/Post');

describe('Post', () => {
    it('should create a new post', () => {
        const post = new Post();
        expect(post).toBeDefined();
        expect(post).toBeInstanceOf(Post);
        expect(post).toHaveProperty('id');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('post_text');
        expect(post).toHaveProperty('user_id');
    });
});
