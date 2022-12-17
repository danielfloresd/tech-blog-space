const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

// Create our Post model
class Post extends Model {}

// define table columns and configuration
Post.init({
  id : {
    type : DataTypes.INTEGER,
    allowNull : false,
    primaryKey : true,
    autoIncrement : true,
  },
  title : {
    type : DataTypes.STRING,
    allowNull : false,
  },
  contents : {
    type : DataTypes.STRING,
    allowNull : false,
    validate : {
      len : [ 1 ],
    },
  },
  user_id : {
    type : DataTypes.INTEGER,
    references : {
      model : 'user',
      key : 'id',
    },
  },
},
          {
            sequelize,
            freezeTableName : true,
            underscored : true,
            modelName : 'post',
          });

module.exports = Post;