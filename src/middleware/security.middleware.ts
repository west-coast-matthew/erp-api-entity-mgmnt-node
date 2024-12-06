const {isTokenValid} = require('../services/security.service');
const logger = require('../logging/index.logging');
const errorConstants = require('../constants/error-status-codes.constants');
import { Express, Request, Response, NextFunction } from 'express';
import{ CUSTOM_ERROR_CODE, INVALID_SECURITY_TOKEN, ERR_CODE_SYSTEM_ERR} from '../constants/error-status-codes.constants';
import { AUTH_HEADER } from '../constants/security.constants';

/**
 * 
 * 
 * curl -v --header 'Authorization: 12345' http://localhost:3002/tanks
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const securityMiddleware = function(req: Request, res: Response, next:any){
    console.log(`applying security middleware!`);
    
    if( req.path.indexOf('login')>-1 ){
        console.log('redirecting to login....');
        next();
        return;
    }

    const authToken = req.header(AUTH_HEADER);
    console.log(`auth-token: `, authToken);

	if(!authToken){
        console.log('no auth tokens!!!!');
        console.log(`headers: ${errorConstants.CUSTOM_ERROR_CODE} ${errorConstants.NOT_LOGGED_IN}`);
        res.status(401);
        res.header(errorConstants.CUSTOM_ERROR_CODE, errorConstants.NOT_LOGGED_IN);
        res.send({});
        return;
	}
    
    console.log('passed authorization');
    try{
        if( isTokenValid(authToken) ){
            console.log(`valid cert: gold path`);
            return next();
        }
        
        console.log(`security token is not valid.....`);
        res.status(401);
        res.setHeader(CUSTOM_ERROR_CODE, INVALID_SECURITY_TOKEN);
		res.send({});
        return;
    }
    catch(e){
        console.log(e);
        logger.warn(e);
        res.status(500);
        res.setHeader(CUSTOM_ERROR_CODE, ERR_CODE_SYSTEM_ERR);
		res.send({});
        return;
    };
    
    next();
};

export default securityMiddleware;
