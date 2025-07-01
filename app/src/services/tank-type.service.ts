import { getAllTankTypes, createNewTankType, updateExistingTankType, archiveExistingTankType } from "@/repo/tank-type.repo";
import TankType from "@/models/tank-type.model";

export async function getTankTypes() : Promise<TankType[]>{
  return await getAllTankTypes();
}

export async function createTankType(tankType:TankType): Promise<TankType>{
  return await createNewTankType(tankType);
}

export async function updateTankType(tankType:TankType): Promise<TankType>{
  return await updateExistingTankType(tankType);
}

export async function archiveTankType(id:number){
  return await archiveExistingTankType(id);
}