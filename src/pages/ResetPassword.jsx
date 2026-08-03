import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';
import { Lock, ArrowRight } from 'lucide-react';

export const ResetPassword = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }
    toast.success('Password reset successfully! Please log in.');
    navigate('/login');
  };

  return (
    <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-black text-white">Create New Password</h2>
        <p className="text-xs text-slate-400">Set a secure password for your EduNova account.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-300">New Password</label>
          <div className="relative">
            <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg flex items-center justify-center gap-2"
        >
          <span>Update Password</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
