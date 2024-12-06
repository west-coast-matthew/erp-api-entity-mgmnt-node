const errorConstants = require('../constants/error-status-codes.constants');

class EntityExistsError extends Error{

    constructor(message){
        super(message);
        this.errorCode = errorConstants.ENTITY_EXISTS;
        this.httpStatusCode = 403;
    }
}

module.exports = EntityExistsError;