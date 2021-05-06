const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')
const Response = require('./utils/Response')
const morgan = require('morgan');
const connectdb = require('./config/db')
const router = require('./routes/routes')
dotenv.config({ path: "./config/config.env" });
connectdb();

const response = new Response()
const { errorResponse } = response

const corsOptions = {
    origin: "*",
    methods: ["POST", "GET", "PUT"]
}
const app = express();
app.use(express.json())
app.use(cors(corsOptions));
app.use((req, res, next) => {
    // console.log(req.hostname, req.headers, req.path);

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


module.exports = app;