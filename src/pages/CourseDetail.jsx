import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { mockCourses } from '../data/mockCourses';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { 
  Star, Clock, Users, Play, CheckCircle2, ChevronDown, Award, 
  FileText, ShieldCheck, Heart, Share2, Globe, Calendar, ArrowRight
} from 'lucide-react';
import { CourseCard } from '../components/course/CourseCard';

export const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, user, toggleWishlist } = useAuth();
  const toast = useToast();

  const [course, setCourse] = useState(null);
  const [activeModule, setActiveModule] = useState('mod-1');
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  useEffect(() => {
    const found = mockCourses.find((c) => c.id === id) || mockCourses[0];
    setCourse(found);
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) return null;

  const isEnrolled = user?.enrolledCourses?.some((c) => c.courseId === course.id);
  const isWishlisted = user?.wishlist?.includes(course.id);

  const handleEnrollClick = () => {
    if (!isAuthenticated) {
      toast.info('Please log in or sign up to enroll in this masterclass');
      navigate('/login');
      return;
    }

    if (isEnrolled) {
      navigate(`/learn/${course.id}`);
    } else {
      toast.success(`Successfully enrolled in "${course.title.substring(0, 30)}..."!`);
      navigate(`/learn/${course.id}`);
    }
  };

  const handleWishlistToggle = () => {
    if (!isAuthenticated) {
      toast.info('Please log in to save to wishlist');
      navigate('/login');
      return;
    }
    const added = toggleWishlist(course.id);
    if (added) {
      toast.success('Course added to wishlist');
    } else {
      toast.info('Course removed from wishlist');
    }
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Course link copied to clipboard!');
  };

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info Header */}
          <div className="lg:col-span-8 space-y-4">
            
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold uppercase tracking-wider">
                {course.categoryName}
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium">
                {course.level}
              </span>
              {course.badge && (
                <span className="px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
                  {course.badge}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-snug">
              {course.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {course.subtitle}
            </p>

            {/* Metrics Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-1 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>{course.rating}</span>
                <span className="text-slate-500">({course.ratingCount} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-slate-400" />
                <span>{course.studentsCount?.toLocaleString()} Enrolled Students</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-indigo-400" />
                <span>Updated {course.updatedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>{course.language}</span>
              </div>
            </div>

            {/* Instructor Header Line */}
            <div className="flex items-center gap-3 pt-2">
              <img
                src={course.instructor?.avatar}
                alt={course.instructor?.name}
                className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-500"
              />
              <div>
                <p className="text-xs text-slate-400">Created by</p>
                <p className="text-sm font-bold text-white">{course.instructor?.name}</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Body Grid with Sticky Right Pricing Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Course Details */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* What You Will Learn Card */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-indigo-400" />
              What You Will Master in This Course
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
              {course.whatYouWillLearn?.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum Module Accordion */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Course Curriculum</h2>
              <span className="text-xs text-slate-400">
                {course.curriculum?.length || 3} Modules • {course.duration} Total
              </span>
            </div>

            <div className="space-y-3">
              {course.curriculum?.map((mod) => (
                <div key={mod.id} className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
                  <button
                    onClick={() => setActiveModule(activeModule === mod.id ? null : mod.id)}
                    className="w-full p-4 text-left font-bold text-white flex items-center justify-between bg-slate-900/60 text-sm"
                  >
                    <span>{mod.title}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-normal text-slate-400">{mod.duration}</span>
                      <ChevronDown className={`w-4 h-4 text-indigo-400 transition-transform ${activeModule === mod.id ? 'rotate-180' : ''}`} />
                    </div>
                  </button>

                  {activeModule === mod.id && (
                    <div className="p-4 space-y-2.5 border-t border-slate-800 bg-slate-950/40">
                      {mod.lessons?.map((les) => (
                        <div key={les.id} className="flex items-center justify-between text-xs text-slate-300 hover:text-white p-2 rounded-xl hover:bg-white/5 transition-colors">
                          <div className="flex items-center gap-3">
                            <Play className="w-4 h-4 text-indigo-400" />
                            <span>{les.title}</span>
                            {les.isFree && (
                              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                                Free Preview
                              </span>
                            )}
                          </div>
                          <span className="text-slate-500">{les.duration}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white">Course Requirements</h2>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1.5">
              {course.requirements?.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Instructor Bio Card */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
            <h2 className="text-lg font-bold text-white">Instructor Profile</h2>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <img
                src={course.instructor?.avatar}
                alt={course.instructor?.name}
                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-indigo-500 shrink-0"
              />
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white">{course.instructor?.name}</h3>
                <p className="text-xs text-indigo-400 font-medium">{course.instructor?.title}</p>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">{course.instructor?.bio}</p>
              </div>
            </div>
          </div>

          {/* Student Reviews */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">Student Reviews</h2>
            <div className="space-y-3">
              {course.reviews?.map((rev) => (
                <div key={rev.id} className="glass-panel p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img src={rev.userAvatar} alt={rev.userName} className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <p className="text-xs font-bold text-white">{rev.userName}</p>
                        <p className="text-[10px] text-slate-400">{rev.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center text-amber-400 text-xs font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" />
                      <span>{rev.rating}.0</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{rev.comment}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Sticky Sidebar Card */}
        <div className="lg:col-span-4 lg:-mt-64 relative z-20">
          <div className="glass-panel p-6 rounded-3xl border border-white/15 shadow-2xl space-y-6 sticky top-24 glow-effect">
            
            {/* Video Thumbnail / Preview Player */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900">
              {isPlayingPreview ? (
                <video
                  src={course.previewVideo}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              ) : (
                <>
                  <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlayingPreview(true)}
                      className="w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all"
                    >
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </button>
                  </div>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] font-bold text-white">
                    Preview Masterclass
                  </span>
                </>
              )}
            </div>

            {/* Price Tag */}
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-white">${course.price}</span>
                <span className="text-sm text-slate-500 line-through">${course.originalPrice}</span>
              </div>
              <span className="px-2.5 py-1 rounded-lg bg-rose-500/20 text-rose-300 text-xs font-bold">
                40% OFF
              </span>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleEnrollClick}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-sm font-extrabold shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
              >
                <span>{isEnrolled ? 'Continue Learning' : 'Enroll Now'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleWishlistToggle}
                  className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                  <span>{isWishlisted ? 'Saved' : 'Wishlist'}</span>
                </button>
                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 transition-colors"
                  title="Share"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Includes Checklist */}
            <div className="space-y-2.5 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
              <p className="font-bold text-white mb-2">This Masterclass Includes:</p>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span>{course.duration} on-demand HD video</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Downloadable source repositories & PDFs</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Verifiable Certificate of Completion</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Full Lifetime Access on Mobile & Desktop</span>
              </div>
            </div>

            <p className="text-[11px] text-center text-slate-500 font-medium pt-1">
              30-Day Money-Back Guarantee • Instant Access
            </p>

          </div>
        </div>

      </div>

    </div>
  );
};
