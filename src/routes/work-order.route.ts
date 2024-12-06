import { Router, Request, Response } from 'express';

import { Sequelize } from 'sequelize';

import {getWorkOrders} from '../services/work-order.service';

// New Router instance
const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const workOrders = getWorkOrders();
    res.send(JSON.stringify(workOrders));
  });

export default router;