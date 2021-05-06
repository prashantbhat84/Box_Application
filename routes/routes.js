
const userRouter = require('../routes/user');
const boxRouter = require('./box')
const customerRouter = require('./customer')
const express = require('express');

const router = express.Router();


router.use("/user", userRouter);
router.use("/box", boxRouter);
router.use("/customer", customerRouter)



module.exports = router;