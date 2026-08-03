import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Sparkles, ArrowLeft } from 'lucide-react';

export const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-between p-4 sm:p-6 relative selection:bg-blue-500 selection:text-white">

      <header className="max-w-7xl mx-auto w-full flex items-center justify-between z-10">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">EduNova</span>
        </Link>
        <Link to="/" className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-600 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to Home</span>
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center py-10 z-10 w-full">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </main>

      <footer className="text-center text-xs text-slate-400 z-10">
        © 2026 EduNova. All rights reserved.
      </footer>
    </div>
  );
};
