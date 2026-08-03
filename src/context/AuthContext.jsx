import React, { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';
import { mockCurrentUser } from '../data/mockUser';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState('student'); // 'student' | 'instructor' | 'admin'

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedUser = authService.getStoredUser();
        if (storedUser) {
          setUser(storedUser);
          setRole(storedUser.role || 'student');
        } else {
          // Initialize default mock logged-in state for instant preview
          setUser(mockCurrentUser);
          setRole(mockCurrentUser.role);
          localStorage.setItem('edunova_user', JSON.stringify(mockCurrentUser));
        }
      } catch (err) {
        console.error('Auth initialization failed', err);
      } finally {
        setLoading(false);
      }
    };
    initializeAuth();
  }, []);

  const login = async (email, password, desiredRole = 'student') => {
    setLoading(true);
    try {
      const res = await authService.login(email, password, desiredRole);
      setUser(res.user);
      setRole(res.user.role);
      return res;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name, email, password, desiredRole = 'student') => {
    setLoading(true);
    try {
      const res = await authService.signup(name, email, password, desiredRole);
      setUser(res.user);
      setRole(res.user.role);
      return res;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    setRole('student');
  };

  // Easy Role Switcher for instant testing of Student, Instructor & Admin views
  const switchRole = (newRole) => {
    if (!user) return;
    const updated = { ...user, role: newRole };
    setUser(updated);
    setRole(newRole);
    localStorage.setItem('edunova_user', JSON.stringify(updated));
  };

  const updateUserProfile = (updatedFields) => {
    if (!user) return;
    const updated = { ...user, ...updatedFields };
    setUser(updated);
    localStorage.setItem('edunova_user', JSON.stringify(updated));
  };

  const toggleWishlist = (courseId) => {
    if (!user) return false;
    const wishlist = user.wishlist || [];
    const exists = wishlist.includes(courseId);
    const updatedWishlist = exists
      ? wishlist.filter((id) => id !== courseId)
      : [...wishlist, courseId];
    
    updateUserProfile({ wishlist: updatedWishlist });
    return !exists;
  };

  const updateCourseProgress = (courseId, lessonId) => {
    if (!user) return;
    const enrolled = [...(user.enrolledCourses || [])];
    const targetIdx = enrolled.findIndex((c) => c.courseId === courseId);

    if (targetIdx >= 0) {
      const target = enrolled[targetIdx];
      const completed = target.completedLessons || [];
      if (!completed.includes(lessonId)) {
        completed.push(lessonId);
      }
      // Calculate progress mock
      const newProgress = Math.min(100, Math.round((completed.length / 5) * 100));
      enrolled[targetIdx] = {
        ...target,
        completedLessons: completed,
        lastLessonId: lessonId,
        progress: newProgress,
        lastAccessed: 'Just now'
      };
    } else {
      enrolled.push({
        courseId,
        enrolledDate: new Date().toISOString().split('T')[0],
        progress: 10,
        lastAccessed: 'Just now',
        lastLessonId: lessonId,
        completedLessons: [lessonId]
      });
    }

    updateUserProfile({ enrolledCourses: enrolled });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        loading,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        switchRole,
        updateUserProfile,
        toggleWishlist,
        updateCourseProgress
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
