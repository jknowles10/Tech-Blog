const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
  {
    comment_id: {
    type: DataTypes.INTEGER,
    allowNull: false, 
    primaryKey: true, 
    autoIncrement: true,
  },

  comment_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  author: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'post',
      key: 'id',
    },
    allowNull: false,
  },
}, 
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  } 
);

module.exports = Comments;