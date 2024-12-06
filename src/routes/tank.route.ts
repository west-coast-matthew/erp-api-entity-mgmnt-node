import { Router, Request, Response } from 'express';

import { Sequelize } from 'sequelize';

import {getTanks} from '../services/tank.service';

// New Router instance
const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const tanks = getTanks();
    res.send(JSON.stringify(tanks));
  });

export default router;