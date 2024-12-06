import database from '../config/database';

import {WorkOrderStatus, WorkOrderStatusMap} from '../models/work-order-status.model';

export async function getWorkOrderStatuses(){
    WorkOrderStatusMap(database);
    const tankStatuses = await WorkOrderStatus.findAll();
    return tankStatuses;
}