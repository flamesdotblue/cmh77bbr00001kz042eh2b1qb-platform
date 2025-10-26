import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { CreditCard, BookOpen, Shield, Star } from 'lucide-react';

export default function Hero({ onCTAClick }) {
  return (
    <section className="relative h-[86vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/0 via-neutral-950/40 to-neutral-950" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Crack UPSC with clarity
          <span className="block bg-gradient-to-r from-orange-400 via-rose-400 to-blue-400 bg-clip-text text-transparent">and confidence</span>
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          Mentor-led courses, exam-oriented notes, and a seamless checkout experience. Join a community that studies smart, not just hard.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <button
            onClick={onCTAClick}
            className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-neutral-900 shadow-lg hover:shadow-xl transition"
          >
            <BookOpen className="h-5 w-5" />
            Explore courses
          </button>
          <a
            href="#benefits"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-white hover:bg-white/20 transition"
          >
            <Shield className="h-5 w-5" />
            Our promise
          </a>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          {[
            { Icon: CreditCard, label: 'Secure checkout' },
            { Icon: Star, label: 'Top-rated mentors' },
            { Icon: Shield, label: 'Exam-focused' },
            { Icon: BookOpen, label: 'Structured learning' },
          ].map((f, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-sm text-neutral-300"
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
            >
              <f.Icon className="h-4 w-4 text-white" />
              {f.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
