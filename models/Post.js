const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Comment = require('./Comment');

// Create our Post model
class Post extends Model {
    
    static postAttributes = [
        'id',
        'category',
        'contents',
        'title', 
        'created_at'
    ];

    static postInclude = [
        { 
            model: Comment,
            attributes: Comment.commentAttributes,
            include: {
                model: User,
                attributes: ['username']
            },
            order: [['created_at', 'DESC']]
        },
        {
            model: User,
            attributes: ['username', 'id']
        }
    ];
}

// define table columns and configuration
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        category: {
            type: Sequelize.ENUM('Software', 'Hardware', 'Media & Entertainment', 'Mobile', 'Gaming', 'Product Reviews', 'Other'),
            defaultValue: 'Other',
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contents: {
            type: DataTypes.TEXT("long"),
            allowNull: false,
            validate: {
                len: [1],
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
);

module.exports = Post;