
import database from '../config/database';

import {Tank, TankMap} from 'erp-core-node/src/models/';

export async function getTanks(){
    TankMap(database);
    const tanks = await Tank.findAll();
    console.log('tanks', tanks);
    return tanks;
}

export async function getTankById(id:number){

}

export async function createTank(tank:Tank){
    // TODO: check permissions...

    validateTank(tank);
}

/**
 * Crud operation, operations such as changing the tanks state should be performed 
 * via task specific functions in this file.
 * 
 * @param tank 
 */
export async function updateTank(tank:Tank){
    // TODO: check permissions...

    validateTank(tank);

}

/**
 * We 'never' truly delete tanks, so a soft delete is essentially performed.
 */
export async function archiveTank(tankId:number){
    // TODO: check permissions...
}

/**
 * Once a tank is emptied, it needs to be cleaned prior to additional
 * operations.
 * 
 * @param tankId 
 */
export async function setTankPendingMaintenance(tankId:number){

}

/**
 * Indicates that maintenance is performed against the tank. This could mean 
 * either that there is phsical being performed, including a 'cleaning' 
 * phase.
 * 
 * @param tankId 
 */
export async function setTankInMaintenance(tankId:number){

}

/**
 * Indicates has content in it.
 * 
 * @param tankId 
 */
export async function setTankActive(tankId:number){

}

/**
 * Places tank into a state where it is on standby, are ready to be
 * assigned new operations against it.
 * 
 * @param tankId 
 */
export async function setTankInactive(tankId:number){

}

/**
 * Validation method used to assert that the data is in a correct
 * state prior to creation or update operations.
 */
export async function validateTank(tank:Tank){

}