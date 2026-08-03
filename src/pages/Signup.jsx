import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

export const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const toast = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error('Please complete all registration fields');
      return;
    }

    try {
      setLoading(true);
      await signup(name, email, password, role);
      toast.success('Account created! Please verify your email OTP.');
      navigate('/otp-verification');
    } catch (err) {
      toast.error(err.message || 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl glow-effect">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-black text-white">Create EduNova Account</h2>
        <p className="text-xs text-slate-400">Join 250,000+ developers mastering production skills.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Role Selector Toggle */}
        <div className="flex items-center gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${role === 'student' ? 'bg-indigo-600 text-white' : 'text-slate-400'}`}
          >
            I'm a Student
          </button>
          <button
            type="button"
            onClick={() => setRole('instructor')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${role === 'instructor' ? 'bg-purple-600 text-white' : 'text-slate-400'}`}
          >
            I'm an Instructor
          </button>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-300">Full Name</label>
          <div className="relative">
            <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Alex Vance"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-300">Email Address</label>
          <div className="relative">
            <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              placeholder="alex@edunova.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-300">Password</label>
          <div className="relative">
            <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="password"
              placeholder="At least 6 characters"
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
          <span>{loading ? 'Creating Account...' : 'Create Account'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>

      <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-800">
        Already have an account?{' '}
        <Link to="/login" className="font-bold text-indigo-400 hover:text-indigo-300">
          Sign In
        </Link>
      </div>
    </div>
  );
};
