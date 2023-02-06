const techniqueService = require('../services/technique.service');
const informationService = require('../services/informations.service');

/**
 * Test Sequelize DB connection
 */
async function testConnection(req, res, next) {
  let returnValue = await techniqueService.testConnection();
  res.json(returnValue);
}

/**
* Initialize DB structure 
*/
async function initialize(req, res, next) {
  try {
      await techniqueService.initializeDB();
      res.json("Initialisation OK");
  } catch (err) {
      next(err);
  }
}

/**
 * Populate DB
 */
async function populateDB(req, res, next) {
  try {
    let user01 = JSON.parse(`{"matricule": "0010", "lastname": "Sam01","firstname": "C","email": "@","password": "a","last_login": "2023-02-02T10:51:00.046Z","created_at": "2023-02-02T10:50:48.229Z","updated_at": "2023-02-02T10:51:09.781Z"}`);
    let user02 = JSON.parse(`{"matricule": "0011", "lastname": "Sam02","firstname": "C","email": "@","password": "a","last_login": "2023-02-02T10:51:00.046Z","created_at": "2023-02-02T10:50:48.229Z","updated_at": "2023-02-02T10:51:09.781Z"}`);
    let user03 = JSON.parse(`{"matricule": "0012", "lastname": "Sam03","firstname": "C","email": "@","password": "a","last_login": "2023-02-02T10:51:00.046Z","created_at": "2023-02-02T10:50:48.229Z","updated_at": "2023-02-02T10:51:09.781Z"}`);
    let user04 = JSON.parse(`{"matricule": "0013", "lastname": "Sam04","firstname": "C","email": "@","password": "a","last_login": "2023-02-02T10:51:00.046Z","created_at": "2023-02-02T10:50:48.229Z","updated_at": "2023-02-02T10:51:09.781Z"}`);
    
    await createUserTemplate(user01);
    await createUserTemplate(user02);
    await createUserTemplate(user03);
    await createUserTemplate(user04);

    res.statusCode = 200;
    res.json("Populate DB OK");
} catch (err) {
  res.statusCode = 500;
    next(err);
}
}

async function createUserTemplate(userToCreate) {
    informationService.createUser(userToCreate)
      .then(result => { });
}

module.exports = {
    testConnection,
    initialize,
    populateDB
}