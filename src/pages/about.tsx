import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-light dark:bg-dark text-dark dark:text-light">
            <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-16 px-4 py-12 sm:px-6 sm:py-16">
                <section className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm dark:border-slate-800 dark:from-slate-900/80 dark:to-slate-950 sm:p-12">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-400/10"
                    />
                    <div className="relative max-w-2xl space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
                            About
                        </p>
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Run bingo nights with calm, clear tooling
                        </h1>
                        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                            Bingo Manager is a lightweight web app for organizing sessions, keeping calls and boards in
                            sync, and giving hosts a single place to manage the flow of the game—without juggling
                            spreadsheets or paper scraps.
                        </p>
                    </div>
                </section>

                <section className="space-y-6">
                    <div className="max-w-2xl">
                        <h2 className="text-xl font-semibold tracking-tight">What you can do</h2>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                            Starter capabilities you can extend as the project grows.
                        </p>
                    </div>
                    <ul className="grid gap-4 sm:grid-cols-3">
                        {[
                            {
                                title: 'Session control',
                                body: 'Start and pause rounds, track called numbers, and keep everyone on the same page.',
                            },
                            {
                                title: 'Player-friendly',
                                body: 'Clear layouts and responsive views so callers and players see what matters first.',
                            },
                            {
                                title: 'Built for the web',
                                body: 'Runs in the browser with a modern stack—fast to iterate and easy to deploy.',
                            },
                        ].map((item) => (
                            <li
                                key={item.title}
                                className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white/60 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/40"
                            >
                                <h3 className="text-sm font-semibold">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.body}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-900/50 sm:p-8">
                    <h2 className="text-lg font-semibold tracking-tight">Stack</h2>
                    <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
                        This project pairs a React front end with Convex for data and WorkOS AuthKit for sign-in—wired for
                        real-time updates and secure access.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {['React', 'Vite', 'Tailwind CSS', 'Convex', 'WorkOS AuthKit'].map((label) => (
                            <span
                                key={label}
                                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300"
                            >
                                {label}
                            </span>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
