import database from '../config/database';

import {OperationCode, OperationCodeMap} from '../models/operation-code.model';

export async function getOperationCodes(){
    OperationCodeMap(database);
    const tankStatuses = await OperationCode.findAll();
    return tankStatuses;
}