import React from 'react';
import { Link } from 'react-router-dom';
import { mockDashboardStats } from '../data/mockUser';
import { mockCourses } from '../data/mockCourses';
import { DollarSign, Users, BookOpen, Star, PlusCircle, ArrowUpRight, TrendingUp } from 'lucide-react';

export const InstructorDashboard = () => {
  return (
    <div className="space-y-8">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Instructor Studio Hub</h1>
          <p className="text-xs text-slate-400">Track student engagement, course sales revenue, and publish new masterclasses.</p>
        </div>

        <Link
          to="/instructor/create-course"
          className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-purple-600/20 transition-all"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Create New Course</span>
        </Link>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="glass-panel p-5 rounded-2xl border border-purple-900/40 bg-purple-950/10 space-y-2">
          <div className="flex items-center justify-between text-purple-400">
            <span className="text-xs font-bold">Total Earnings</span>
            <DollarSign className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-white">${mockDashboardStats.totalRevenue.toLocaleString()}</p>
          <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
            <TrendingUp className="w-3 h-3" /> +18.4% this month
          </span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-cyan-400">
            <span className="text-xs font-bold">Total Students</span>
            <Users className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-white">{mockDashboardStats.monthlyActiveStudents.toLocaleString()}</p>
          <span className="text-[10px] text-slate-400">Across 6 courses</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-indigo-400">
            <span className="text-xs font-bold">Published Courses</span>
            <BookOpen className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-white">{mockDashboardStats.totalCoursesCreated}</p>
          <span className="text-[10px] text-indigo-400 font-semibold">2 Drafts in review</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-amber-400">
            <span className="text-xs font-bold">Instructor Rating</span>
            <Star className="w-5 h-5 fill-amber-400" />
          </div>
          <p className="text-2xl font-black text-white">{mockDashboardStats.averageRating} / 5.0</p>
          <span className="text-[10px] text-slate-400">From 14,200 reviews</span>
        </div>
      </div>

      {/* Recent Sales Feed & Course Performance Table */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <div className="lg:col-span-8 glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white">Your Published Courses</h3>
          <div className="space-y-3">
            {mockCourses.slice(0, 4).map((c) => (
              <div key={c.id} className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <img src={c.thumbnail} alt={c.title} className="w-12 h-9 rounded-lg object-cover" />
                  <div>
                    <p className="font-bold text-white truncate max-w-xs">{c.title}</p>
                    <p className="text-slate-400">{c.studentsCount.toLocaleString()} Students • ${c.price}</p>
                  </div>
                </div>
                <Link to={`/course/${c.id}`} className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold">
                  Manage
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="text-base font-bold text-white">Live Enrollments Feed</h3>
          <div className="space-y-3">
            {mockDashboardStats.recentSales.map((s) => (
              <div key={s.id} className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">{s.studentName}</span>
                  <span className="font-bold text-emerald-400">{s.amount}</span>
                </div>
                <p className="text-[11px] text-slate-400 truncate">{s.courseTitle}</p>
                <span className="text-[10px] text-slate-500 block">{s.date}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
