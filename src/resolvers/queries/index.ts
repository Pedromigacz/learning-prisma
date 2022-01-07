import { list, nonNull, nullable, queryField } from "nexus";
import { nullable, queryField } from "nexus";
import { Form } from "../";

export const forms = queryField("forms", {
  type: nullable(list(nonNull(Form))),
  resolve: async (root, args, ctx) => {
    return [];
  },
});

export const form = queryField("form", {
  type: nullable(Form),
  resolve: async (root, args, ctx) => {
    return null;
  },
});
