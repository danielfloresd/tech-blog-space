const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// User hasMany Post
User.hasMany(Post, { foreignKey: "user_id", onDelete: "cascade", hooks: true });

// Post belongsTo User
Post.belongsTo(User, { foreignKey: "user_id" });

// User hasMany Comment
User.hasMany(Comment, { foreignKey: "user_id", onDelete: "CASCADE" });

// Post hasMany Comment
Post.hasMany(Comment, { foreignKey: "post_id", onDelete: "CASCADE" });

// Comment belongsTo User
Comment.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

// Comment belongsTo Post
Comment.belongsTo(Post, { foreignKey: "post_id", onDelete: "CASCADE" });

module.exports = {
  User,
  Post,
  Comment,
};
