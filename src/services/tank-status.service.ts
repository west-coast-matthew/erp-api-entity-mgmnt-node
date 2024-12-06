import database from '../config/database';

import {TankStatus, TankStatusMap} from '../models/tank-status.model';

export async function getTankStatuses(){
    TankStatusMap(database);
    const tankStatuses = await TankStatus.findAll();
    return tankStatuses;
}