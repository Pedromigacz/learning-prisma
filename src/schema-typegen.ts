/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context as Context } from "./context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreateFormFieldInput: { // input type
    label: string; // String!
    sort_index: number; // Int!
  }
  CreateFormInput: { // input type
    name: string; // String!
  }
  FormFieldWhereUniqueInput: { // input type
    id: string; // ID!
  }
  FormWhereUniqueInput: { // input type
    id: string; // ID!
  }
  UpdateFormFieldInput: { // input type
    id: string; // ID!
    label?: string | null; // String
    sort_index?: number | null; // Int
  }
  UpdateFormInput: { // input type
    id: string; // ID!
    name?: string | null; // String
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Field: { // root type
    id: string; // ID!
    label: string; // String!
    sort_index: number; // Int!
  }
  Form: { // root type
    id: string; // ID!
    name: string; // String!
  }
  Mutation: {};
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Field: { // field return type
    form: NexusGenRootTypes['Form']; // Form!
    id: string; // ID!
    label: string; // String!
    sort_index: number; // Int!
  }
  Form: { // field return type
    fields: NexusGenRootTypes['Field'][]; // [Field!]!
    id: string; // ID!
    name: string; // String!
  }
  Mutation: { // field return type
    createForm: NexusGenRootTypes['Form'] | null; // Form
    createFormField: NexusGenRootTypes['Field'] | null; // Field
    removeForm: NexusGenRootTypes['Form'] | null; // Form
    removeFormField: NexusGenRootTypes['Field'] | null; // Field
    updateForm: NexusGenRootTypes['Form'] | null; // Form
  }
  Query: { // field return type
    form: NexusGenRootTypes['Form'] | null; // Form
    forms: NexusGenRootTypes['Form'][]; // [Form!]!
  }
}

export interface NexusGenFieldTypeNames {
  Field: { // field return type name
    form: 'Form'
    id: 'ID'
    label: 'String'
    sort_index: 'Int'
  }
  Form: { // field return type name
    fields: 'Field'
    id: 'ID'
    name: 'String'
  }
  Mutation: { // field return type name
    createForm: 'Form'
    createFormField: 'Field'
    removeForm: 'Form'
    removeFormField: 'Field'
    updateForm: 'Form'
  }
  Query: { // field return type name
    form: 'Form'
    forms: 'Form'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createForm: { // args
      fields?: Array<NexusGenInputs['CreateFormFieldInput'] | null> | null; // [CreateFormFieldInput]
      input: NexusGenInputs['CreateFormInput']; // CreateFormInput!
    }
    createFormField: { // args
      input: NexusGenInputs['CreateFormFieldInput']; // CreateFormFieldInput!
      where: NexusGenInputs['FormWhereUniqueInput']; // FormWhereUniqueInput!
    }
    removeForm: { // args
      where: NexusGenInputs['FormWhereUniqueInput']; // FormWhereUniqueInput!
    }
    removeFormField: { // args
      where: NexusGenInputs['FormFieldWhereUniqueInput']; // FormFieldWhereUniqueInput!
    }
    updateForm: { // args
      fields?: Array<NexusGenInputs['UpdateFormFieldInput'] | null> | null; // [UpdateFormFieldInput]
      input: NexusGenInputs['UpdateFormInput']; // UpdateFormInput!
    }
  }
  Query: {
    form: { // args
      where: NexusGenInputs['FormWhereUniqueInput']; // FormWhereUniqueInput!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}