import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

// The schema is entirely optional.
// You can delete this file (schema.ts) and the
// app will continue to work.
// The schema provides more precise TypeScript types.
export default defineSchema({
  numbers: defineTable({
    value: v.number(),
  }),
  games: defineTable({
    title: v.string(),
    description: v.string(),
    imageUrl: v.optional(v.string()),
    /** Uppercase alphanumeric code used to join non-listed games */
    joinCode: v.string(),
    isPublic: v.boolean(),
  })
    .index('by_joinCode', ['joinCode'])
    .index('by_isPublic', ['isPublic']),
});
