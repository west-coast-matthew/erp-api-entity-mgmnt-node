import { FORM_FIELD_TYPES } from "../constants/form-field-types.constants";
import FormFieldOption from "../types/form-field-option.type";

/**
 * FormField:
 *      
 *  Wrapper for DSL definition of a form field. Used to support the use case where a generaic 
 * input form may be provided which supports the ability to support object management functions 
 * in a manner which is independent of the specific object implementation.
 * 
 */
export interface FormField{
    name: string,   // Attribute reference on entity definition ()
    label: string,  // UI display on the phone, optional, if not provided, then we attempt to formulate on the name attribute. 
    description?: string, // Sometimes helpfull
    required?: boolean, // Defaults to false
    options?: FormFieldOption[], // Only relevant for multiple selection options
    length?: number, // Limits length on 
    value?: string, // Pre-existing value, if any
    type: FORM_FIELD_TYPES, // Reference to the form fild representation
    validationMsg?: string, // Presented if invalid input supplied.
}
