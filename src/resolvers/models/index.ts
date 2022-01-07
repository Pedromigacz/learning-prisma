import { objectType } from "nexus";

// Form
export const Form = objectType({
  name: "Form",
  definition(t) {
    t.id("id");
    t.string("name");
  },
});

// Field
export const Field = objectType({
  name: "Field",
  definition(t) {
    t.id("id");
    t.string("label");
    t.int("sort_index");
  },
});
