import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';

export default function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('ias_user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const handleLogin = (payload) => {
    localStorage.setItem('ias_user', JSON.stringify(payload));
    setUser(payload);
    setAuthOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('ias_user');
    setUser(null);
  };

  const courses = useMemo(
    () => [
      {
        id: 'upsc-foundation',
        title: 'UPSC CSE Foundation (GS Prelim + Mains)',
        description:
          'Comprehensive coverage of GS I–IV, CSAT drills, current affairs labs, and essay workshops with daily mentorship.',
        price: '₹19,999',
        level: 'Beginner to Intermediate',
        hours: 180,
        features: ['Live + Recorded', 'Weekly tests', 'Mentor feedback'],
        paymentLink: 'https://buy.stripe.com/test_eVa4jS6XG4uf0HyeUU',
      },
      {
        id: 'optional-psir',
        title: 'Political Science & International Relations (Optional)',
        description:
          'Concept-first pedagogy, PYQ deconstruction, map work, and answer writing bootcamps tailored for high scoring.',
        price: '₹12,499',
        level: 'Intermediate',
        hours: 120,
        features: ['Model answers', 'PYQ tracker', 'Doubt clinics'],
        paymentLink: 'https://buy.stripe.com/test_5kA03eeXGb6v1eI7su',
      },
      {
        id: 'interview-mentorship',
        title: 'Personality Test Mentorship (Interview)',
        description:
          'Panel mocks with retired bureaucrats, biodata drilling, situational judgement, and confidence framing.',
        price: '₹6,999',
        level: 'Advanced',
        hours: 30,
        features: ['Panel mocks', 'Dossier polish', '1:1 feedback'],
        paymentLink: 'https://buy.stripe.com/test_cN2g2U6XG5iH3Ww7sw',
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <Navbar onLogin={() => setAuthOpen(true)} onLogout={handleLogout} user={user} />
      <main>
        <Hero
          onCTAClick={() => {
            const el = document.getElementById('courses');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        />
        <Testimonials />
        <Courses courses={courses} user={user} />
      </main>
      <Footer />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} onSubmit={handleLogin} />
    </div>
  );
}
