/** Join Tailwind class strings; falsy entries are skipped. */
export function cn(...classes: Array<string | false | null | undefined>): string {
    return classes.filter(Boolean).join(' ');
}

/** Full-width column under the navbar with theme background. */
export const pageShell =
    'flex min-h-0 flex-1 flex-col bg-light text-dark dark:bg-dark dark:text-light';

/** Shared width and padding for page content. Add gap / alignment with `cn(pageMainBase, ...)`. */
export const pageMainBase =
    'mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-12 sm:px-6 sm:py-16';

export const pageMainDefault = cn(pageMainBase, 'gap-16');
export const pageMainBoards = cn(pageMainBase, 'gap-10');
export const pageMainCentered = cn(pageMainBase, 'items-center justify-center gap-8');

/** Gradient hero panel (full width inside the main column). */
export const heroCard =
    'relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm dark:border-slate-800 dark:from-slate-900/80 dark:to-slate-950 sm:p-12';

export const heroCardNarrow = cn(heroCard, 'w-full max-w-md text-center');

export const heroGlow =
    'pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-400/10';

/** Hero text block inside `heroCard` (matches about page). */
export const heroCopy = 'relative max-w-2xl space-y-4';

export const eyebrow =
    'text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400';

export const displayHeading = 'text-3xl font-bold tracking-tight sm:text-4xl';

export const bodyMuted = 'text-base leading-relaxed text-slate-600 dark:text-slate-400';

export const bodyMutedSm = 'text-sm leading-relaxed text-slate-600 dark:text-slate-400';

/** Primary filled control (links and buttons). */
export const btnPrimary =
    'inline-flex rounded-md border-2 bg-dark px-4 py-2 text-sm text-light transition hover:opacity-90 dark:bg-light dark:text-dark';

export const codeInline =
    'rounded-md bg-slate-200 px-1 py-0.5 font-mono text-sm font-bold dark:bg-slate-800';

export const featureCard =
    'flex flex-col gap-2 rounded-xl border border-slate-200 bg-white/60 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40';

export const stackSection =
    'rounded-2xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-900/50 sm:p-8';

/** Section titles below the hero (about, marketing blocks). */
export const sectionHeading = 'text-xl font-semibold tracking-tight';
export const sectionHeadingSm = 'text-lg font-semibold tracking-tight';

/** Small label in feature cards (pairs with `featureCard`). */
export const featureTitle = 'text-sm font-semibold';

/** Tech stack / tag pill. */
export const chip =
    'rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300';

/** Boards: game card shell (image + body, emerald hover). */
export const boardCard =
    'group flex flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm transition hover:border-emerald-500/30 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40 dark:hover:border-emerald-500/25';

export const cardHeading = 'text-lg font-semibold leading-snug tracking-tight';

export const cardGrid = 'grid gap-6 sm:grid-cols-2';

export const panelSurface =
    'rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/40 sm:p-5';

export const tabTriggerActive =
    '-mb-px border-b-2 border-emerald-600 px-4 py-2.5 text-sm font-semibold text-emerald-800 dark:text-emerald-300';

export const tabTriggerInactive =
    'border-b-2 border-transparent px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200';

/** Emerald CTA (boards); pair with `cn` for layout/padding. */
export const btnEmerald =
    'rounded-lg bg-emerald-600 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-600';

/** Neutral outline button (load more, secondary actions). */
export const btnSecondary =
    'rounded-lg border border-slate-300 bg-white text-sm font-medium text-slate-800 shadow-sm hover:bg-slate-50 disabled:opacity-60 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800';

export const dropdownMenu =
    'absolute right-0 z-20 mt-1 min-w-[11rem] rounded-lg border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-900';

export const menuItem =
    'flex w-full px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800';

export const menuItemDanger =
    'flex w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/40';

export const iconButtonMenu =
    'rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200';
