import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'
import Response from './utils/Response.js'
import morgan from 'morgan'
import connectdb from './config/db.js'
import router from './routes/routes.js'
dotenv.config({ path: "./config/config.env" });
connectdb();
const response = new Response()
const { errorResponse } = response

const corsOptions = {
    origin: "*",
    methods: ["POST", "GET", "PUT"]
}
const app = express();
app.use(cors(corsOptions));
app.use((req, res, next) => {
    // console.log(req.hostname, req.headers, req.path);
    console.log('inside method validator');
    const allowedMethods = ["POST", "GET", "PUT"];
    if (!allowedMethods.includes(req.method)) {
        errorResponse({ status: 400, message: "Failure", result: `${req.method} method is not allowed`, res })

    }
    next();
})

app.use("/", router);



process.on("uncaughtException", (req, res) => {

    process.exitCode(1);
    errorResponse({ status: 400, message: "Failure", result: "Process exited due to unhandled exception", res })
})


export default app;