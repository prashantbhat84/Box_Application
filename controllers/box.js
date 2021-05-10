const boxModel = require('../models/box')
const Response = require('../utils/Response')
const response = new Response();

class Box {
    constructor() {

    }

    async createBox(req, res, next) {

        try {
            const newBox = await boxModel.create(req.body);

            response.successReponse({ status: 201, result: newBox, res })
        } catch (error) {
            response.errorResponse({ status: 400, errors: error.stack, result: error.message, res })

        }
    }
    async listBoxes(req, res, next) {
        try {
            const boxList = await boxModel.find();
            response.successReponse({ status: 200, result: boxList, res })
        } catch (error) {
            response.errorResponse({ status: 400, errors: error.stack, result: error.message, res })

        }

    }
    async updateBox(req, res, next) {
        try {
            // const box= await boxModel.findOne({boxid:req.query.boxid});
            const time = new Date().getMinutes();
            const seconds = new Date().getSeconds;
            const ms = new Date().getMilliseconds();
            console.log({ time, seconds, ms });
            response.successReponse({ status: 200, result: "done", res })



        } catch (error) {

        }
    }

}
module.exports = Box