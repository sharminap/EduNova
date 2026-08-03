import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, ArrowRight, Play, Star, ShieldCheck, Users, BookOpen, Award, 
  CheckCircle2, ChevronRight, HelpCircle, Code, Cpu, Palette, BarChart, Cloud, 
  Smartphone, Briefcase, Shield, Zap
} from 'lucide-react';
import { mockCourses, mockCategories, mockInstructors } from '../data/mockCourses';
import { CourseCard } from '../components/course/CourseCard';
import { useToast } from '../context/ToastContext';

export const Home = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { label: 'Active Learners', value: '250,000+', icon: Users, color: 'text-emerald-600 dark:text-emerald-400' },
    { label: 'Master Courses', value: '1,200+', icon: BookOpen, color: 'text-sky-600 dark:text-sky-400' },
    { label: 'Career Success Rate', value: '99.4%', icon: Award, color: 'text-amber-500' },
    { label: 'Average Rating', value: '4.9 / 5.0', icon: Star, color: 'text-emerald-500' },
  ];

  const companies = ['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Stripe', 'Spotify', 'Airbnb'];

  const benefits = [
    { title: 'Learn from Top 0.1% Engineers', desc: 'Curriculum authored exclusively by Staff Engineers, Principal Architects, and Industry Pioneers.', icon: Zap },
    { title: 'Interactive LMS Video Player', desc: 'Realtime progress tracking, inline code notes, downloadable PDF guides, and knowledge quizzes.', icon: Play },
    { title: 'Verified Credential Certificates', desc: 'Recruiter-verifiable certificates integrated with LinkedIn and company credential checkers.', icon: ShieldCheck },
    { title: 'Project-Driven Skill Roadmaps', desc: 'Build production-ready SaaS apps, AI pipelines, and cloud infrastructures to showcase in your portfolio.', icon: Code },
  ];

  const faqs = [
    { q: 'How does EduNova compare to Udemy or Coursera?', a: 'EduNova focuses exclusively on premium, high-impact tech and design curricula with zero fluff. Courses are updated monthly by active Silicon Valley engineers.' },
    { q: 'Can I access courses without an active subscription?', a: 'Yes! All courses can be purchased individually with lifetime access, or unlocked via EduNova All-Access Pass.' },
    { q: 'What happens if I need help with a coding assignment?', a: 'Every lecture includes an interactive Q&A discussion board where instructors and teaching assistants reply within 24 hours.' },
    { q: 'Do you offer refunds if I am not satisfied?', a: 'Yes, we offer a 30-day money-back guarantee with zero questions asked.' },
  ];

  const categoryIconMap = {
    'Code': Code,
    'Cpu': Cpu,
    'Palette': Palette,
    'BarChart': BarChart,
    'Cloud': Cloud,
    'Smartphone': Smartphone,
    'Briefcase': Briefcase,
    'Shield': Shield
  };

  return (
    <div className="space-y-20 pb-16 overflow-hidden">

      {/* ================================================== */}
      {/* HERO SECTION: Fits exactly inside 100vh on Desktop */}
      {/* ================================================== */}
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between pt-6 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Soft Minimalist Glow Background */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-r from-emerald-400/10 via-sky-400/10 to-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto">
          
          {/* Left Column: Minimalist Headline & CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold"
            >
              <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>EduNova 2.0 • Minimalist SaaS Learning Experience</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white"
            >
              Learn Real <span className="text-emerald-600 dark:text-emerald-400">Engineering & Design</span> From Industry Leaders.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed"
            >
              Join 250,000+ developers, AI engineers, and UI designers building production SaaS applications with world-class mentors.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                to="/explore"
                className="px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md flex items-center gap-2 hover:scale-[1.02] transition-all"
              >
                <span>Explore Masterclasses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/course/course-1"
                className="px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:text-emerald-600 font-bold text-sm flex items-center gap-2 border border-slate-200 dark:border-slate-800 neu-card transition-all"
              >
                <Play className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span>Watch Platform Tour</span>
              </Link>
            </motion.div>

            {/* Social Trust Line */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2 overflow-hidden">
                {mockInstructors.map((inst) => (
                  <img
                    key={inst.id}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900 object-cover"
                    src={inst.avatar}
                    alt={inst.name}
                  />
                ))}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Mentors from <span className="text-slate-900 dark:text-white font-bold">Google, Meta, OpenAI & Stripe</span>
              </p>
            </div>

          </div>

          {/* Right Column: Clean White Neumorphic Preview Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="neu-card p-5 rounded-3xl space-y-4 relative z-10 bg-white dark:bg-slate-900">
              
              <div className="relative aspect-video rounded-2xl overflow-hidden group bg-slate-100 dark:bg-slate-800">
                <img
                  src={mockCourses[0].thumbnail}
                  alt={mockCourses[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                  <Link
                    to="/course/course-1"
                    className="w-13 h-13 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  >
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </Link>
                </div>

                <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Featured Masterclass
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">Web Architecture</span>
                  <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>4.9 (3.8k)</span>
                  </div>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1">
                  {mockCourses[0].title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                  {mockCourses[0].subtitle}
                </p>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Platform Statistics Strip */}
        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="flex items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className={`p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 ${s.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-lg font-black text-slate-900 dark:text-white leading-none">{s.value}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold mt-1">{s.label}</p>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* TRUSTED COMPANIES TICKER */}
      <section className="border-y border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-3">
          <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            Engineers & Designers From Global Companies Learn On EduNova
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
            {companies.map((c) => (
              <span key={c} className="text-base sm:text-xl font-black tracking-tight text-slate-500 dark:text-slate-400 cursor-default">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR COURSES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-extrabold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">Curated Catalog</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Popular Masterclasses</h2>
          </div>
          <Link
            to="/courses"
            className="flex items-center gap-1 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700"
          >
            <span>View All Courses</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* TOP CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-extrabold uppercase text-sky-600 dark:text-sky-400 tracking-wider">Explore Tracks</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Top Learning Categories</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mockCategories.map((cat) => {
            const IconComponent = categoryIconMap[cat.icon] || Code;
            return (
              <Link
                key={cat.id}
                to={`/explore?category=${cat.id}`}
                className="group neu-card p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{cat.count} Master Courses</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* LEARNING BENEFITS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="neu-card p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-extrabold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">The EduNova Standard</span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Why Top Innovators Choose EduNova</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Clean, distraction-free learning environments built specifically for acquiring high-value technical and visual product skills.
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
              >
                <span>Start Free Trial Today</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{b.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{b.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-1">
          <span className="text-xs font-extrabold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">Got Questions?</span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={faq.q}
              className="rounded-2xl neu-card border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-5 text-left font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between text-sm sm:text-base"
              >
                <span>{faq.q}</span>
                <ChevronRight className={`w-5 h-5 text-emerald-600 transition-transform ${activeFaq === idx ? 'rotate-90' : ''}`} />
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
