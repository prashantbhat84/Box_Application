const express = require('express');
const Box = require('../controllers/box.js');
const boxController = new Box();

const boxRouter = express.Router();


boxRouter.post("/create", boxController.createBox)
boxRouter.get("/list", boxController.listBoxes)
boxRouter.put("/updatebox", boxController.updateBox)



module.exports = boxRouter;
