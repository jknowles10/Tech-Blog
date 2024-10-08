const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false, 
    primaryKey: true, 
    autoIncrement: true, 

  },

  title: {
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
  
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  created_at: {
    type: DataTypes.DATE, 
    allowNull: false, 
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE, 
    allowNull: false, 
    dafaultValue: DataTypes.NOW
  },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  
}
);

module.exports = Post;