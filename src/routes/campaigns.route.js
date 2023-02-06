const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const votingCampaignController = require('../controllers/votingCampaign.controller');

router.get('/campaigns', cors(), votingCampaignController.getAllVotingCampaign);

module.exports = router;