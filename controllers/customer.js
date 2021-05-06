
const customerModel = require('../models/customer');
const Response = require('../utils/Response')
const response = new Response();
class Customer {
    constructor() {

    }

    async createCustomer(req, res, next) {
        console.log('inside customer');
        try {
            const newCustomer = await customerModel.create(req.body);
            response.successReponse({ status: 201, result: newCustomer, res })

        } catch (error) {
            response.errorResponse({ status: 400, errors: error.stack, result: error.message, res })
        }

    }
}

module.exports = Customer