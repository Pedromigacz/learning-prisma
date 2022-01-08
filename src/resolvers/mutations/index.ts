import { mutationField, nullable, nonNull } from "nexus";
import {
  Form,
  Field,
  FormWhereUniqueInput,
  FormFieldWhereUniqueInput,
  CreateFormInput,
  CreateFormFieldInput,
} from "../";

export const createForm = mutationField("createForm", {
  type: nullable(Form),
  args: {
    input: nonNull(CreateFormInput),
    fields: nullable(list(nullable(CreateFormFieldInput))),
  },
  resolve: async (root, args, ctx) => {
    const form = await ctx.prisma.form.create({
      data: {
        ...args.input,
      },
    });
    const fields = await ctx.prisma.field.createMany({
      data: args.fields.map((field: typeof CreateFormFieldInput) => ({
        form_id: form.id,
        ...field,
      })),
    });
    return form;
  },
});

  },
});

export const removeForm = mutationField("removeForm", {
  type: nullable(Form),
  args: {
    where: nonNull(FormWhereUniqueInput),
  },
  resolve: async (root, args, ctx) => {
    return ctx.prisma.form.delete({
      data: {
        where: args.where,
      },
    });
  },
});

export const createFormField = mutationField("createFormField", {
  type: nullable(Field),
  args: {
    input: nonNull(CreateFormFieldInput),
    where: nonNull(FormWhereUniqueInput),
  },
  resolve: async (root, args, ctx) => {
    return ctx.prisma.field.create({
      data: {
        ...args.input,
        form_id: args.where.id,
      },
    });
  },
});

export const removeFormField = mutationField("removeFormField", {
  type: nullable(Field),
  args: {
    where: nonNull(FormFieldWhereUniqueInput),
  },
  resolve: async (root, args, ctx) => {
    return ctx.prisma.field.delete({
      data: {
        where: args.where,
      },
    });
  },
});

/*export const updateFormField = mutationField("updateFormField", {
  type: nullable(Field),
  resolve: async (root, args, ctx) => {
    return null;
  },
});*/
