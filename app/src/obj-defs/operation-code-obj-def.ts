import { FORM_FIELD_TYPES } from "../constants/form-field-types.constants";
import { FormField } from "../types/form-field.type";

export const OperationCodeObjDef:FormField[] = [
    {name:"name", label:"name", type: FORM_FIELD_TYPES.FORM_FIELD_TYPE_TEXT_FIELD},
    {name:"description", label:"description", type: FORM_FIELD_TYPES.FORM_FIELD_TYPE_TEXT_FIELD}
]
