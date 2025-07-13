import { Request, Response, NextFunction } from "express";

/**
 * Middleware example (Hola!)
 * 
 * Got security? Audit tracking? This centralize approach is the way to do it!
 * 
 * @param req 
 * @param res 
 * @param next 
 */
export const holaMiddleware = (req: Request, res: Response, next:NextFunction):void=>{
    res.setHeader('X-Hola', 'Hola! Middleware is working!');
    console.log('Hola! Middleware is working!');
    next();
}