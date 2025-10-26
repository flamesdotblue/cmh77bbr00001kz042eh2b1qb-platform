import { useEffect, useState } from 'react';
import { X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AuthModal({ open, onClose, onSubmit }) {
  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setMode('login');
        setName('');
        setEmail('');
        setPassword('');
        setLoading(false);
      }, 200);
    }
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password || (mode === 'register' && !name)) return;
    setLoading(true);
    setTimeout(() => {
      onSubmit({ name: name || 'Aspirant', email });
      setLoading(false);
    }, 800);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />

          <motion.div
            className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/95 shadow-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2 text-sm text-neutral-300">
                <User className="h-4 w-4" />
                {mode === 'login' ? 'Sign in to your account' : 'Create a new account'}
              </div>
              <button onClick={onClose} className="rounded-md p-1 text-neutral-400 hover:bg-white/5 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 px-5 py-5">
              {mode === 'register' && (
                <div className="space-y-1">
                  <label className="text-xs text-neutral-300">Full name</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-neutral-500 focus:border-white/20"
                    placeholder="e.g. Aditi Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={mode === 'register'}
                  />
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs text-neutral-300">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-neutral-500 focus:border-white/20"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-neutral-300">Password</label>
                <input
                  type="password"
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-neutral-500 focus:border-white/20"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 shadow-lg transition hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? 'Please wait…' : mode === 'login' ? 'Sign in' : 'Create account'}
              </button>

              <div className="pt-1 text-center text-xs text-neutral-400">
                {mode === 'login' ? (
                  <button type="button" onClick={() => setMode('register')} className="underline underline-offset-4 hover:text-white">
                    New here? Create an account
                  </button>
                ) : (
                  <button type="button" onClick={() => setMode('login')} className="underline underline-offset-4 hover:text-white">
                    Have an account? Sign in
                  </button>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
