const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');
//this creates our User model
class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}
//this defines our table columns for db
User.init({
    //defines id column
    id: {
      //lets our db know what type of data this is
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    // don't need email for this hw assignment 
    // email: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   unique: true,
    //   validate: {
    //     isEmail: true,
    //   },
    
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //this sets the password value to be at least 4 characters
        len: [4],
      }
    }
},
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    //this passes in the connection to our db
    sequelize,
    timestamps: false,
    // stops creation of pluralizing the db table
    freezeTableName: true,
    //allows to use underscores instead of camelcase
    underscored: true,
    //allows model name to stay lowercase in db
    modelName: 'user',
  }
);

module.exports = User;
