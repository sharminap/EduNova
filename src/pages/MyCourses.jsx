import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockCourses } from '../data/mockCourses';
import { Play, CheckCircle, BookOpen, Clock, Search } from 'lucide-react';

export const MyCourses = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'in-progress' | 'completed'
  const [search, setSearch] = useState('');

  const enrolled = user?.enrolledCourses || [];
  
  const enrolledCourses = enrolled.map((e) => {
    const courseObj = mockCourses.find((c) => c.id === e.courseId) || mockCourses[0];
    return { ...courseObj, userProgress: e.progress, lastAccessed: e.lastAccessed };
  });

  const filtered = enrolledCourses.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase());
    if (activeTab === 'in-progress') return matchesSearch && c.userProgress < 100;
    if (activeTab === 'completed') return matchesSearch && c.userProgress === 100;
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">My Enrolled Courses</h1>
          <p className="text-xs text-slate-400">Track your active learning journey and continue where you left off.</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 self-start">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${activeTab === 'all' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
          >
            All ({enrolledCourses.length})
          </button>
          <button
            onClick={() => setActiveTab('in-progress')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${activeTab === 'in-progress' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
          >
            In Progress
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${activeTab === 'completed' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Courses List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((c) => (
          <div key={c.id} className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex gap-4">
              <img src={c.thumbnail} alt={c.title} className="w-28 h-20 rounded-xl object-cover ring-1 ring-slate-800 shrink-0" />
              <div className="space-y-1 min-w-0">
                <span className="text-[10px] font-bold text-indigo-400 uppercase">{c.categoryName}</span>
                <h3 className="text-sm font-bold text-white line-clamp-2">{c.title}</h3>
                <p className="text-xs text-slate-400">{c.instructor?.name}</p>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Completion</span>
                <span className="font-bold text-indigo-400">{c.userProgress}%</span>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-500 transition-all duration-300" style={{ width: `${c.userProgress}%` }} />
              </div>
              <Link
                to={`/learn/${c.id}`}
                className="w-full mt-2 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Continue Course</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
