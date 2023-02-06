const { Sequelize, DataTypes, QueryTypes } = require('sequelize');

const sequelize = require('./db-sequelize.service');

const VotingCampaignModel = require('../models/VotingCampaign');
const VotingCampaign = VotingCampaignModel(sequelize, DataTypes);


// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
async function getAllVotingCampaign() {
  return VotingCampaign.findAll()
    .then(votingCampaigns => {
      let votingCampaignResponse = [];
      votingCampaigns.forEach(votingCampaign => {
        votingCampaignResponse.push(votingCampaign.dataValues);
      });
      return votingCampaignResponse;
    });
}
// ----------------------------------------------------------------------------
module.exports = {
  getAllVotingCampaign
}