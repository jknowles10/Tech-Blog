const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
  {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false, 
    primaryKey: true, 
    autoIncrement: true,
  },

  comment_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users', 
      key: 'id', 
    },
  },

  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'post',
      key: 'id',
    },
  },
}, 
  {
    sequelize,
    freezeTableName: true,
    timestamps:true, 
    underscored: true,
    modelName: 'comments',
  } 
);

module.exports = Comments;