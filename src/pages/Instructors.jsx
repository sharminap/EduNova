import React from 'react';
import { mockInstructors } from '../data/mockCourses';
import { Star, Users, BookOpen, CheckCircle2 } from 'lucide-react';

export const Instructors = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-extrabold text-purple-400 uppercase tracking-wider">World-Class Educators</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Learn From Industry Leaders</h1>
        <p className="text-sm text-slate-400">Our instructors are active Staff Engineers, AI Pioneers, and Design Directors with proven track records.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mockInstructors.map((inst) => (
          <div key={inst.id} className="glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col sm:flex-row gap-6 items-start">
            <img src={inst.avatar} alt={inst.name} className="w-24 h-24 rounded-2xl object-cover ring-2 ring-purple-500/50 shrink-0" />
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">{inst.name}</h3>
                  {inst.verified && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                </div>
                <p className="text-xs font-medium text-purple-400">{inst.title}</p>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{inst.bio}</p>
              <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800">
                <span className="flex items-center gap-1 text-amber-400 font-bold"><Star className="w-3.5 h-3.5 fill-amber-400" /> {inst.rating}</span>
                <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" /> {inst.studentsCount.toLocaleString()}</span>
                <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> {inst.coursesCount} Courses</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
