//requiring the different packages we need

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Comment extends Model {}

//setting the datatypes here that connect with our seeds folder
Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment_input: {
        type: DataTypes.STRING,
        validate: {
            len: [3]
        }
    },
    //setting the value for each
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'post',
            key: 'id'
        }
    }
},
    {
        sequelize,
        freezeTableName: true,
        modelName: 'comment'
        
    
});

module.exports = Comment;