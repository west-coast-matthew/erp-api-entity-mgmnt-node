import { FORM_FIELD_TYPES } from "../constants/form-field-types.constants";
import { FormField } from "../types/form-field.type";

export const TankStatusObjDef:FormField[] = [
    {name:"name", label:"", type: FORM_FIELD_TYPES.FORM_FIELD_TYPE_TEXT_FIELD},
    {name:"description", label:"", type: FORM_FIELD_TYPES.FORM_FIELD_TYPE_TEXT_FIELD}
]
