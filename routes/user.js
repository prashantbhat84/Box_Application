const express = require('express');
const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
    try {

        res.send("mail sent")
    } catch (error) {
        console.log(error.stack);
        res.send(error.message)
    }
});

module.exports = userRouter;

