import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { RoleSwitcher } from '../components/common/RoleSwitcher';
import {
  Video, PlusCircle, BarChart3, Star, Sparkles, Menu, X, ArrowLeft, LogOut, BookOpen
} from 'lucide-react';

export const InstructorLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = [
    { name: 'Instructor Dashboard', path: '/instructor', icon: Video },
    { name: 'Create New Course', path: '/instructor/create-course', icon: PlusCircle },
    { name: 'My Published Courses', path: '/instructor/courses', icon: BookOpen },
    { name: 'Revenue & Analytics', path: '/instructor/analytics', icon: BarChart3 },
    { name: 'Course Reviews', path: '/instructor/reviews', icon: Star },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-64 bg-purple-950/20 backdrop-blur-xl border-r border-purple-900/30 flex flex-col justify-between transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-5 space-y-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                  <Video className="w-4 h-4 text-purple-400" />
                </div>
              </div>
              <span className="text-lg font-extrabold bg-gradient-to-r from-white via-purple-200 to-pink-300 bg-clip-text text-transparent">
                Instructor Studio
              </span>
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-1 text-slate-400">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-1">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-purple-600/30 text-purple-200 border border-purple-500/40'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-purple-400' : 'text-slate-400'}`} />
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-5 border-t border-purple-900/30 space-y-3">
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5"
          >
            <ArrowLeft className="w-4 h-4" />
            Exit Studio
          </button>
          <button
            onClick={logout}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-500/10"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 h-16 bg-slate-900/80 backdrop-blur-xl border-b border-purple-900/30 px-4 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-slate-400">
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-base font-bold text-white">Instructor Control Studio</h1>
          </div>
          <div className="flex items-center gap-3">
            <RoleSwitcher />
            <img src={user?.avatar} alt={user?.name} className="w-8 h-8 rounded-lg object-cover ring-2 ring-purple-500" />
          </div>
        </header>

        <main className="p-4 sm:p-8 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>

    </div>
  );
};
