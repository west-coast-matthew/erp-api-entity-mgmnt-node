import { Router } from 'express';
import entityRouter from './entity-mgmnt.route';

const router = Router();
console.log(`initializing routes`);
router.use('/entity', entityRouter);

export default router;