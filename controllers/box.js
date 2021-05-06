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
    _testmethod() {
        console.log('test');
    }

}
module.exports = Box