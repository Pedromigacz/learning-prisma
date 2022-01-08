import { inputObjectType } from "nexus";

export const FormWhereUniqueInput = inputObjectType({
  name: "FormWhereUniqueInput",
  definition(t) {
    t.nonNull.id("id");
  },
});
