import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useToast } from '../context/ToastContext';
import { Settings as SettingsIcon, Sun, Moon, Bell, Shield, Lock, Trash2 } from 'lucide-react';

export const Settings = () => {
  const { isDark, toggleTheme } = useTheme();
  const toast = useToast();

  const [emailNotifs, setEmailNotifs] = useState(true);
  const [courseUpdates, setCourseUpdates] = useState(true);
  const [marketingNotifs, setMarketingNotifs] = useState(false);

  const [currentPass, setCurrentPass] = useState('');
  const [newPass, setNewPass] = useState('');

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (!currentPass || !newPass) {
      toast.error('Please fill in both password fields');
      return;
    }
    toast.success('Security password updated successfully!');
    setCurrentPass('');
    setNewPass('');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <SettingsIcon className="w-6 h-6 text-indigo-400" />
          Account & Preferences Settings
        </h1>
        <p className="text-xs text-slate-400">Configure dark mode, notification alerts, and security settings.</p>
      </div>

      {/* Theme Settings Card */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-400" />}
          Platform Theme Preference
        </h3>
        <div className="flex items-center justify-between text-xs">
          <div>
            <p className="font-semibold text-slate-200">Dark Theme Mode</p>
            <p className="text-slate-400">Switch between sleek midnight dark mode and light theme.</p>
          </div>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-xl bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 font-bold hover:bg-indigo-600 hover:text-white transition-all"
          >
            {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Bell className="w-5 h-5 text-cyan-400" />
          Notification Alerts
        </h3>
        <div className="space-y-3 text-xs">
          <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer">
            <div>
              <p className="font-semibold text-slate-200">Email Digest Notifications</p>
              <p className="text-slate-400">Receive weekly learning streaks and course progress summaries.</p>
            </div>
            <input
              type="checkbox"
              checked={emailNotifs}
              onChange={(e) => setEmailNotifs(e.target.checked)}
              className="w-4 h-4 text-indigo-600 rounded"
            />
          </label>

          <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer">
            <div>
              <p className="font-semibold text-slate-200">New Lecture & Assignment Announcements</p>
              <p className="text-slate-400">Get notified when instructors publish new course modules.</p>
            </div>
            <input
              type="checkbox"
              checked={courseUpdates}
              onChange={(e) => setCourseUpdates(e.target.checked)}
              className="w-4 h-4 text-indigo-600 rounded"
            />
          </label>
        </div>
      </div>

      {/* Password & Security */}
      <form onSubmit={handlePasswordUpdate} className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Lock className="w-5 h-5 text-emerald-400" />
          Password & Security
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300">Current Password</label>
            <input
              type="password"
              value={currentPass}
              onChange={(e) => setCurrentPass(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300">New Password</label>
            <input
              type="password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="w-full px-3.5 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>
        <button
          type="submit"
          className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors"
        >
          Update Security Credentials
        </button>
      </form>

      {/* Danger Zone */}
      <div className="glass-panel p-6 rounded-3xl border border-rose-900/40 bg-rose-950/10 space-y-3">
        <h3 className="text-base font-bold text-rose-400 flex items-center gap-2">
          <Trash2 className="w-5 h-5" />
          Danger Zone
        </h3>
        <p className="text-xs text-slate-400">Permanently delete your student account and purge all certificates.</p>
        <button
          onClick={() => toast.error('Account deletion requires admin confirmation')}
          className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-colors"
        >
          Delete Account
        </button>
      </div>

    </div>
  );
};
