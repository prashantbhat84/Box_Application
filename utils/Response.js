class Response {

    constructor() {
        this.response = {
            status: "",
            message: "",
            result: "",
            errors: ""

        }
        this.successReponse = this.successReponse.bind(this);
        this.errorResponse = this.errorResponse.bind(this)

    }
    errorResponse(params) {

        this.response.message = "Failure",
            this.response.status = params.status;
        this.response.result = params.result
        this.response.errors = params.errors;
        const res = params.res;
        return res.status(200).json({ status, message, result, errors })
    }
    successReponse(params) {
        console.log('inside success');
        delete this.response.errors
        this.response.message = "Success",
            this.response.status = params.status;
        this.response.result = params.result
        const res = params.res
        return res.status(200).json(this.response)
    }


}
module.exports = Response;