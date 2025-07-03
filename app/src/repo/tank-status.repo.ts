import { UpdateResult } from "typeorm";
import { AppDataSource } from "../config/database";
import TankStatus from "src/models/tank-status.model";
import { updateModelBasicAttributes } from "src/utils/object.utils";
import EntityNotFoundException from '@erp-core/exceptions/entity-not-found.exception';

const tankStatusRepo = AppDataSource.getRepository(TankStatus);

export async function getAllTankStatuses(): Promise<TankStatus[]> {
  
  return await tankStatusRepo.find();
}

export async function createNewTankStatus(tankStatus:TankStatus): Promise<TankStatus>{
  
  return await tankStatusRepo.save(tankStatus);
}

/** 
 * Perform a full or partial update on the entity.
 */
export async function updateExistingTankStatus(updated:TankStatus): Promise<TankStatus>{
  
  const existing = await tankStatusRepo.findOneBy({id: updated.id});

  if(!existing){
    throw new EntityNotFoundException(`Unable to locate TankStatus (${updated.id}) for 
      update operation.`);
  }

  // We selectively perform updates to basic attributes
  updateModelBasicAttributes(updated, existing);

  // ...And finally perform a save operation.   
  return await tankStatusRepo.save(existing);
}

export async function archiveExistingTankStatus(id:number){

  const isValidRef = await tankStatusRepo.existsBy({id:id});
  const result:UpdateResult = await tankStatusRepo.softDelete(id);

  // First validation check (does it exist?)
  if(!isValidRef){
    throw new EntityNotFoundException(`Unable to locate TankStatus (${id})`);
  }

  // secondary validation that the record existed was updated. 
  if(!result.affected!=true){
    throw new EntityNotFoundException(`Unable to locate TankStatus (${id})`);
  }
  
}