import React from 'react';
import { mockAdminStats } from '../data/mockUser';
import { Shield, Users, BookOpen, DollarSign, Activity, CheckCircle, AlertTriangle } from 'lucide-react';

export const AdminDashboard = () => {
  return (
    <div className="space-y-8">
      
      {/* Top Banner */}
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Shield className="w-6 h-6 text-amber-400" />
          EduNova Platform Control Center
        </h1>
        <p className="text-xs text-slate-400">Monitor system health, manage platform users, approve courses, and inspect global analytics.</p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="glass-panel p-5 rounded-2xl border border-amber-900/40 bg-amber-950/10 space-y-2">
          <div className="flex items-center justify-between text-amber-400">
            <span className="text-xs font-bold">Total Platform Volume</span>
            <DollarSign className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-white">{mockAdminStats.platformRevenue}</p>
          <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
            +24% vs last quarter
          </span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-cyan-400">
            <span className="text-xs font-bold">Total Registered Users</span>
            <Users className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-white">{mockAdminStats.totalUsers.toLocaleString()}</p>
          <span className="text-[10px] text-slate-400">{mockAdminStats.totalInstructors} Instructors</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-indigo-400">
            <span className="text-xs font-bold">Total Masterclasses</span>
            <BookOpen className="w-5 h-5" />
          </div>
          <p className="text-2xl font-black text-white">{mockAdminStats.totalCourses.toLocaleString()}</p>
          <span className="text-[10px] text-amber-400 font-semibold">{mockAdminStats.pendingCourseApprovals} Pending Approval</span>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-emerald-400">
            <span className="text-xs font-bold">System Health</span>
            <Activity className="w-5 h-5" />
          </div>
          <p className="text-lg font-bold text-white">{mockAdminStats.systemStatus}</p>
          <span className="text-[10px] text-slate-400">All services operational</span>
        </div>
      </div>

      {/* User Management Overview */}
      <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white">Recent Registered Platform Users</h3>
        <div className="space-y-3">
          {mockAdminStats.recentUsers.map((u) => (
            <div key={u.id} className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-white">{u.name}</p>
                <p className="text-slate-400">{u.email} • Joined {u.joined}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold ${u.role === 'Instructor' ? 'bg-purple-500/20 text-purple-300' : 'bg-indigo-500/20 text-indigo-300'}`}>
                  {u.role}
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  {u.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
