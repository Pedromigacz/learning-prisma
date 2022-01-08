import { inputObjectType, nullable } from "nexus";

// Form
export const FormWhereUniqueInput = inputObjectType({
  name: "FormWhereUniqueInput",
  definition(t) {
    t.nonNull.id("id");
  },
});

export const CreateFormInput = inputObjectType({
  name: "CreateFormInput",
  definition(t) {
    t.nonNull.string("name");
  },
});

export const UpdateFormInput = inputObjectType({
  name: "UpdateFormInput",
  definition(t) {
    t.nonNull.id("id");
    t.nullable.string("name");
  },
});

// FormField
export const FormFieldWhereUniqueInput = inputObjectType({
  name: "FormFieldWhereUniqueInput",
  definition(t) {
    t.nonNull.id("id");
  },
});

export const CreateFormFieldInput = inputObjectType({
  name: "CreateFormFieldInput",
  definition(t) {
    t.nonNull.string("label");
    t.nonNull.int("sort_index");
  },
});

export const UpdateFormFieldInput = inputObjectType({
  name: "UpdateFormFieldInput",
  definition(t) {
    t.nullable.id("id");
    t.nullable.string("label");
    t.nullable.int("sort_index");
  },
});
