import { useEffect, useRef, useState } from 'react';
import { Authenticated, Unauthenticated} from 'convex/react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '@workos-inc/authkit-react';

function navLinkClass({ isActive }: { isActive: boolean }) {
    return [
        'rounded-lg px-3 py-2 text-sm font-medium transition',
        isActive
        ? 'bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-slate-100'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100',
    ].join(' ');
}

function UserCircleIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A8.003 8.003 0 0 0 12 15a8.003 8.003 0 0 0-5.982 3.725m11.963 0a8.966 8.966 0 0 0-1.69-2.447 8.003 8.003 0 0 0-11.274 0 8.965 8.965 0 0 0-1.69 2.447m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-6.018-2.275M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        </svg>
    );
}

function authedNavLinks(){
    return (
        <>
        <NavLink to="/" end className={navLinkClass}>
            Home
        </NavLink>
        <NavLink to="/start" className={navLinkClass}>
            Start
        </NavLink>
        <NavLink to="/Boards" className={navLinkClass}>
            Boards
        </NavLink>
        </>
    )
}

function unauthedNavLinks(){
    return (
        <>
        <NavLink to="/" end className={navLinkClass}>
            About
        </NavLink>
        </>
    )
}

function userMenu(){
    const { user, signOut, signIn} = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const wrapRef = useRef<HTMLDivElement>(null);
    
    
    useEffect(() => {
        function handlePointerDown(event: MouseEvent) {
            if (wrapRef.current?.contains(event.target as Node)) {
                return;
            }
            setMenuOpen(false);
        }
        document.addEventListener('mousedown', handlePointerDown);
        return () => document.removeEventListener('mousedown', handlePointerDown);
    }, []);
    
    return (
        <>
        <Unauthenticated>
        <div className="relative shrink-0" ref={wrapRef}>
            <button
                type="button"
                className="cursor-pointer inline-flex h-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white dark:focus-visible:ring-slate-500 dark:focus-visible:ring-offset-slate-900"
                onClick={() => {
                    void signIn();
                }}
            >
                Sign-In
            </button>
        </div>
        </Unauthenticated>
        <Authenticated>
            <div className="relative shrink-0" ref={wrapRef}>
                <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                    aria-expanded={menuOpen}
                    aria-haspopup="menu"
                    aria-label="Account menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <UserCircleIcon className="h-5 w-5" />
                </button>
                {menuOpen ? (
                    <div
                        className="absolute right-0 top-full z-50 mt-3 w-56 origin-top-right rounded-xl border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-900"
                        role="menu"
                    >
                        {user?.email ? (
                            <p className="truncate border-b border-slate-100 px-3 py-2 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
                                {user.email}
                            </p>
                        ) : null}
                        <button
                            type="button"
                            role="menuitem"
                            className="w-full px-3 py-2 text-left text-sm text-slate-800 transition hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                            onClick={() => {
                                setMenuOpen(false);
                                void signOut();
                            }}
                        >
                            Sign out
                        </button>
                    </div>
                ) : null}
            </div>
        </Authenticated>
        </>
    )
}

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-light/90 backdrop-blur-md dark:border-slate-800/80 dark:bg-dark/90">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-4 px-4 sm:px-6">
        <NavLink
            to="/"
            end
            className="shrink-0 text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100"
        >
            Bingo Manager
        </NavLink>
        
        <nav className="flex flex-1 items-center gap-1 sm:gap-2" aria-label="Main">
            <Authenticated>
                {authedNavLinks()}
            </Authenticated>
            <Unauthenticated>
                {unauthedNavLinks()}
            </Unauthenticated>
        </nav>
        {userMenu()}
        </div>
        </header>
    );
}
