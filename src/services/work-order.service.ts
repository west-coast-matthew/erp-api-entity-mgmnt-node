import database from '../config/database';

import {WorkOrder, WorkOrderMap} from '../models/work-order.model';

// TODO: Enable pagination and sort order
export async function getWorkOrders(){
    WorkOrderMap(database);
    const tankStatuses = await WorkOrder.findAll();
    return tankStatuses;
}