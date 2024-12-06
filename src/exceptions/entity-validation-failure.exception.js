const errorConstants = require('../constants/error-status-codes.constants');

class EntityValidationError extends Error{

    constructor(message){
        super(message);
        this.errorCode = errorConstants.ENTITY_VALIDATION_ERR;
        this.httpStatusCode = 400;
    }
}

module.exports = EntityValidationError;