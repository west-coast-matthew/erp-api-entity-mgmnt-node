import TankStatus from "@/models/tank-status.model";
import { archiveExistingTankStatus, createNewTankStatus, getAllTankStatuses, updateExistingTankStatus } from "@/repo/tank-status.repo";


export async function getTankStatuses() : Promise<TankStatus[]>{
  return await getAllTankStatuses();
}

export async function createTankStatus(tankStatus:TankStatus): Promise<TankStatus>{
  return await createNewTankStatus(tankStatus);
}

export async function updateTankStatus(tankStatus:TankStatus): Promise<TankStatus>{
  return await updateExistingTankStatus(tankStatus);
}

export async function archiveTankStatus(id:number){
  archiveExistingTankStatus(id);
}