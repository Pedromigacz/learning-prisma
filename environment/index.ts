export const PORT = process.env.PORT || 1337;
export const DATABASE_URL =
  process.env.DATABASE_URL ||
  "postgresql://postgres:password@localhost:5432/test?schema=public";
