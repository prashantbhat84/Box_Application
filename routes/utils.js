const express = require('express');
const Utils = require('../controllers/utils')
const utils = new Utils();
const utilsRouter = express.Router();


utilsRouter.get("/secretkey", utils.getSecret)



module.exports = utilsRouter;
