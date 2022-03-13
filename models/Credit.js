const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Credit extends Model {}

Credit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cardholder_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [16],
      },
    },
    number: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    expiration_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
    cvv: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3],
      },
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isCreditCard: true,
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
    // hooks: {
    //   // set up beforeCreate lifecycle "hook" functionality
    //   async beforeCreate(newUserData) {
    //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //     return newUserData;
    //   },
    // },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'credit',
  }
);

module.exports = Credit;
