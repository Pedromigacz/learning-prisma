import { list, nonNull, nullable, queryField } from "nexus";
import { Form, FormWhereUniqueInput } from "../";
//import { FormWhereUniqueInput } from "../inputs/index";

export const forms = queryField("forms", {
  type: nonNull(list(nonNull(Form))),
  resolve: async (root, args, ctx) => {
    return ctx.prisma.form.findMany({});
  },
});

export const form = queryField("form", {
  type: nullable(Form),
  resolve: async (root, args, ctx) => {
    return null;
  },
});
