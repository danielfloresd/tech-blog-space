const Comment = require('../models/Comment');

describe('Comment', () => {
  it('should create a new comment', () => {
    const comment = new Comment();
    expect(comment).toBeDefined();
    expect(comment).toBeInstanceOf(Comment);
    expect(comment).toHaveProperty('id');
    expect(comment).toHaveProperty('contents');
    expect(comment).toHaveProperty('user_id');
    expect(comment).toHaveProperty('post_id');
  });
});
