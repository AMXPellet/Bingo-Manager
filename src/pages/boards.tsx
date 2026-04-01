import { useState, useRef, useEffect, type SubmitEvent } from 'react';
import { usePaginatedQuery, useQuery, useMutation } from 'convex/react';

import { api } from '../../convex/_generated/api';
import {
    boardCard,
    bodyMuted,
    bodyMutedSm,
    btnEmerald,
    btnSecondary,
    cardGrid,
    cardHeading,
    cn,
    displayHeading,
    dropdownMenu,
    eyebrow,
    featureTitle,
    heroCard,
    heroCopy,
    heroGlow,
    iconButtonMenu,
    menuItem,
    menuItemDanger,
    pageMainBoards,
    panelSurface,
    pageShell,
    tabTriggerActive,
    tabTriggerInactive,
} from '../lib/ui';

type BoardTab = 'joinable' | 'joined';

type BoardItem = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
};

const JOINED_BOARDS: BoardItem[] = [
    {
        id: 'd1',
        title: 'Community Center',
        description: 'Weekly game you are already in.',
        imageUrl: 'https://picsum.photos/seed/bingo4/640/360',
    },
    {
        id: 'd2',
        title: 'Library Fundraiser',
        description: 'Silent auction between rounds.',
        imageUrl: 'https://picsum.photos/seed/bingo5/640/360',
    },
];

function BoardCard({
    board,
    tab,
    menuOpen,
    onMenuOpenChange,
}: {
    board: BoardItem;
    tab: BoardTab;
    menuOpen: boolean;
    onMenuOpenChange: (open: boolean) => void;
}) {
    const menuRef = useRef<HTMLDivElement>(null);
    const onMenuOpenChangeRef = useRef(onMenuOpenChange);
    onMenuOpenChangeRef.current = onMenuOpenChange;

    useEffect(() => {
        if (!menuOpen) return;
        const onPointerDown = (e: PointerEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                onMenuOpenChangeRef.current(false);
            }
        };
        document.addEventListener('pointerdown', onPointerDown);
        return () => document.removeEventListener('pointerdown', onPointerDown);
    }, [menuOpen]);

    const primaryLabel = tab === 'joinable' ? 'Join' : 'Play';

    return (
        <article className={boardCard}>
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                    src={board.imageUrl}
                    alt=""
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                <div className="flex items-start justify-between gap-2">
                    <h3 className={cardHeading}>{board.title}</h3>
                    <div className="relative shrink-0" ref={menuRef}>
                        <button
                            type="button"
                            className={iconButtonMenu}
                            aria-expanded={menuOpen}
                            aria-haspopup="menu"
                            aria-label={`Actions for ${board.title}`}
                            onClick={() => onMenuOpenChange(!menuOpen)}
                        >
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <circle cx="12" cy="6" r="1.75" />
                                <circle cx="12" cy="12" r="1.75" />
                                <circle cx="12" cy="18" r="1.75" />
                            </svg>
                        </button>
                        {menuOpen ? (
                            <div
                                role="menu"
                                className={dropdownMenu}
                            >
                                <button
                                    type="button"
                                    role="menuitem"
                                    className={menuItem}
                                    onClick={() => {
                                        onMenuOpenChange(false);
                                    }}
                                >
                                    View details
                                </button>
                                {tab === 'joined' ? (
                                    <button
                                        type="button"
                                        role="menuitem"
                                        className={menuItemDanger}
                                        onClick={() => {
                                            onMenuOpenChange(false);
                                        }}
                                    >
                                        Leave board
                                    </button>
                                ) : null}
                            </div>
                        ) : null}
                    </div>
                </div>
                <p className={cn('line-clamp-3 flex-1', bodyMutedSm)}>
                    {board.description}
                </p>
                <button
                    type="button"
                    className={cn(
                        'inline-flex w-full items-center justify-center px-4 py-2.5',
                        btnEmerald,
                    )}
                >
                    {primaryLabel}
                </button>
            </div>
        </article>
    );
}

function JoinCodeLookup() {
    const [input, setInput] = useState('');
    const [submitted, setSubmitted] = useState<string | null>(null);

    const lookup = useQuery(
        api.games.lookupByJoinCode,
        submitted !== null ? { code: submitted } : 'skip',
    );

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        const trimmed = input.trim();
        if (!trimmed) {
            setSubmitted(null);
            return;
        }
        setSubmitted(trimmed);
    }

    const loading = submitted !== null && lookup === undefined;
    const notFound = submitted !== null && lookup === null;
    const found = submitted !== null && lookup != null;

    return (
        <div className={panelSurface}>
            <h2 className={cn(featureTitle, 'text-slate-900 dark:text-slate-100')}>Join with a code</h2>
            <p className={cn('mt-1', bodyMutedSm)}>
                Enter a code from your host to join a game that may not appear in the public list.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
                <div className="min-w-0 flex-1">
                    <label htmlFor="join-code" className="sr-only">
                        Join code
                    </label>
                    <input
                        id="join-code"
                        type="text"
                        autoComplete="off"
                        placeholder="e.g. FRIDAY1"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 font-mono text-sm uppercase tracking-wide text-slate-900 shadow-sm placeholder:normal-case placeholder:tracking-normal placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
                    />
                </div>
                <button type="submit" className={cn('shrink-0 px-5 py-2.5', btnEmerald)}>
                    Find game
                </button>
            </form>
            {loading ? (
                <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Looking up code…</p>
            ) : null}
            {notFound ? (
                <p className="mt-3 text-sm text-amber-700 dark:text-amber-400" role="status">
                    No game found for that code. Check for typos or ask your host for the code.
                </p>
            ) : null}
            {found ? (
                <div
                    className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50/80 px-3 py-2 dark:border-emerald-900/60 dark:bg-emerald-950/40"
                    role="status"
                >
                    <p className="text-sm font-medium text-emerald-900 dark:text-emerald-200">{lookup.title}</p>
                    <p className="mt-1 text-sm text-emerald-800/90 dark:text-emerald-300/90">{lookup.description}</p>
                    {!lookup.isPublic ? (
                        <p className="mt-2 text-xs text-emerald-800/80 dark:text-emerald-400/90">
                            Private session — not listed publicly; you can still join with this code.
                        </p>
                    ) : null}
                    <button
                        type="button"
                        className={cn(
                            'mt-3 inline-flex w-full items-center justify-center px-4 py-2 sm:w-auto',
                            btnEmerald,
                        )}
                    >
                        Join this game
                    </button>
                </div>
            ) : null}
        </div>
    );
}

