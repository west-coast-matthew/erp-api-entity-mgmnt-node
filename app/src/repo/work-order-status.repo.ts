import { UpdateResult } from "typeorm";
import { AppDataSource } from "../config/db";
import { WorkOrderStatus } from "src/models/work-order-status.model";
import { updateModelBasicAttributes } from "src/utils/object.utils";
import {EntityNotFoundException} from '@west-coast-matthew/erp-core-node';

const woStatusRepo = AppDataSource.getRepository(WorkOrderStatus);

export async function getAllWorkOrderStatuses(): Promise<WorkOrderStatus[]> {
  
  return await woStatusRepo.find();
}

export async function createNewWorkOrderStatus(tankType:WorkOrderStatus): 
Promise<WorkOrderStatus>{
  
  return await woStatusRepo.save(tankType);
}

/** 
 * Perform a full or partial update on the entity.
 */
export async function updateExistingWorkOrderStatus(updated:WorkOrderStatus): 
Promise<WorkOrderStatus>{
  const tankTypeRepo = AppDataSource.getRepository(WorkOrderStatus);
  
  const existing = await woStatusRepo.findOneBy({id: updated.id});

  if(!existing){
    throw new EntityNotFoundException(`Unable to locate WorkOrderStatus (${updated.id}) for 
      update operation.`);
  }

  // We selectively perform updates to basic attributes
  updateModelBasicAttributes(updated, existing);

  // ...And finally perform a save operation.   
  return await woStatusRepo.save(existing);
}

export async function archiveExistingWorkOrderStatus(id:number){

  const isValidRef = await woStatusRepo.existsBy({id:id});
  const result:UpdateResult = await woStatusRepo.softDelete(id);

  // First validation check (does it exist?)
  if(!isValidRef){
    throw new EntityNotFoundException(`Unable to locate WorkOrderStatus (${id})`);
  }

  // secondary validation that the record existed was updated. 
  if(!result.affected!=true){
    throw new EntityNotFoundException(`Unable to locate WorkOrderStatus (${id})`);
  }
  
}