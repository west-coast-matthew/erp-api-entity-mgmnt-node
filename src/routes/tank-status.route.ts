import { Router, Request, Response } from 'express';

import {getTankStatuses} from '../services/tank-status.service';

// New Router instance
const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const tankStatuses = getTankStatuses();
    res.send(JSON.stringify(tankStatuses));
  });

export default router;