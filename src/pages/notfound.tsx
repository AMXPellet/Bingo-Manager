import { Authenticated, Unauthenticated } from 'convex/react';
import { useAuth } from '@workos-inc/authkit-react';
import { Link } from 'react-router-dom';

import {
    bodyMuted,
    bodyMutedSm,
    btnPrimary,
    displayHeading,
    eyebrow,
    heroCardNarrow,
    heroGlow,
    pageMainCentered,
    pageShell,
} from '../lib/ui';

export default function NotFound() {
    return (
        <div className={pageShell}>
            <main className={pageMainCentered}>
                <section className={heroCardNarrow}>
                    <div aria-hidden className={heroGlow} />
                    <div className="relative mx-auto max-w-md space-y-4">
                        <p className={eyebrow}>404</p>
                        <h1 className={displayHeading}>Page not found</h1>
                        <p className={bodyMuted}>That address does not match any page here.</p>
                        <Link to="/" className={btnPrimary}>
                            Go home
                        </Link>
                    </div>
                </section>

                <section className="w-full max-w-md rounded-2xl border border-slate-200/90 bg-slate-50/80 p-6 text-center dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
                    <Unauthenticated>
                        <p className={eyebrow}>Access</p>
                        <p className={`mt-3 ${bodyMutedSm}`}>
                            Some pages only appear when you are signed in. If you expected something here, confirm your
                            account is active.
                        </p>
                        <NotFoundSignInButton/>
                    </Unauthenticated>
                    <Authenticated>
                        <p className={eyebrow}>Signed in</p>
                        <p className={`mt-3 ${bodyMutedSm}`}>
                            You are signed in. If this URL should exist, use the navigation above or go home.
                        </p>
                    </Authenticated>
                </section>
            </main>
        </div>
    );
}

function NotFoundSignInButton() {
    const { signIn } = useAuth();
    return (
        <button
            type="button"
            onClick={() => void signIn()}
            className={`mt-4 ${btnPrimary}`}
        >
            Sign in
        </button>
    );
}
