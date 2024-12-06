/**
 * ObjectMapper.js
 * 
 * A requirement exists where a 'draft' version of an object (one that is currently being edited) needs to become 
 * aware of updates performed by form UI elements. This object is designed to streamline the process of performing 
 * these operations as part of a larger transaction. Whereas the intent is no bypass the Redux store during the 
 * editing process, upon a transaction commmit, an create/update message would be submitted to store the changes.
 * 
 * Support for first level attributes on an entity, and 'first level' child operations. Future support for third or [x]
 * level child updates should be supported in the future. Operations performed against children are index based, so 
 * for example, a series of children are represented in sequence, and delete/add/update operations are dependant on 
 * the order.
 * 
 * 
 * Example usage:
 * ----------------------------------------------------------------------
 * (Example in memory json structure)
 * let input = {
 * 		"name": "",
 * 		"description": "",
 * 		"children": [
 * 			{
 *				"child-name": "child name 1" 	
 * 			},
 * 			{
 *				"child-name": "child name 2" 	
 * 			}	
 * 		]
 * }
 * 
 * (Import declaration)
 * const ObjectMapper = require('../../object-mapper');
 * ...
 * 
 * (Convenience method)
 * function updateEntity(attr, val){
 * 		objectMapper.mapField(input, attr, evt.target.val);
 * }
 * 
 * (Implementation: First level attribute)
 * <input type="text" onChange={()=>{ updateEntity('name', evt.target.val); }} />
 * <input type="text" onChange={()=>{ updateEntity('description', evt.target.val); }} />
 * 
 * (Implementation: Second level attribute)
 * <input type="text" onChange={()=>{ 'children[0].child-name', updateEntity(evt.target.val); }} />
 * 
 **/
 class ObjectMapper {

	runMockMethod(){
		return 'foo';
	}

	/**
	 * Update an attribute  
	 */ 
	mapField(entity, fieldRef, value){
		entity[fieldRef] = value;
		return entity;
	}

	/**
	 * Determine if an attribute is an array reference. 
	 */
	 isArrayReference(attrRef){
		return attrRef.indexOf('[')>-1;
	 }

	 /**
	 * Get an index of an attribute reference.
	 */
	 getIndexRef(attrRef){
	 	const index = attrRef.indexOf('[');
	 	return index;
	 }

	 /**
	  * Delete a child element.
	  */ 
	  deleteChildElement(entity, attrRef, index){
	  	entity[attrRef].splice(index, 1);
	  }

	 /**
	 * Add a new child element. 
	 */
	 addChildElement(entity, attrRef, child){
	 	entity[attrRef].push(child);
	 }

	 updateChildElement(entity, attrRef, child, index){
	 	entity[attrRef][index]=child;	
	 }

}

module.exports = ObjectMapper;