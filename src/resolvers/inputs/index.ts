import { inputObjectType } from "nexus";

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
