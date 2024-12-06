const errorConstants = require('../constants/error-status-codes.constants');

class EntityNotFoundError extends Error{

    constructor(message){
        super(message);
        this.errorCode = errorConstants.ENTITY_NOT_FOUND;
        this.httpStatusCode = 404;
    }
}

module.exports = EntityNotFoundError;