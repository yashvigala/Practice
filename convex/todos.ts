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
// Validation lives HERE (the real trust boundary), not just in the UI —
// any caller hitting the deployment directly goes through this.
export const add = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    const text = args.text.trim();
    if (text.length === 0) {
      throw new Error("Todo text cannot be empty.");
    }
    if (text.length > 1000) {
      throw new Error("Todo text is too long (max 1000 characters).");
    }
    await ctx.db.insert("todos", { text, completed: false });
  },
});

// UPDATE — flip a todo's completed state.
export const toggle = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo) return;
    await ctx.db.patch(args.id, { completed: !todo.completed });
  },
});

// DELETE — remove a todo (no-op if it's already gone, mirroring `toggle`).
export const remove = mutation({
  args: { id: v.id("todos") },
  handler: async (ctx, args) => {
    const todo = await ctx.db.get(args.id);
    if (!todo) return;
    await ctx.db.delete(args.id);
  },
});
