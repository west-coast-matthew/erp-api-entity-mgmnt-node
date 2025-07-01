
import { getAllWorkOrderStatuses, createNewWorkOrderStatus, archiveExistingWorkOrderStatus, updateExistingWorkOrderStatus } from "src/repo/work-order-status.repo";
import { WorkOrderStatus } from "src/models/work-order-status.model";

export async function getWorkOrderStatuses() : Promise<WorkOrderStatus[]>{
  return await getAllWorkOrderStatuses();
}

export async function createWorkOrderStatus(woStatus:WorkOrderStatus): Promise<WorkOrderStatus>{
  return await createNewWorkOrderStatus(woStatus);
}

export async function updateWorkOrderStatus(woStatus:WorkOrderStatus): Promise<WorkOrderStatus>{
  return await updateExistingWorkOrderStatus(woStatus);
}

export async function archiveWorkOrderStatus(id:number){
  await archiveExistingWorkOrderStatus(id);
}