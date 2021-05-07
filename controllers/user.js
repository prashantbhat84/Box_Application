const userModel = require('../models/user');
const Response = require("../utils/Response");
const response = new Response();

class User {

    async createUser(req, res, next) {
        try {
            response.successReponse({ status: 201, result: "User Created", res })
        } catch (error) {

        }
    }
}

module.exports = User;