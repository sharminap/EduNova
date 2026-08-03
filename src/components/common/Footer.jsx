import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Send, ShieldCheck, Heart } from 'lucide-react';
import { FaGithub, FaXTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa6';
import { useToast } from '../../context/ToastContext';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    toast.success('Thank you for subscribing to EduNova Insider!');
    setEmail('');
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-sm">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black text-white">
                EduNova
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm text-xs sm:text-sm leading-relaxed">
              Empowering global professionals and aspiring creators through master-class engineering, design, and AI education.
            </p>
            
            {/* Newsletter Subscription Box */}
            <form onSubmit={handleSubscribe} className="space-y-2 pt-2">
              <span className="text-xs font-bold text-slate-200 block">
                Subscribe to weekly Tech & AI Insights
              </span>
              <div className="flex items-center max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your work email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-l-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-r-xl text-xs font-bold transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-4">
              Explore Platform
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/courses" className="hover:text-emerald-400 transition-colors">All Masterclasses</Link></li>
              <li><Link to="/explore?category=web-dev" className="hover:text-emerald-400 transition-colors">Web Architecture</Link></li>
              <li><Link to="/explore?category=ai-ml" className="hover:text-emerald-400 transition-colors">Generative AI & LLMs</Link></li>
              <li><Link to="/explore?category=design" className="hover:text-emerald-400 transition-colors">SaaS UI/UX Systems</Link></li>
              <li><Link to="/explore?category=cloud-devops" className="hover:text-emerald-400 transition-colors">DevOps & Cloud</Link></li>
              <li><Link to="/instructors" className="hover:text-emerald-400 transition-colors">Top Instructors</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-4">
              Company & Impact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Our Mission</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Support</Link></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers & Hiring</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Enterprise Licensing</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Student Discounts</a></li>
            </ul>
          </div>

          {/* Legal & Social Column */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-wider uppercase mb-4">
              Trust & Legal
            </h4>
            <ul className="space-y-2.5 text-xs mb-6">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Security & SOC2</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Cookie Preferences</a></li>
            </ul>

            <div className="flex items-center gap-3">
              <a href="#" className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="flex items-center gap-1 text-slate-500">
            © 2026 EduNova LMS Inc. Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for global creators.
          </p>
          <div className="flex items-center gap-4 text-slate-500">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              Encrypted & Verified Platform
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
