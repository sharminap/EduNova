import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { LogIn, Mail, Lock, Sparkles, ArrowRight } from 'lucide-react';

export const Login = () => {
  const navigate = useNavigate();
  const { login, role } = useAuth();
  const toast = useToast();

  const [email, setEmail] = useState('alex.vance@edunova.com');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please enter email and password');
      return;
    }

    try {
      setLoading(true);
      await login(email, password, role);
      toast.success('Successfully logged in! Welcome back.');
      if (role === 'admin') navigate('/admin');
      else if (role === 'instructor') navigate('/instructor');
      else navigate('/dashboard');
    } catch (err) {
      toast.error(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl glow-effect">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-black text-white">Welcome Back</h2>
        <p className="text-xs text-slate-400">Log in to access your courses, streak, and certificates.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-300">Email Address</label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-300">Password</label>
            <Link to="/forgot-password" className="text-[11px] font-semibold text-indigo-400 hover:text-indigo-300">
              Forgot?
            </Link>
          </div>
          <div className="relative">
            <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-extrabold shadow-lg flex items-center justify-center gap-2 transition-all"
        >
          <span>{loading ? 'Authenticating...' : 'Sign In to EduNova'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-800">
        Don't have an account?{' '}
        <Link to="/signup" className="font-bold text-indigo-400 hover:text-indigo-300">
          Create Account
        </Link>
      </div>
    </div>
  );
};
