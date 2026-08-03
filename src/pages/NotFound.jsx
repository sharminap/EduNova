import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-4">
      <HelpCircle className="w-16 h-16 text-indigo-400 animate-bounce" />
      <h1 className="text-5xl font-black text-white">404</h1>
      <h2 className="text-xl font-bold text-slate-200">Page Not Found</h2>
      <p className="text-xs text-slate-400 max-w-sm">The route you requested does not exist or has been moved.</p>
      <Link
        to="/"
        className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to EduNova Home</span>
      </Link>
    </div>
  );
};
