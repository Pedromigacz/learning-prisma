import { mutationField, nullable, nonNull, list } from "nexus";
import {
  Form,
  Field,
  FormWhereUniqueInput,
  FormFieldWhereUniqueInput,
  CreateFormInput,
  CreateFormFieldInput,
  UpdateFormInput,
  UpdateFormFieldInput,
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

export const updateForm = mutationField("updateForm", {
  type: nullable(Form),
  args: {
    input: nonNull(UpdateFormInput),
    fields: nullable(list(nullable(UpdateFormFieldInput))),
  },
  resolve: async (root, args, ctx) => {
    interface UpdatedFieldData {
      label?: string;
      sort_index?: number;
    }

    interface field {
      id?: string;
      label?: string;
      sort_index?: number;
    }

    let response;
    let responseForm;
    let responseFields;
    if (args.input.name) {
      responseForm = await ctx.prisma.form.update({
        where: args.input.id,
        data: {
          name: args.input.name,
        },
      });
    } else {
      responseForm = await ctx.prisma.form.findUnique({
        where: {
          id: args.input.id,
        },
      });
    }

    if (args.fields.length >= 1) {
      responseFields = await Promise.all(
        args.fields.map(async (field: field) => {
          const data: UpdatedFieldData = {};
          if (field.label) data.label = field.label;
          if (field.sort_index) data.sort_index = field.sort_index;
          console.log(data);

          let interationField;
          if (field.id) {
            interationField = await ctx.prisma.field.update({
              where: {
                id: field.id,
              },
              data,
            });
          } else {
            interationField = await ctx.prisma.field.create({
              data: {
                ...data,
                form_id: args.input.id,
              },
            });
          }
          return interationField;
        })
      );
    }

    return {
      ...responseForm,
      fields: {
        ...responseForm.fields,
        ...responseFields,
      },
    };
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
      where: args.where,
    });
  },
});
