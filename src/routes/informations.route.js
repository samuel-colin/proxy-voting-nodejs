const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const informationsController = require('../controllers/informations.controller');

router.get('/users', cors(), informationsController.getAllUsers);
//router.get('/info/users/:id',cors(), informationsController.getUserById);
router.get('/users/:matricule', cors(), informationsController.getUserByMatricule);
router.post('/users/', cors(), jsonParser, informationsController.createUser);
router.get('/users/:matricule/groups', cors(), informationsController.getGroupsByUserMatricule);

router.get('/groups', cors(), informationsController.getAllGroups);

module.exports = router;