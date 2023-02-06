module.exports = (sequelize, DataTypes) => {
  return sequelize.define('vote', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    choice_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references :{
        model: 'voting_campaign_choices',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references :{
        model: 'users',
        key: 'id'
      }
    }
  }, {
    timestamps: true,
    createdAt: false,
    updatedAt: false
  });
};
