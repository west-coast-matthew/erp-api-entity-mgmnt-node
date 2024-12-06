import database from '../config/database';

import {TankType, TankTypeMap} from '../models/tank-type.model';

export async function getTankTypes(){
    TankTypeMap(database);
    const tankStatuses = await TankType.findAll();
    return tankStatuses;
}