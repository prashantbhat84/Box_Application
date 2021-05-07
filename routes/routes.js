
const userRouter = require('./user');
const boxRouter = require('./box')
const utilsRouter = require("./utils")

const express = require('express');

const router = express.Router();


router.use("/user", userRouter);
router.use("/box", boxRouter);
router.use("/utils", utilsRouter)




module.exports = router;