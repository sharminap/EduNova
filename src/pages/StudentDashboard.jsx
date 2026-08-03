import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockCourses } from '../data/mockCourses';
import { 
  Flame, BookOpen, Target, Play, Zap, Trophy
} from 'lucide-react';
import { CourseCard } from '../components/course/CourseCard';

export const StudentDashboard = () => {
  const { user } = useAuth();

  const enrolled = user?.enrolledCourses || [];
  const streak = user?.streak || 14;
  const xp = user?.xpPoints || 3450;
  const dailyGoalMinutes = user?.dailyGoalMinutes || 45;
  const dailySpentMinutes = user?.dailySpentMinutes || 32;

  const enrolledCourseObjects = enrolled.map((e) => {
    const courseObj = mockCourses.find((c) => c.id === e.courseId) || mockCourses[0];
    return { ...courseObj, userProgress: e.progress, lastAccessed: e.lastAccessed };
  });

  return (
    <div className="space-y-6">
      
      {/* Welcome Banner */}
      <div className="neu-card p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-900">
              Welcome back, {user?.name || 'Alex'}!
            </h1>
            <p className="text-sm text-slate-600">
              You're on a <strong>{streak}-day learning streak</strong>. Complete today's lesson to earn 150 bonus XP.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-4 border border-slate-300 text-center bg-white">
              <span className="text-xl font-bold text-slate-900 flex items-center justify-center gap-1">
                <Flame className="w-4 h-4 text-slate-600" />{streak}
              </span>
              <span className="text-xs text-slate-500 uppercase">Streak</span>
            </div>
            <div className="p-4 border border-slate-300 text-center bg-white">
              <span className="text-xl font-bold text-slate-900 flex items-center justify-center gap-1">
                <Zap className="w-4 h-4 text-slate-600" />{xp}
              </span>
              <span className="text-xs text-slate-500 uppercase">XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="neu-card p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Target className="w-4 h-4" /> Daily Goal
            </span>
            <span className="text-sm font-bold">{dailySpentMinutes} / {dailyGoalMinutes} mins</span>
          </div>
          <div className="w-full h-2 bg-slate-200 overflow-hidden">
            <div className="h-full bg-blue-600" style={{ width: `${Math.min(100, (dailySpentMinutes / dailyGoalMinutes) * 100)}%` }} />
          </div>
        </div>

        <div className="neu-card p-5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Active Courses
            </span>
            <span className="text-sm font-bold">{enrolled.length}</span>
          </div>
          <p className="text-xs text-slate-500 mt-2">Completed: <strong>{user?.completedCoursesCount || 3}</strong> • Certificates: <strong>{user?.certificatesCount || 3}</strong></p>
        </div>

        <div className="neu-card p-5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-slate-700 flex items-center gap-2">
              <Trophy className="w-4 h-4" /> Rank
            </span>
            <span className="text-sm font-bold">Top 5%</span>
          </div>
          <p className="text-xs text-slate-700 mt-2">{user?.level || 'Intermediate Developer'}</p>
        </div>
      </div>

      {/* Continue Learning */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Continue Learning</h2>
          <Link to="/dashboard/my-courses" className="text-sm text-blue-600 hover:underline">View All</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {enrolledCourseObjects.map((c) => (
            <div key={c.id} className="neu-card p-5 flex flex-col justify-between space-y-4">
              <div className="flex items-start gap-4">
                <img src={c.thumbnail} alt={c.title} className="w-24 h-16 object-cover rounded shadow-sm shrink-0" />
                <div className="space-y-1 min-w-0">
                  <span className="text-xs font-bold uppercase text-slate-500">{c.categoryName}</span>
                  <h3 className="text-sm font-bold text-slate-900 truncate">{c.title}</h3>
                  <p className="text-xs text-slate-600">by <strong>{c.instructor?.name}</strong></p>
                  <p className="text-xs text-slate-400">Last accessed {c.lastAccessed}</p>
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-200">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600">Course Progress</span>
                  <span className="font-bold text-slate-900">{c.userProgress}% completed</span>
                </div>
                <div className="w-full h-2 bg-slate-200 overflow-hidden">
                  <div className="h-full bg-blue-600" style={{ width: `${c.userProgress}%` }} />
                </div>
                <Link to={`/learn/${c.id}`} className="w-full mt-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold flex items-center justify-center gap-2">
                  <Play className="w-4 h-4" /> Resume Lecture
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-slate-900">Recommended For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCourses.slice(2, 5).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};
