import { Router, Request, Response } from 'express';

import { Sequelize } from 'sequelize';

import {getWorkOrderStatuses} from '../services/work-order-status.service';

// New Router instance
const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const workOrderStatuses = getWorkOrderStatuses();
    res.send(JSON.stringify(workOrderStatuses));
  });

export default router;