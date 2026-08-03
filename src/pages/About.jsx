import React from 'react';
import { Sparkles, Users, Award, ShieldCheck, Globe } from 'lucide-react';

export const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-extrabold uppercase text-indigo-400 tracking-wider">Our Story & Vision</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
          Redefining Online Technical Education For The Modern SaaS Era.
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          EduNova was founded to bridge the gap between academic code tutorials and real-world engineering standards. We empower ambitious developers and designers to build production software with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-2">
          <p className="text-3xl font-black text-indigo-400">250,000+</p>
          <p className="text-xs text-slate-400 font-medium">Students Educated Globally</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-2">
          <p className="text-3xl font-black text-cyan-400">99.4%</p>
          <p className="text-xs text-slate-400 font-medium">Career Outcome Success</p>
        </div>
        <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-2">
          <p className="text-3xl font-black text-amber-400">1,200+</p>
          <p className="text-xs text-slate-400 font-medium">Production Masterclasses</p>
        </div>
      </div>

    </div>
  );
};
