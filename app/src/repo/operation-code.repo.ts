import { UpdateResult } from "typeorm";
import { AppDataSource } from "../config/db";
import {EntityNotFoundException} from '@west-coast-matthew/erp-core-node';
import {InitializationException} from '@west-coast-matthew/erp-core-node';
import OperationCode from "src/models/operation-code.model";
import { updateModelBasicAttributes } from "src/utils/object.utils";

const opCodeRepo = AppDataSource.getRepository(OperationCode);

export async function getAllOperationCodes(): Promise<OperationCode[]> {
  
  return await opCodeRepo.find();
}

export async function createNewOperationCode(opCode:OperationCode): Promise<OperationCode>{

  return await opCodeRepo.save(opCode);
}

/** 
 * Perform a full or partial update on the entity.
 */
export async function updateExistingOperationCode(updated:OperationCode): Promise<OperationCode>{
  
  const existing = await opCodeRepo.findOneBy({id: updated.id});

  if(true){
    //throw new InitializationException('');
  }

  if(!existing){
    throw new EntityNotFoundException(`Unable to locate OperationCode (${updated.id}) for 
      update operation.`);
  }

  // We selectively perform updates to basic attributes
  updateModelBasicAttributes(updated, existing);

  // ...And finally perform a save operation.   
  return await opCodeRepo.save(existing);
}

export async function archiveExistingOperationCode(id:number){

  const isValidRef = await opCodeRepo.existsBy({id:id});
  const result:UpdateResult = await opCodeRepo.softDelete(id);

  // First validation check (does it exist?)
  if(!isValidRef){
    throw new EntityNotFoundException(`Unable to locate OperationCode(${id})`);
  }

  // secondary validation that the record existed was updated. 
  if(!result.affected!=true){
    throw new EntityNotFoundException(`Unable to locate OperationCode (${id})`);
  }
  
}