module.exports = (sequelize, DataTypes) => {
  return sequelize.define('voting_campaign', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(4000),
      allowNull: false
    },
    organizer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references :{
        model: 'users',
        key: 'id'
      }
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references :{
        model: 'groups',
        key: 'id'
      }
    }
  }, {
    timestamps: true,
    createdAt: false,
    updatedAt: false
  });
};