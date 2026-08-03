import React from 'react';
import { useAuth } from '../context/AuthContext';
import { mockCourses } from '../data/mockCourses';
import { CourseCard } from '../components/course/CourseCard';
import { Heart } from 'lucide-react';

export const Wishlist = () => {
  const { user } = useAuth();
  const wishlistIds = user?.wishlist || [];
  const wishlistedCourses = mockCourses.filter((c) => wishlistIds.includes(c.id));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
          My Saved Wishlist
        </h1>
        <p className="text-xs text-slate-400">Courses you have bookmarked to learn next.</p>
      </div>

      {wishlistedCourses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center glass-panel rounded-3xl space-y-3 max-w-md mx-auto border border-slate-800">
          <Heart className="w-10 h-10 text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-white">Your wishlist is empty</h3>
          <p className="text-xs text-slate-400">Explore our course catalog and click the heart icon on any course to save it here.</p>
        </div>
      )}
    </div>
  );
};
