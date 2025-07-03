import Tank from "@/models/tank.model";
import { archiveExistingTank, createNewTank, getAllTanks, updateExistingTank } 
from "src/repo/tank.repo";

export async function getTanks() : Promise<Tank[]>{
  return await getAllTanks();
}

export async function createTank(tankType:Tank): Promise<Tank>{
  return await createNewTank(tankType);
}

export async function updateTank(tankType:Tank): Promise<Tank>{
  return await updateExistingTank(tankType);
}

export async function archiveTank(id:number){
  return await archiveExistingTank(id);
}


