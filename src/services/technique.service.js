const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('./db-sequelize.service');
const LOG = require('../utils/logging.util');

const UserModel = require('../models/User');
const GroupModel = require('../models/Group');
const UserGroupModel = require('../models/UserGroup');
const VotingCampaignModel = require('../models/VotingCampaign');
const VotingCampaignChoiceModel = require('../models/VotingCampaignChoice');
const DelegationModel = require('../models/Delegation');
const VoteModel = require('../models/Vote');

/**
 * Service to testing Sequelize connection
 * @returns Message
 */
async function testConnection() {
    let message = "";
    try {
        await sequelize.authenticate();
        message = 'Connection has been established successfully.';
        LOG.info(message);
    } catch (error) {
        message = `Unable to connect to the database: ${error}`;
        LOG.error(message);
    }

    return message;
}

/**
 * Service to initialize DB
 */
async function initializeDB() {
    let User = UserModel(sequelize, DataTypes);
    let Group = GroupModel(sequelize, DataTypes);
    let UserGroup = UserGroupModel(sequelize, DataTypes);
    let VotingCampaign = VotingCampaignModel(sequelize, DataTypes);
    let Delegation = DelegationModel(sequelize, DataTypes);
    let VotingCampaignChoice = VotingCampaignChoiceModel(sequelize, DataTypes);
    let Vote = VoteModel(sequelize, DataTypes);

    sequelize.sync()
        .then(_ => LOG.info("Initialisation de la BDD"));
}

module.exports = {
    initializeDB,
    testConnection
}
