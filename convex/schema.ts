import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The database schema. Each defineTable(...) is one table.
// Convex automatically adds `_id` and `_creationTime` to every document,
// so we only declare the fields WE care about.
export default defineSchema({
  todos: defineTable({
    text: v.string(), // the todo's text
    completed: v.boolean(), // whether it's checked off
  }),
});
