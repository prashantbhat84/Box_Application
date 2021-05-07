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

}
module.exports = Box