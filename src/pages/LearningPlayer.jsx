import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockCourses } from '../data/mockCourses';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { 
  Play, CheckCircle, ChevronLeft, ChevronRight, BookOpen, Download, 
  HelpCircle, MessageSquare, Menu, X, ArrowLeft, Award, Sparkles, FileText, CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const LearningPlayer = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user, updateCourseProgress } = useAuth();
  const toast = useToast();

  const [course, setCourse] = useState(null);
  const [currentModuleIdx, setCurrentModuleIdx] = useState(0);
  const [currentLessonIdx, setCurrentLessonIdx] = useState(0);
  const [activeTab, setActiveTab] = useState('notes'); // 'notes' | 'resources' | 'quiz' | 'discussion'
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Quiz state
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Discussion state
  const [comments, setComments] = useState([
    { id: 1, author: 'Jordan Taylor', time: '2 hours ago', text: 'How do we configure CORS headers when deploying the Node server to AWS ECS?' },
    { id: 2, author: 'Dr. Sarah Jenkins', time: '1 hour ago', text: 'Great question Jordan! Ensure you use the helmet middleware with origin whitelisting as shown in Lesson 10.' }
  ]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const found = mockCourses.find((c) => c.id === courseId) || mockCourses[0];
    setCourse(found);
  }, [courseId]);

  if (!course) return null;

  const modules = course.curriculum || [];
  const currentModule = modules[currentModuleIdx] || modules[0];
  const lessons = currentModule?.lessons || [];
  const currentLesson = lessons[currentLessonIdx] || lessons[0];

  // User completion tracking
  const userEnrolled = user?.enrolledCourses?.find((c) => c.courseId === course.id);
  const completedLessons = userEnrolled?.completedLessons || ['les-1'];
  const progressPercent = userEnrolled?.progress || 35;

  const isCurrentCompleted = completedLessons.includes(currentLesson?.id);

  const handleMarkComplete = () => {
    updateCourseProgress(course.id, currentLesson.id);
    toast.success(`Marked "${currentLesson.title}" as completed!`);

    // Trigger celebratory confetti if progress reached 100%
    if (progressPercent >= 80) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleNextLesson = () => {
    if (currentLessonIdx < lessons.length - 1) {
      setCurrentLessonIdx(currentLessonIdx + 1);
    } else if (currentModuleIdx < modules.length - 1) {
      setCurrentModuleIdx(currentModuleIdx + 1);
      setCurrentLessonIdx(0);
    } else {
      toast.success('Congratulations! You completed all lessons in this course!');
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonIdx > 0) {
      setCurrentLessonIdx(currentLessonIdx - 1);
    } else if (currentModuleIdx > 0) {
      setCurrentModuleIdx(currentModuleIdx - 1);
      setCurrentLessonIdx(0);
    }
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments([
      ...comments,
      { id: Date.now(), author: user?.name || 'You', time: 'Just now', text: newComment }
    ]);
    setNewComment('');
    toast.success('Question posted to Q&A discussion board!');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      
      {/* Top Header & Progress Bar */}
      <header className="h-16 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between z-30 sticky top-0">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/dashboard/my-courses')}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1 text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">My Courses</span>
          </button>
          <div className="h-4 w-px bg-slate-800" />
          <h1 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
            {course.title}
          </h1>
        </div>

        {/* Visual Progress Bar */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[11px] font-bold text-indigo-400">{progressPercent}% Completed</span>
            <div className="w-36 h-2 bg-slate-800 rounded-full overflow-hidden mt-0.5">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Toggle Curriculum Sidebar"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Main LMS Workspace */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Main Content Area (Video + Tabs) */}
        <div className="flex-1 flex flex-col overflow-y-auto min-w-0">
          
          {/* HD Video Player */}
          <div className="bg-black aspect-video w-full max-h-[60vh] relative flex items-center justify-center border-b border-slate-800">
            {currentLesson?.type === 'video' ? (
              <video
                src={currentLesson.videoUrl || 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="p-8 text-center space-y-4 max-w-md">
                <FileText className="w-16 h-16 text-indigo-400 mx-auto animate-pulse" />
                <h3 className="text-lg font-bold text-white">{currentLesson?.title}</h3>
                <p className="text-xs text-slate-400">PDF Guide & Interactive Hands-on Material</p>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); toast.success('Downloading module PDF package...'); }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Project Guide PDF</span>
                </a>
              </div>
            )}
          </div>

          {/* Lesson Title & Completion Controls Bar */}
          <div className="p-4 sm:p-6 bg-slate-900/60 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-extrabold text-indigo-400 uppercase tracking-wider">
                {currentModule?.title}
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-white">
                {currentLesson?.title}
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrevLesson}
                className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <button
                onClick={handleMarkComplete}
                className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                  isCurrentCompleted
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{isCurrentCompleted ? 'Completed ✓' : 'Mark Complete'}</span>
              </button>

              <button
                onClick={handleNextLesson}
                className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="p-4 sm:p-6 space-y-6 flex-1">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              {[
                { id: 'notes', label: 'Lesson Notes', icon: BookOpen },
                { id: 'resources', label: 'Resources & PDFs', icon: Download },
                { id: 'quiz', label: 'Knowledge Quiz', icon: HelpCircle },
                { id: 'discussion', label: 'Q&A Discussion', icon: MessageSquare },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeTab === tab.id
                        ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Contents */}
            {activeTab === 'notes' && (
              <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <h3 className="text-base font-bold text-white">Lesson Summary & Key Code Concepts</h3>
                <p>In this lesson, we break down how production React 19 server components stream asynchronous data directly to the client without requiring client-side bundle inflation.</p>
                <div className="p-4 rounded-xl bg-slate-950 font-mono text-indigo-300 border border-slate-800 text-xs overflow-x-auto">
                  {`// React 19 Server Action Example
export async function updateProfile(formData) {
  'use server';
  const name = formData.get('name');
  await db.user.update({ where: { id: userId }, data: { name } });
}`}
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-white">Downloadable Materials</h3>
                <div className="p-4 rounded-xl glass-panel border border-slate-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-cyan-400" />
                    <div>
                      <p className="font-bold text-white">Lesson-12-Source-Code.zip</p>
                      <p className="text-slate-400">Contains Express controller boilerplate & Mongoose models</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toast.success('Downloading Source Code repository...')}
                    className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg"
                  >
                    Download (2.4 MB)
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'quiz' && (
              <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
                <h3 className="text-base font-bold text-white">Module Knowledge Quiz</h3>
                <p className="text-xs text-slate-400">Test your understanding before advancing to the next module.</p>
                
                <div className="space-y-3 pt-2">
                  <p className="text-sm font-semibold text-slate-200">
                    Q1: Which directive is required at the top of a React 19 Server Action file?
                  </p>

                  {['"use client"', '"use server"', '"use strict"', 'import { action } from "react"'].map((opt, idx) => (
                    <button
                      key={opt}
                      onClick={() => setQuizAnswer(idx)}
                      className={`w-full p-3 text-left rounded-xl border text-xs font-medium transition-all ${
                        quizAnswer === idx
                          ? 'bg-indigo-600/30 border-indigo-500 text-white'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-white/5'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}

                  <button
                    onClick={() => {
                      if (quizAnswer === 1) {
                        toast.success('Correct! 100% Score on Quiz!');
                        setQuizSubmitted(true);
                        confetti({ particleCount: 50 });
                      } else {
                        toast.error('Incorrect. Try again!');
                      }
                    }}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg"
                  >
                    Submit Quiz Answer
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'discussion' && (
              <div className="space-y-4">
                <form onSubmit={handlePostComment} className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Ask a question or share feedback..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="flex-1 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                  <button type="submit" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl">
                    Post
                  </button>
                </form>

                <div className="space-y-3">
                  {comments.map((c) => (
                    <div key={c.id} className="glass-panel p-4 rounded-xl border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white">{c.author}</span>
                        <span className="text-slate-500">{c.time}</span>
                      </div>
                      <p className="text-xs text-slate-300">{c.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Right Collapsible Curriculum Sidebar */}
        {sidebarOpen && (
          <aside className="w-80 bg-slate-900/90 border-l border-slate-800 overflow-y-auto flex flex-col justify-between shrink-0">
            <div className="p-4 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-sm font-bold text-white">Course Curriculum</h3>
                <span className="text-[11px] font-semibold text-indigo-400">
                  {modules.length} Modules
                </span>
              </div>

              <div className="space-y-4">
                {modules.map((mod, mIdx) => (
                  <div key={mod.id} className="space-y-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {mod.title}
                    </p>

                    <div className="space-y-1">
                      {mod.lessons?.map((les, lIdx) => {
                        const isCurrent = mIdx === currentModuleIdx && lIdx === currentLessonIdx;
                        const isDone = completedLessons.includes(les.id);

                        return (
                          <button
                            key={les.id}
                            onClick={() => {
                              setCurrentModuleIdx(mIdx);
                              setCurrentLessonIdx(lIdx);
                            }}
                            className={`w-full p-2.5 rounded-xl text-left text-xs flex items-center justify-between transition-all ${
                              isCurrent
                                ? 'bg-indigo-600/30 text-indigo-200 border border-indigo-500/40 font-bold'
                                : 'text-slate-300 hover:bg-white/5'
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              {isDone ? (
                                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                              ) : (
                                <Play className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-indigo-400 fill-indigo-400' : 'text-slate-500'}`} />
                              )}
                              <span className="truncate">{les.title}</span>
                            </div>
                            <span className="text-[10px] text-slate-500 ml-2 shrink-0">{les.duration}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certificate Unlock Banner */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/60">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-amber-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Course Certificate</p>
                  <p className="text-[10px] text-slate-400">Complete all lessons to download</p>
                </div>
              </div>
            </div>
          </aside>
        )}

      </div>

    </div>
  );
};
