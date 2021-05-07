const express = require('express');
const Box = require('../controllers/box.js');
const boxController = new Box();

const boxRouter = express.Router();


boxRouter.post("/create", boxController.createBox)
boxRouter.get("/list", boxController.listBoxes)



module.exports = boxRouter;
