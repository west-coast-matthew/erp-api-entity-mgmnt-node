import { updateModelBasicAttributes } from "src/utils/object.utils";
import { AppDataSource } from "../config/db";
import Tank from "../models/tank.model";
import {EntityNotFoundException} from '@west-coast-matthew/erp-core-node';
import { UpdateResult } from "typeorm";

const tankRepo = AppDataSource.getRepository(Tank);

export async function getAllTanks(): Promise<Tank[]> {
  return await tankRepo.find(); 
}

export async function createNewTank(tank:Tank): Promise<Tank>{
  
  return await tankRepo.save(tank);
}

/** 
 * Perform a full or partial update on the entity.
 */
export async function updateExistingTank(updated:Tank): Promise<Tank>{
  
  const existing = await tankRepo.findOneBy({id: updated.id});

  if(!existing){
    throw new EntityNotFoundException(`Unable to locate Tank (${updated.id}) for update operation.`);
  }

  // We selectively perform updates to basic attributes
  updateModelBasicAttributes(updated, existing);

  // ...And finally perform a save operation.   
  return await tankRepo.save(existing);
}

export async function archiveExistingTank(id:number){

  const isValidRef = await tankRepo.existsBy({id:id});
  const result:UpdateResult = await tankRepo.softDelete(id);

  // First validation check (does it exist?)
  if(!isValidRef){
    throw new EntityNotFoundException(`Unable to locate Tank (${id})`);
  }

  // secondary validation that the record existed was updated. 
  if(!result.affected!=true){
    throw new EntityNotFoundException(`Unable to locate Tank (${id})`);
  }
  
}