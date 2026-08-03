import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const OTPVerification = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [otp, setOtp] = useState(['1', '2', '3', '4', '5', '6']);

  const handleChange = (val, idx) => {
    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullOtp = otp.join('');
    if (fullOtp.length < 6) {
      toast.error('Please enter complete 6-digit OTP');
      return;
    }
    toast.success('Email verified successfully!');
    navigate('/email-success');
  };

  return (
    <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6 shadow-2xl text-center">
      <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 mx-auto flex items-center justify-center border border-indigo-500/30">
        <ShieldCheck className="w-6 h-6" />
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-black text-white">Verify Your Email</h2>
        <p className="text-xs text-slate-400">We've sent a 6-digit verification code to your email.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex items-center justify-center gap-2">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, idx)}
              className="w-10 h-12 text-center text-lg font-bold bg-slate-900 border border-slate-800 rounded-xl text-white focus:border-indigo-500 focus:outline-none"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg flex items-center justify-center gap-2"
        >
          <span>Verify Code</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
