import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export const EmailSuccess = () => {
  React.useEffect(() => {
    confetti({ particleCount: 80, spread: 70 });
  }, []);

  return (
    <div className="glass-panel p-8 rounded-3xl border border-emerald-500/30 text-center space-y-6 shadow-2xl">
      <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-black text-white">Email Verified!</h2>
        <p className="text-xs text-slate-300">Your account is fully activated and verified. You're ready to start learning.</p>
      </div>

      <Link
        to="/dashboard"
        className="w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg flex items-center justify-center gap-2"
      >
        <span>Go to Student Dashboard</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};
