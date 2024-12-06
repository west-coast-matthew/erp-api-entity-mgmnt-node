import { Router } from 'express';
import tankRouter from './tank.route';
import tankTypeRouter from './tank-type.route';
import tankStatusRouter from './tank-status.route';
import workOrderRouter from './work-order.route';
import workOrderStatusRouter from './work-order-status.route';
import operationCodeRouter from './work-order-status.route';

const router = Router();

router.use('/tanks', tankRouter);
router.use('/tankType', tankTypeRouter);
router.use('/tankStatus', tankStatusRouter);
router.use('/workOrder', workOrderRouter);
router.use('/workOrderStatus', workOrderStatusRouter);
router.use('/operationCode', operationCodeRouter);

export default router;