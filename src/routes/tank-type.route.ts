import { Router, Request, Response } from 'express';

import {getTankTypes} from '../services/tank-type.service';

// New Router instance
const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const tankTypes = getTankTypes();
    res.send(JSON.stringify(tankTypes));
  });

export default router;