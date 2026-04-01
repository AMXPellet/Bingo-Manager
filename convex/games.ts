import { paginationOptsValidator } from 'convex/server';
import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

function normalizeJoinCode(code: string): string {
  return code.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
}

export const listPublicJoinableGames = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('games')
      .withIndex('by_isPublic', (q) => q.eq('isPublic', true))
      .order('desc')
      .paginate(args.paginationOpts);
  },
});

export const lookupByJoinCode = query({
  args: { code: v.string() },
  handler: async (ctx, args) => {
    const normalized = normalizeJoinCode(args.code);
    if (!normalized) {
      return null;
    }
    const game = await ctx.db
      .query('games')
      .withIndex('by_joinCode', (q) => q.eq('joinCode', normalized))
      .unique();
    if (!game) {
      return null;
    }
    return {
      _id: game._id,
      title: game.title,
      description: game.description,
      imageUrl: game.imageUrl,
      joinCode: game.joinCode,
      isPublic: game.isPublic,
    };
  },
});

/**TODO: Remove this when I have my create game logic running. */
export const seedDemoGames = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query('games').take(1);
    if (existing.length > 0) {
      return { inserted: 0 };
    }
    const demos: Array<{
      title: string;
      description: string;
      imageUrl: string;
      joinCode: string;
      isPublic: boolean;
    }> = [
      {
        title: 'Friday Night Bingo',
        description: 'Casual 75-ball session. New players welcome.',
        imageUrl: 'https://picsum.photos/seed/bingo1/640/360',
        joinCode: 'FRIDAY1',
        isPublic: true,
      },
      {
        title: 'Charity Hall',
        description: 'Fundraiser game with themed rounds and prizes.',
        imageUrl: 'https://picsum.photos/seed/bingo2/640/360',
        joinCode: 'GIVE2026',
        isPublic: true,
      },
      {
        title: 'Speed Round',
        description: 'Fast-paced calls; seats fill quickly.',
        imageUrl: 'https://picsum.photos/seed/bingo3/640/360',
        joinCode: 'SPEED77',
        isPublic: true,
      },
      {
        title: 'Private Friends Game',
        description: 'Invite-only; use the join code from your host.',
        imageUrl: 'https://picsum.photos/seed/bingo6/640/360',
        joinCode: 'SECRET99',
        isPublic: false,
      },
    ];
    for (const row of demos) {
      await ctx.db.insert('games', row);
    }
    return { inserted: demos.length };
  },
});
