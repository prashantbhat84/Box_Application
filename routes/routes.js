
const userRouter = require('../routes/user');
const boxRouter = require('../routes/box')
const express = require('express');

const router = express.Router();


router.use("/user", userRouter);
router.use("/box", boxRouter);



module.exports = router;