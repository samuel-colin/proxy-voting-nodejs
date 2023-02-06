const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const techniqueController = require('../controllers/technique.controller');

router.get('/initialize', cors(), techniqueController.initialize);
router.get('/test', cors(), techniqueController.testConnection);
router.get('/populate', cors(), techniqueController.populateDB);

module.exports = router;