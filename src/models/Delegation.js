module.exports = (sequelize, DataTypes) => {
  return sequelize.define('delegation', {
      id:  {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      camp_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references :{
          model: 'voting_campaigns',
          key: 'id'
        }
      },
      curent_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references :{
          model: 'users',
          key: 'id'
        }
      },
      delegate_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references :{
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      timestamps: true,
      createdAt: false,
      updatedAt: false
    }
  );
}