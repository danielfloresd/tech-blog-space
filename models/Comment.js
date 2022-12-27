const {Model, DataTypes} = require('sequelize');
const sequelize = require("../config/connection");
const Post = require('./Post');
const User = require('./User');

// Create Comment model

class Comment extends Model {
    static commentAttributes = [
        'id',
        'contents',
        'post_id', 
        'user_id', 
        'created_at'
    ];

    static commentInclude = [
        {
            model: User,
            attributes: ['username', 'id']
        },
        {
            model: Post,
            attributes: ['title', 'id']
        }
    ];
}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        contents: {
            type: DataTypes.TEXT("long"),
            allowNull: false,
            validate: {
                len: [1]
            }   
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;



