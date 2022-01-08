import { objectType } from "nexus";

// Form
export const Form = objectType({
  name: "Form",
  definition(t) {
    t.id("id");
    t.string("name");
    t.nonNull.list.nonNull.field("fields", {
      type: Field,
      resolve: async (root, args, ctx) => {
        return ctx.prisma.form
          .findUnique({
            where: {
              id: root.id,
            },
            rejectOnNotFound: true,
          })
          .fields();
      },
    });
  },
});

// Field
export const Field = objectType({
  name: "Field",
  definition(t) {
    t.id("id");
    t.string("label");
    t.int("sort_index");
    t.nonNull.field("form", {
      type: Form,
      resolve: async (root, _args, ctx) => {
        return ctx.prisma.form.findUnique({
          where: {
            id: root.form_id,
          },
          rejectOnNotFound: true,
        });
      },
    });
  },
});
