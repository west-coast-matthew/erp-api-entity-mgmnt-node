import TankType from '@/models/tank-type.model';
import { DICT_ENTITY_TYPES } from '@/constants/dict-entity-types.constants';
import { FORM_FIELD_TYPES } from '@/constants/form-field-types.constants';
import { OperationCodeObjDef } from '@/obj-defs/operation-code-obj-def';
import { TankObjDef } from '@/obj-defs/tank-obj-def';
import { TankStatusObjDef } from '@/obj-defs/tank-status-obj-def';
import { TankTypeObjDef } from '@/obj-defs/tank-type-obj-def';
import { WorkOrderStatusObjDef } from '@/obj-defs/work-order-status-obj-def';
import { createOperationCode, getOperationCodes, updateOperationCode } from 
'./operation-code.service';
import { archiveTankStatus, createTankStatus, getTankStatuses, updateTankStatus } 
from './tank-status.service';
import { getTankTypes, updateTankType } from './tank-type.service';
import { archiveTank, createTank, getTanks, updateTank } from './tank.service';
import { archiveWorkOrderStatus, createWorkOrderStatus, getWorkOrderStatuses, 
    updateWorkOrderStatus } from './work-order-status.service';
import { archiveTankType, createTankType } from '@/services/tank-type.service';
import Tank from '@/models/tank.model';
import OperationCode from '@/models/operation-code.model';
import TankStatus from '@/models/tank-status.model';
import { WorkOrderStatus } from '@/models/work-order-status.model';
import EntityNotFoundException from '@erp-core/exceptions/entity-not-found.exception';
import { DictionaryEntity } from '@/models/dictionary-entity.interface';

/**
 * Entity management service
 * 
 * Service responsible for servicing all operations relating to the management of entities, 
 * including CRUD operations and introspecting meta data related to dictionary objects.
 * 
 * Action items:
 *  todo [ERP-8]: Enable support for the following dictionary object types
 *      - tank status
 *      - tank type
 *      - work order status
 * 
 */


/**
 * Retrieve all dictionary entities by a given type.
 * 
 * @param type 
 * @returns 
 */
export const getEntityListByType = async(type: keyof typeof DICT_ENTITY_TYPES) =>{

    switch(type){
        case 'TANK':
            return getTanks();
        case 'OPERATION_CODE':
            return getOperationCodes();
        case 'TANK_STATUS':
            return getTankStatuses();
        case 'WORK_ORDER_STATUS':
            return getWorkOrderStatuses();
        case 'TANK_TYPE':
            return getTankTypes();
        default:
            throw new EntityNotFoundException(`Type '${type}' is noot a valid dictionary entity reference`);
    }

}

/**
 * Retrieve meta information for a given dictionary item type. This will allow the consumer to 
 * essentially get information such as attributes, their types, if they are required, etc. An 
 * essential task for building dynamic forms.
 * 
 * @param type 
 * @returns 
 */
const getDictEntityMetaData = (type:DICT_ENTITY_TYPES)=>{
    switch(type){
        case DICT_ENTITY_TYPES.TANK:
            return TankObjDef;
        case DICT_ENTITY_TYPES.OPERATION_CODE:
            return OperationCodeObjDef
        case DICT_ENTITY_TYPES.TANK_STATUS:
            return TankStatusObjDef;
        case DICT_ENTITY_TYPES.TANK_TYPE:
            return TankTypeObjDef;
        case DICT_ENTITY_TYPES.WORK_ORDER_STATUS:
        return WorkOrderStatusObjDef;
        default:
            return [];
    }
}

export const createEntity =(type: keyof typeof DICT_ENTITY_TYPES, entity:DictionaryEntity)=>{
    switch(type){
        case 'TANK':
            return createTank(entity as Tank);
        case 'OPERATION_CODE':
            return createOperationCode(entity as OperationCode);
        case 'TANK_STATUS':
            return createTankStatus(entity as TankStatus);
        case 'WORK_ORDER_STATUS':
            return createWorkOrderStatus(entity as WorkOrderStatus);
        case 'TANK_TYPE':
            return createTankType(entity as TankType);
        default:
            throw new EntityNotFoundException(`Type '${type}' is not a valid dictionary entity 
                reference`);
    }
}

export const updateEntity =(type: keyof typeof DICT_ENTITY_TYPES, entity:DictionaryEntity)=>{
    switch(type){
        case 'TANK':
            return updateTank(entity as Tank);
        case 'OPERATION_CODE':
            return updateOperationCode(entity as OperationCode);
        case 'TANK_STATUS':
            return updateTankStatus(entity as TankStatus);
        case 'WORK_ORDER_STATUS':
            return updateWorkOrderStatus(entity as WorkOrderStatus);
        case 'TANK_TYPE':
            return updateTankType(entity as TankType);
        default:
            throw new EntityNotFoundException(`Type '${type}' is not a valid dictionary entity 
                reference`);
    }
} 
    
export const archiveEntity =(type: keyof typeof DICT_ENTITY_TYPES, id:number)=>{
    switch(type){
        case 'TANK':
            return archiveTank(id);
        case 'OPERATION_CODE':
            return archiveOperationCode(id);
        case 'TANK_STATUS':
            return archiveTankStatus(id);
        case 'WORK_ORDER_STATUS':
            return archiveWorkOrderStatus(id);
        case 'TANK_TYPE':
            return archiveTankType(id);
        default:
            throw new EntityNotFoundException(`Type '${type}' is not a valid dictionary entity 
                reference`);
    }
}

function archiveOperationCode(id: number) {
    throw new Error('Function not implemented.');
}

