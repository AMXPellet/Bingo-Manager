import {
    bodyMuted,
    bodyMutedSm,
    chip,
    cn,
    displayHeading,
    eyebrow,
    featureCard,
    featureTitle,
    heroCard,
    heroCopy,
    heroGlow,
    pageMainDefault,
    pageShell,
    sectionHeading,
    sectionHeadingSm,
    stackSection,
} from '../lib/ui';

export default function About() {
    return (
        <div className={pageShell}>
            <main className={pageMainDefault}>
                <section className={heroCard}>
                    <div aria-hidden className={heroGlow} />
                    <div className={heroCopy}>
                        <p className={eyebrow}>About</p>
                        <h1 className={displayHeading}>Run bingo nights with calm, clear tooling</h1>
                        <p className={bodyMuted}>
                            Bingo Manager is a lightweight web app for organizing sessions, keeping calls and boards in
                            sync, and giving hosts a single place to manage the flow of the game—without juggling
                            spreadsheets or paper scraps.
                        </p>
                    </div>
                </section>

                <section className="space-y-6">
                    <div className="max-w-2xl">
                        <h2 className={sectionHeading}>What you can do</h2>
                        <p className={cn('mt-2', bodyMutedSm)}>
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
                            <li key={item.title} className={featureCard}>
                                <h3 className={featureTitle}>{item.title}</h3>
                                <p className={bodyMutedSm}>{item.body}</p>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className={stackSection}>
                    <h2 className={sectionHeadingSm}>Stack</h2>
                    <p className={cn('mt-2 max-w-2xl', bodyMutedSm)}>
                        This project pairs a React front end with Convex for data and WorkOS AuthKit for sign-in—wired for
                        real-time updates and secure access.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {['React', 'Vite', 'Tailwind CSS', 'Convex', 'WorkOS AuthKit'].map((label) => (
                            <span key={label} className={chip}>
                                {label}
                            </span>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
