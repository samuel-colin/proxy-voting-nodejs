const votingCampaignService = require('../services/votingCampaign.service');

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
async function getAllVotingCampaign(req, res) {
  votingCampaignService.getAllVotingCampaign()
    .then(result => {
      if(!result && result == undefined) {
          res.statusCode = 204;
          res.json();
      } else {
        res.statusCode = 200;
        res.json(result);
      }
    })
    .catch (error => {
        res.statusCode = 500;
        next(error);
    });
}
// ----------------------------------------------------------------------------
module.exports = {
  getAllVotingCampaign
}