const errorConstants = require('../constants/error-status-codes.constants');

class InvalidRequestError extends Error{

    constructor(message){
        super(message);
        this.errorCode = errorConstants.BAD_REQUEST;
        this.httpStatusCode = 400;
    }
}

module.exports = InvalidRequestError;