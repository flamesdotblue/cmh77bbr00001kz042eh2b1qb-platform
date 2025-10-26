import { motion } from 'framer-motion';
import { CreditCard, BookOpen } from 'lucide-react';

function CourseCard({ course, onEnroll }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-orange-500/20 to-blue-500/20 blur-2xl" />
      <h3 className="text-lg font-semibold leading-tight text-white">{course.title}</h3>
      <p className="mt-2 text-sm text-neutral-300">{course.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-neutral-300">
        <span className="rounded-full bg-white/10 px-3 py-1">{course.level}</span>
        <span className="rounded-full bg-white/10 px-3 py-1">{course.hours} hrs</span>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-neutral-300">
        {course.features.map((f, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-orange-400 to-blue-400" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-end justify-between">
        <div>
          <div className="text-xs uppercase tracking-wide text-neutral-400">Fee</div>
          <div className="text-2xl font-semibold text-white">{course.price}</div>
        </div>
        <button
          onClick={() => onEnroll(course)}
          className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 shadow-lg hover:shadow-xl transition"
        >
          <CreditCard className="h-4 w-4" />
          Enroll now
        </button>
      </div>
    </motion.div>
  );
}

export default function Courses({ courses, user }) {
  const handleEnroll = (course) => {
    if (course.paymentLink) {
      window.open(course.paymentLink, '_blank', 'noopener,noreferrer');
    } else {
      alert('Payment link not configured for this course.');
    }
  };

  return (
    <section id="courses" className="relative z-10 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Courses designed for outcomes</h2>
            <p className="mt-2 max-w-2xl text-neutral-300">Structured modules, precise practice, and feedback loops that accelerate your preparation.</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-neutral-300">
            <BookOpen className="h-4 w-4" />
            {user ? <span>Welcome back, {user.name.split(' ')[0]}!</span> : <span>Sign in to track your enrollments</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} onEnroll={handleEnroll} />
          ))}
        </div>

        <div id="benefits" className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: 'Clarity-first pedagogy', body: 'Crystal-clear concepts with exam relevance built into every class.' },
            { title: 'Daily accountability', body: 'Live doubt rooms, progress trackers, and mentor nudges keep you moving.' },
            { title: 'Smooth & secure payments', body: 'PCI-compliant checkout and instant access after purchase.' },
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="text-lg font-medium text-white">{b.title}</div>
              <p className="mt-2 text-sm text-neutral-300">{b.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-orange-500/10 to-blue-500/10 p-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-2xl font-semibold">Hassle-free checkout</div>
              <p className="mt-1 max-w-2xl text-sm text-neutral-300">We use secure payment links. Replace them with your own Stripe Payment Links, Razorpay pages, or a custom gateway anytime.</p>
            </div>
            <a
              href="https://dashboard.stripe.com/payments/links"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 shadow-lg hover:shadow-xl transition"
            >
              <CreditCard className="h-4 w-4" /> Configure payment links
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
