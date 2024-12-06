const { mongoose } = require('mongoose');
const constants = require('../constants/index.constants');

/**
 * 
 * Middleware for centralizing exception handling.
 * 
 * @param {*} error 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const errorHandlerMiddleware = function(error, req, res, next){
    
    if( error.message.startsWith('Validation failed') ){
        error.errorCode=constants.error.ENTITY_VALIDATION_ERR;
        error.httpStatusCode = 400;
    }

    res.setHeader(constants.CUSTOM_ERROR_CODE, error.errorCode || '' );
    res.setHeader(constants.ERROR_MESSAGE, error.message);
    res.status(error.httpStatusCode);
    res.send({});
};

module.exports = errorHandlerMiddleware;