export default function Boards() {
    const [tab, setTab] = useState<BoardTab>('joinable');
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);

    const { results, status, loadMore } = usePaginatedQuery(
        api.games.listPublicJoinableGames,
        {},
        { initialNumItems: 6 },
    );

    const loadingFirst = status === 'LoadingFirstPage';
    const canLoadMore = status === 'CanLoadMore' || status === 'LoadingMore';
    const loadingMore = status === 'LoadingMore';

    return (
        <div className={pageShell}>
            <main className={pageMainBoards}>
                <section className={heroCard}>
                    <div aria-hidden className={heroGlow} />
                    <div className={heroCopy}>
                        <p className={eyebrow}>Boards</p>
                        <h1 className={displayHeading}>Active boards</h1>
                        <p className={bodyMuted}>
                            Browse public games or join a session with a code from your host. Open games you are already
                            in from the Your games tab.
                        </p>
                    </div>
                </section>

                <section className="space-y-6">
                    <div
                        role="tablist"
                        aria-label="Board lists"
                        className="flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-800"
                    >
                        <button
                            type="button"
                            role="tab"
                            id="tab-joinable"
                            aria-selected={tab === 'joinable'}
                            aria-controls="panel-joinable"
                            className={tab === 'joinable' ? tabTriggerActive : tabTriggerInactive}
                            onClick={() => {
                                setTab('joinable');
                                setOpenMenuId(null);
                            }}
                        >
                            Joinable games
                        </button>
                        <button
                            type="button"
                            role="tab"
                            id="tab-joined"
                            aria-selected={tab === 'joined'}
                            aria-controls="panel-joined"
                            className={tab === 'joined' ? tabTriggerActive : tabTriggerInactive}
                            onClick={() => {
                                setTab('joined');
                                setOpenMenuId(null);
                            }}
                        >
                            Your games
                        </button>
                    </div>

                    <div
                        id="panel-joinable"
                        role="tabpanel"
                        aria-labelledby="tab-joinable"
                        hidden={tab !== 'joinable'}
                        className="space-y-8"
                    >
                        <JoinCodeLookup />

                        {loadingFirst ? (
                            <div className={cardGrid}>
                                {[0, 1, 2].map((i) => (
                                    <div
                                        key={i}
                                        className="animate-pulse overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100 dark:border-slate-800 dark:bg-slate-800/50"
                                    >
                                        <div className="aspect-[16/9] bg-slate-200 dark:bg-slate-700" />
                                        <div className="space-y-3 p-5">
                                            <div className="h-5 w-2/3 rounded bg-slate-200 dark:bg-slate-700" />
                                            <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-700" />
                                            <div className="h-10 w-full rounded bg-slate-200 dark:bg-slate-700" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : results.length === 0 ? (
                            <div className="rounded-xl border border-dashed border-slate-200 px-4 py-10 text-center dark:border-slate-700">
                                <p className={bodyMutedSm}>
                                    No public games right now.
                                </p>
                            </div>
                        ) : (
                            <>
                                <ul className={cardGrid}>
                                    {results.map((game) => {
                                        const imageUrl =
                                            game.imageUrl ??
                                            `https://picsum.photos/seed/${String(game._id)}/640/360`;
                                        return (
                                            <li key={game._id}>
                                                <BoardCard
                                                    board={{
                                                        id: game._id,
                                                        title: game.title,
                                                        description: game.description,
                                                        imageUrl,
                                                    }}
                                                    tab="joinable"
                                                    menuOpen={openMenuId === game._id}
                                                    onMenuOpenChange={(open) =>
                                                        setOpenMenuId(open ? game._id : null)
                                                    }
                                                />
                                            </li>
                                        );
                                    })}
                                </ul>
                                {canLoadMore ? (
                                    <div className="flex justify-center pt-2">
                                        <button
                                            type="button"
                                            className={cn('px-5 py-2.5', btnSecondary)}
                                            disabled={loadingMore}
                                            onClick={() => loadMore(6)}
                                        >
                                            {loadingMore ? 'Loading…' : 'Load more'}
                                        </button>
                                    </div>
                                ) : null}
                            </>
                        )}
                    </div>

                    <div
                        id="panel-joined"
                        role="tabpanel"
                        aria-labelledby="tab-joined"
                        hidden={tab !== 'joined'}
                        className="space-y-4"
                    >
                        <ul className={cardGrid}>
                            {JOINED_BOARDS.map((board) => (
                                <li key={board.id}>
                                    <BoardCard
                                        board={board}
                                        tab="joined"
                                        menuOpen={openMenuId === board.id}
                                        onMenuOpenChange={(open) =>
                                            setOpenMenuId(open ? board.id : null)
                                        }
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}
