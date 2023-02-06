module.exports = (sequelize, DataTypes) => {
  return sequelize.define('voting_campaign_choice', {
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
    camp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references :{
        model: 'voting_campaigns',
        key: 'id'
      }
    },
  }, {
    timestamps: true,
    createdAt: false,
    updatedAt: false
  });
};
