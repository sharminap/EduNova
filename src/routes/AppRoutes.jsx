import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { MainLayout } from '../layouts/MainLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { DashboardLayout } from '../layouts/DashboardLayout';

import { Home } from '../pages/Home';
import { Explore } from '../pages/Explore';
import { CourseDetail } from '../pages/CourseDetail';
import { Instructors } from '../pages/Instructors';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';

import { Login } from '../pages/Login';
import { Signup } from '../pages/Signup';
import { ForgotPassword } from '../pages/ForgotPassword';
import { ResetPassword } from '../pages/ResetPassword';
import { OTPVerification } from '../pages/OTPVerification';
import { EmailSuccess } from '../pages/EmailSuccess';

import { StudentDashboard } from '../pages/StudentDashboard';
import { MyCourses } from '../pages/MyCourses';
import { Wishlist } from '../pages/Wishlist';
import { Certificates } from '../pages/Certificates';
import { Profile } from '../pages/Profile';
import { Settings } from '../pages/Settings';
import { LearningPlayer } from '../pages/LearningPlayer';

import { NotFound } from '../pages/NotFound';
import { ProtectedRoute } from './ProtectedRoute';

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/courses" element={<Explore />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/instructors" element={<Instructors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/404" element={<NotFound />} />
      </Route>

      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/email-success" element={<EmailSuccess />} />
      </Route>

      {/* Interactive LMS Learning Player */}
      <Route path="/learn/:courseId" element={<LearningPlayer />} />

      {/* Student Dashboard (Protected) */}
      <Route element={<ProtectedRoute allowedRoles={['student', 'instructor', 'admin']} />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<StudentDashboard />} />
          <Route path="/dashboard/my-courses" element={<MyCourses />} />
          <Route path="/dashboard/wishlist" element={<Wishlist />} />
          <Route path="/dashboard/certificates" element={<Certificates />} />
          <Route path="/dashboard/profile" element={<Profile />} />
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>
      </Route>

      {/* Fallback 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
