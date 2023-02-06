const { Sequelize, DataTypes, QueryTypes } = require('sequelize');

const sequelize = require('./db-sequelize.service');

const UserModel = require('../models/User');
const GroupModel = require('../models/Group');
const VotingCampaignModel = require('../models/VotingCampaign');
const VotingCampaignChoiceModel = require('../models/VotingCampaignChoice');
const DelegationModel = require('../models/Delegation');
const VoteModel = require('../models/Vote');

const User = UserModel(sequelize, DataTypes);
const Group = GroupModel(sequelize, DataTypes);
const VotingCampaign = VotingCampaignModel(sequelize, DataTypes);
const Delegation = DelegationModel(sequelize, DataTypes);
const VotingCampaignChoice = VotingCampaignChoiceModel(sequelize, DataTypes);
const Vote = VoteModel(sequelize, DataTypes);


// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
async function getUserById(userId) {
    const request = `SELECT * FROM users WHERE id=${userId}`;

    const [results, metadata] = await sequelize.query(
        request,
        {
            model: User,
            mapToModel: true,
            type: QueryTypes.SELECT,
            raw: false,
        }
    );

    return results;
}
// ----------------------------------------------------------------------------
async function getUserByMatricule(matricule) {
    const request = `SELECT * FROM users WHERE matricule='${matricule}'`;

    const results = await sequelize.query(
        request,
        {
            model: User,
            mapToModel: true,
            type: QueryTypes.SELECT,
            raw: false
        }
    );

    results[0].password = "";
    return results[0];
}
// ----------------------------------------------------------------------------
async function getGroupsByUserMatricule(matricule) {
    const request = `SELECT groups.* FROM groups 
      JOIN users_groups ON users_groups."group" = groups.id
      JOIN users ON  users_groups."user" = users.id
      WHERE matricule like '${matricule}'`;

    const results = await sequelize.query(
        request,
        {
            model: Group,
            mapToModel: true,
            type: QueryTypes.SELECT,
            raw: false,
            nest: true,
            plain: false
        }
    );

    return results;
}
// ----------------------------------------------------------------------------
async function getAllUsers() {
  return User.findAll()
		.then(users => {
      let userResponse = [];
			users.forEach(user => {
				userResponse.push(user.dataValues);
			});
      return userResponse;
		});
}
// ----------------------------------------------------------------------------
async function getAllGroups() {
  return Group.findAll()
		.then(groups => {
      let groupResponse = [];
			groups.forEach(group => {
				groupResponse.push(group.dataValues);
			});
      return groupResponse;
		});
}
// ----------------------------------------------------------------------------
async function createUser(user) {
	User.create(user)
		.then(user => {
			return user;
		});
}
// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
module.exports = {
  getUserById,
  getUserByMatricule,
  getAllUsers,
  getAllGroups,
  createUser,
  getGroupsByUserMatricule
}
