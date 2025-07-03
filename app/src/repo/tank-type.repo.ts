import { UpdateResult } from "typeorm";
import { AppDataSource } from "../config/database";
import TankType from "../models/tank-type.model";
import EntityNotFoundException from '@erp-core/exceptions/entity-not-found.exception';
import { updateModelBasicAttributes } from "src/utils/object.utils";

export async function getAllTankTypes(): Promise<TankType[]> {
  const tankTypeRepo = AppDataSource.getRepository(TankType);
  return await tankTypeRepo.find();
}

export async function createNewTankType(tankType:TankType): Promise<TankType>{
  const tankTypeRepo = AppDataSource.getRepository(TankType);
  return await tankTypeRepo.save(tankType);
}

/** 
 * Perform a full or partial update on the entity.
 */
export async function updateExistingTankType(updated:TankType): Promise<TankType>{
  const tankTypeRepo = AppDataSource.getRepository(TankType);
  
  const existing = await tankTypeRepo.findOneBy({id: updated.id});

  if(!existing){
    throw new EntityNotFoundException(`Unable to locate TankType (${updated.id}) for update 
      operation.`);
  }
  
  // We selectively perform updates to basic attributes
  updateModelBasicAttributes(updated, existing);

  // ...And finally perform a save operation.   
  return await tankTypeRepo.save(existing);
}

export async function archiveExistingTankType(id:number){

  const tankTypeRepo = AppDataSource.getRepository(TankType);
  const isValidRef = await tankTypeRepo.existsBy({id:id});
  const result:UpdateResult = await tankTypeRepo.softDelete(id);

  // First validation check (does it exist?)
  if(!isValidRef){
    throw new EntityNotFoundException(`Unable to locate TankType (${id})`);
  }

  // secondary validation that the record existed was updated. 
  if(!result.affected!=true){
    throw new EntityNotFoundException(`Unable to locate TankType (${id})`);
  }
  
}