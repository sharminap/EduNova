import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Star, Clock, Users, Heart } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

export const CourseCard = ({ course, showProgress = false, userProgress = 0 }) => {
  const { user, toggleWishlist, isAuthenticated } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const isWishlisted = user?.wishlist?.includes(course.id);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAuthenticated) {
      toast.info('Please log in to save courses to your wishlist');
      navigate('/login');
      return;
    }
    const added = toggleWishlist(course.id);
    if (added) toast.success(`Saved to Wishlist`);
    else toast.info('Removed from Wishlist');
  };

  return (
    <div className="group neu-card overflow-hidden flex flex-col justify-between bg-white transition-colors hover:border-blue-500">
      <div>
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-slate-100 border-b border-slate-100 rounded-t-[calc(0.75rem-1px)]">
          <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-80" />

            {course.badge && (
              <span className="absolute top-2 left-2 px-2 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                {course.badge}
              </span>
            )}

            <button onClick={handleWishlistClick} className="absolute top-2 right-2 p-1.5 bg-white/90 hover:bg-white text-slate-500 hover:text-rose-500 transition-colors shadow-sm" title="Wishlist">
              <Heart className={`w-4 h-4 transition-all ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>

            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-bold text-white">
              <span className="flex items-center gap-1 bg-black/40 px-2 py-1 rounded">
                <Clock className="w-3 h-3" />
                {course.duration}
              </span>
              <span className="bg-black/40 px-2 py-1 rounded">{course.level}</span>
            </div>
          </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
            {course.categoryName}
          </span>

          <Link to={`/course/${course.id}`}>
            <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
              {course.title}
            </h3>
          </Link>

          {/* Instructor */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-xs text-slate-600 font-medium truncate">
              by <strong className="text-slate-900">{course.instructor?.name}</strong>
            </span>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center gap-1 text-amber-600 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{course.rating}</span>
            </div>
            <span className="text-slate-500">({course.ratingCount?.toLocaleString()})</span>
            <span className="text-slate-300">•</span>
            <div className="flex items-center gap-1 text-slate-500">
              <Users className="w-3.5 h-3.5" />
              <span>{course.studentsCount?.toLocaleString()}</span>
            </div>
          </div>

          {/* Progress bar (when enrolled) */}
          {showProgress && (
            <div className="space-y-1.5 pt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">Course Progress</span>
                <span className="font-bold text-blue-600">{userProgress}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-200 overflow-hidden">
                <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${userProgress}%` }} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Price footer */}
      <div className="px-4 pb-4 pt-3 border-t border-slate-200 flex items-center justify-between">
        <div className="flex items-baseline gap-1.5">
          <span className="text-base font-bold text-slate-900">${course.price}</span>
          {course.originalPrice && <span className="text-xs text-slate-400 line-through">${course.originalPrice}</span>}
        </div>
        <Link to={`/course/${course.id}`} className="px-3 py-1.5 bg-white hover:bg-slate-50 text-blue-600 border border-slate-300 text-xs font-bold transition-all">
          View Details
        </Link>
      </div>
    </div>
  );
};
