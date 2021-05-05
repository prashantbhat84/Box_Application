import express from 'express';
import nodemailer from 'nodemailer';
const userRouter = express.Router();



userRouter.get("/", async (req, res) => {
    try {

        res.send("mail sent")
    } catch (error) {
        console.log(error.stack);
        res.send(error.message)
    }
});

export default userRouter;

