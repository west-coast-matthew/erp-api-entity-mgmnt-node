// src/db/data-source.ts
import { createDataSource } from '@west-coast-matthew/erp-core-node';
import TankType from '../models/tank-type.model';
import Tank from '@/models/tank.model';
import TankStatus from '@/models/tank-status.model';
import { WorkOrderStatus } from '@/models/work-order-status.model';
import WorkOrder from '@/models/work-order-model';
import OperationCode from '@/models/operation-code.model';

export const AppDataSource = createDataSource({

  type: 'mariadb',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  username: process.env.DB_USERNAME || 'demo',
  password: process.env.DB_PASSWORD || 'sql',
  database: 'erp',
  synchronize: true, //todo: pass as an arg
  logging: true,
  entities: [TankType, Tank, TankStatus, OperationCode, WorkOrder, WorkOrderStatus], // Add your models here
});
