import OperationCode from "src/models/operation-code.model";
import { archiveExistingOperationCode, createNewOperationCode, getAllOperationCodes, updateExistingOperationCode } from "src/repo/operation-code.repo";

export async function getOperationCodes() : Promise<OperationCode[]>{
  return await getAllOperationCodes();
}

export async function createOperationCode(tankType:OperationCode): Promise<OperationCode>{
  return await createNewOperationCode(tankType);
}

export async function updateOperationCode(tankType:OperationCode): Promise<OperationCode>{
  return await updateExistingOperationCode(tankType);
}

export async function archiveTankType(id:number){
  archiveExistingOperationCode(id);
}