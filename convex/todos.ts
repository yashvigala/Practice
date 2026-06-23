import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// READ — return all todos, newest first.
// Queries are reactive: any component using this auto-updates when todos change.
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("todos").order("desc").collect();
  },
});

// CREATE — add a new todo (starts uncompleted).
export const add = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("todos", {
      text: args.text,
      completed: false,
    });
  },
});

// UPDATE — flip a todo's completed state.
// We read the current doc, then patch the opposite value.
export const toggle = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo) return;
    await ctx.db.patch(args.id, { completed: !todo.completed });
  },
});

// DELETE — remove a todo.
export const remove = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
