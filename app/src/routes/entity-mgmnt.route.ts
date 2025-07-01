import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { archiveEntity, getEntityListByType, updateEntity } from '../services/entity-mgmnt.service';
import logger from '@erp-core/logger/logger';
import { getEnumKeyByValue } from '../utils/misc.utils';
import { DICT_ENTITY_TYPES } from '../constants/dict-entity-types.constants';
import TankType from 'src/models/tank-type.model';
import { DictionaryEntity } from 'src/models/dictionary-entity.interface';
import {createEntity} from "src/services/entity-mgmnt.service";
import InvalidRequestException from '@erp-core/exceptions/invalid-request.exception';

/**
 * Entity Management API Router
 * 
 * API endpoint used to service requests related to 'generic entity' management operations. Generic entities (sometime referre dot as dictionary data) are entities for which the data seldom, but a requirement for maintenance. Given the CRUD nature of these operations, we provide an dynamic form and this API to service requests in order to facilitate operations through a single generic point, rather than by creating separate UI and API end points for each individual entity.
 * 
 */

const router = Router();

/**
 * Retrieve a list of all entities for a selected type. Assumption is there will be a 
 * relatively small number of records returned in the request.
 * 
 * TODO: 
 *      - Possibly Enable pagination for better long term support
 *      - Potentially only return minimal display data (id, name, description) and not the entire entity.
 */
router.get('/:entityType', async (req: Request, res: Response) => {
    const entityType = req.params.entityType;
    logger.info(`servicing (list) request for '${entityType}' entity`);
    
    const entityTypeRef = getEnumKeyByValue(DICT_ENTITY_TYPES, entityType);
    
    /**
     * Quick check is performed to confirm that the requested entity is valid.
     */
    if(entityTypeRef==undefined){
        logger.warn(`Request to list entities for dictionary type '${entityType}' references an 
            invalid type`);

        throw new InvalidRequestException(`Invalid reference to entity type '${entityType}'`);   
    }

    logger.info(`Request for entity listing '${entityType}' references valid dictionary type`);

    const listings = await getEntityListByType(entityTypeRef);
    console.log('entity listings', listings);
    res.set('Content-Type', 'application/json')
    res.send(listings);
    res.end();
});

/**
 * Add a new entity
 * 
 * TODO: 
 *  - perform validation
 *  - work with actual data source
 */
router.post('/:entityType', async (req: Request, res: Response) => {
    const entityType = req.params.entityType;
    
    const entityTypeRef = getEnumKeyByValue(DICT_ENTITY_TYPES, entityType);
    
    logger.info(`servicing (create) request to create an entity`);

    /**
     * Quick check is performed to confirm that the requested entity is valid.
     */
    if(entityTypeRef==undefined){
        logger.warn(`Request to list entities for dictionary type '${entityType}' references an invalid type`);
       
        throw new InvalidRequestException(`Invalid reference to entity type '${entityType}'`);   
    }

    logger.info(`creating new entity`);

    // happy path
    //const newRef:TankType = req.body;
    //const newRecord = await createTankType(newRef);
    const newRef = req.body as DictionaryEntity;
    const newRecord = await createEntity(entityTypeRef, newRef);

    logger.info(`created new entity`);
    res.set('Content-Type','application/json');
    res.send(newRecord);
    res.end();

});


/** Update an entity
 * TODO:
 * - perform validation
 * - work with actual data source
 * - investigate if we just need to support patch
 * - perform check to validate target entity exists
 * 
 */
router.put('/:enityName/:id', async (req: Request, res: Response) => {
    logger.info(`updating entity`);

    const entityType = req.params.entityName;
    const id = req.params.id;

    const entityTypeRef = getEnumKeyByValue(DICT_ENTITY_TYPES, entityType);
    
    logger.info(`servicing (update) request to create an entity`);

    /**
     * Quick check is performed to confirm that the requested entity is valid.
     */
    if(entityTypeRef==undefined){
        logger.warn(`Request to list entities for dictionary type '${entityType}' references an invalid type`);

        throw new InvalidRequestException(`Invalid reference to entity type '${entityType}'`);   
    }

    const newRef = req.body as DictionaryEntity;
    const newRecord = await updateEntity(entityTypeRef, newRef);

    res.status(StatusCodes.OK);
    res.set('Content-Type', 'application/json')
    res.end();
});

/**
 * Peform an archive operation on an entitity. These types of entities are never delete, however set into an archived state as in most cases there are FK relations involved that would break otherwise.
 */
router.delete('/:entityName/:id', async (req: Request, res: Response) => {
    
    const entityType = req.params.entityName;
    const id = req.params.id;

    logger.info(`archiving '${entityType}', id=>${id}`);

    const entityTypeRef = getEnumKeyByValue(DICT_ENTITY_TYPES, entityType);
    
    logger.info(`servicing (archive) request to create an entity`);

    /**
     * Quick check is performed to confirm that the requested entity is valid.
     */
    if(entityTypeRef==undefined){
        logger.warn(`Request to list entities for dictionary type '${entityType}' references an invalid type`);

        throw new InvalidRequestException(`Invalid reference to entity type '${entityType}'`);   
    }

    archiveEntity(entityTypeRef, Number(id));

    res.status(StatusCodes.OK);
    res.set('Content-Type', 'application/json')
    res.end();
});

 const findEntityById=(id:number)=>{

 }


export default router;
