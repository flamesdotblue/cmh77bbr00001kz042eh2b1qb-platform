import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const items = [
  {
    name: 'Aditi Sharma',
    tag: 'AIR 112',
    quote:
      'Concise notes and daily accountability helped me finish the syllabus with confidence. Loved the feedback loops.',
  },
  {
    name: 'Rahul Verma',
    tag: 'Cleared Prelims 2x',
    quote:
      'The test discussions and current affairs labs were laser-focused. Payment and access were instant and smooth.',
  },
  {
    name: 'Neha Gupta',
    tag: 'PSIR Topper',
    quote:
      'Answer writing bootcamps changed the game. Mentor feedback was actionable and specific to PYQs.',
  },
  {
    name: 'Arjun Mehta',
    tag: 'Interview Mentored',
    quote:
      'Panel mocks simulated the real thing. The biodata drilling prepared me for any curveball.',
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', skipSnaps: false },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative z-10 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">What our learners say</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-300">Real outcomes from real aspirants. Smooth onboarding, structured learning, consistent results.</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
        >
          <div className="embla" ref={emblaRef}>
            <div className="embla__container flex">
              {items.map((t, idx) => (
                <div key={idx} className="embla__slide min-w-0 flex-[0_0_83%] sm:flex-[0_0_48%] lg:flex-[0_0_32%] p-4">
                  <div className="h-full rounded-xl bg-gradient-to-b from-white/5 to-white/[0.02] p-5 border border-white/10">
                    <div className="flex items-center gap-1 text-amber-300">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-300 text-amber-300" />
                      ))}
                    </div>
                    <p className="mt-3 text-sm text-neutral-200">“{t.quote}”</p>
                    <div className="mt-4 text-sm font-medium text-white">{t.name}</div>
                    <div className="text-xs text-neutral-400">{t.tag}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
