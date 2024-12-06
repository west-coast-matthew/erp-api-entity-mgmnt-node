const errorConstants = require('../constants/error-status-codes.constants');

class SystemError extends Error{

    constructor(message){
        super(message);
        this.errorCode = errorConstants.ERR_CODE_SYSTEM_ERR;
        this.httpStatusCode = 500;
    }
}

module.exports = SystemError;