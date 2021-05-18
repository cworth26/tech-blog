const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//this creates our Post model
class Post extends Model {}

//this creates the fields and columns for Post model
Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    //setting the value for each
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
        modelName: 'post'

})



 module.exports = Post;