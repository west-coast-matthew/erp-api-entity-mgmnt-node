import "reflect-metadata";
import express  from 'express';
import helmet from 'helmet';
import router from '@routes/index.route';
//import {createDataSource} from '@west-coast-matthew/erp-core-node';
//import {errorHandlerMiddleware} from '@west-coast-matthew/erp-core-node';
import {InitializationException} from '@west-coast-matthew/erp-core-node';
import dotenv from 'dotenv-esm';
import _  from 'lodash';

import { AppDataSource } from './config/db';

// todo [ERP-16]: enable security
//import securityMiddleware from './middleware/security.middleware';

const app = express();
dotenv.config();

/**
 * Given a string array of required props that should be present in the runime
 * environment (usually defined by dotenv), ensure all required props are present 
 * with a value.
 * 
 * @param reqProps 
 */
const validatePropsPresent = (reqProps:string[])=>{

  reqProps.forEach((prop)=>{
    if(!process.env[prop]){
      throw new InitializationException(`Property '${prop}' not present in .env file.`);
    }

    if(_.isEmpty(process.env[prop])){
      throw new InitializationException(`Property '${prop}' is present in .env file, however with 
        an empty value.`);
    }
  });

}

const reqEnvProps = ['DB_HOST','DB_PORT','DB_USERNAME','DB_PASSWORD'];

console.log(`config: `, process.env.DB_HOST);
console.log(`config: `, process.env.DB_USERNAME);
console.log(`config: `, process.env.DB_PASSWORD);
console.log(`config: port`, process.env.DB_PORT);

validatePropsPresent(reqEnvProps);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source Initialized');
    // You can now use repositories, etc.
  })
  .catch((err:Error) => {
    console.error('Data Source Initialization Error', err);
    throw new InitializationException(`Unable to initialize data source`);
  });

app.use(helmet());
app.use(express.json());
// todo [ERP-16]: enable security
//app.use(securityMiddleware);
app.use('/', router);


//app.use((_err: Error, _req: Request, _res: Response, _next: NextFunction) => {
//  res.status(500).json({ message: err.message });
//});

//app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5176;

app.listen(port, () => {
  console.log(`API Server (entity mgmnt) is running on http://localhost:${port}`);
});
