import 'reflect-metadata';

import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

//we need to this about how to handle this as models are defined in both the core as well as API models, however when we migrate this logic to the core logic, it will not have knowlege of entities. If probably will suffice to just 'load' them in the main app.ts file, as it appears they just need to be loaded/referenced, prior to any db interactions.
import OperationCode from '../models/operation-code.model';
import TankStatus from '../models/tank-status.model';
import TankType from '../models/tank-type.model';
import {WorkOrderStatus} from '../models/work-order-status.model';
import Tank from '../models/tank.model';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [OperationCode, TankStatus, TankType, Tank, WorkOrderStatus],
  migrations: [],
  subscribers: [],
});