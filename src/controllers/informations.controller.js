const informationsService = require('../services/informations.service');

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
async function getUserById(req, res, next) {
  informationsService.getUserById(req.params.id)
  .then(result => {
    res.statusCode = 200;
    res.json(result);
  })
  .catch (error => {
    res.statusCode = 500;
    next(error);
  });
}
// ----------------------------------------------------------------------------
async function getUserByMatricule(req, res, next) {
  informationsService.getUserByMatricule(req.params.matricule)
  .then(result => {
    if(result == undefined) {
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
async function getGroupsByUserMatricule(req, res, next) {
  informationsService.getGroupsByUserMatricule(req.params.matricule)
  .then(result => {
    if(result == undefined) {
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
async function getAllUsers(req, res, next) {
  informationsService.getAllUsers()
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
async function getAllGroups(req, res, next) {
  informationsService.getAllGroups()
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
async function createUser(req, res) {
  try {
    informationsService.createUser(req.body)
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
  } catch (error) {
    res.statusCode = 500;
    next(error);
  }
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