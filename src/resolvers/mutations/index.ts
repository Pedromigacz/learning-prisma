import { mutationField } from "nexus";
import { mutationField, nullable } from "nexus";
import { Form, Field } from "../";

export const createForm = mutationField("createForm", {
  type: nullable(Form),
  resolve: async (root, args, ctx) => {
    return null;
  },
});

export const createFormField = mutationField("createFormField", {
  type: nullable(Field),
  resolve: async (root, args, ctx) => {
    return null;
  },
});

export const removeFormField = mutationField("removeFormField", {
  type: nullable(Field),
  resolve: async (root, args, ctx) => {
    return null;
  },
});

export const updateFormField = mutationField("updateFormField", {
  type: nullable(Field),
  resolve: async (root, args, ctx) => {
    return null;
  },
});
