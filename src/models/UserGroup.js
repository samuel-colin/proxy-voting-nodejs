module.exports = (sequelize, DataTypes) => {
  return sequelize.define('users_group', {
    group: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references :{
        model: 'groups',
        key: 'id'
      },
      primaryKey: true
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references :{
        model: 'users',
        key: 'id'
      },
      primaryKey: true
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
};