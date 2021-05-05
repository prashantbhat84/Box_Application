class Response {

    constructor() {



    }
    errorResponse(params) {

        const { res, status, message, result } = params

        return res.status(200).json({ status, message, result })
    }

}

export default Response;