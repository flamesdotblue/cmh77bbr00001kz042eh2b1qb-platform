import { LogIn, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar({ onLogin, onLogout, user }) {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <motion.div
              className="h-9 w-9 rounded-lg bg-gradient-to-br from-orange-500 to-blue-500 shadow-lg"
              initial={{ rotate: -8, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            />
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">Astra IAS Academy</div>
              <div className="text-xs text-neutral-400">Learn. Practice. Clear.</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#courses" className="hover:text-white transition">Courses</a>
            <a href="#benefits" className="hover:text-white transition">Why us</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm">
                  <User className="h-4 w-4 text-neutral-300" />
                  <span className="text-neutral-300">{user.name}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20 transition"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <button
                onClick={onLogin}
                className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm font-medium text-white hover:bg-white/20 transition"
              >
                <LogIn className="h-4 w-4" />
                Sign in
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
