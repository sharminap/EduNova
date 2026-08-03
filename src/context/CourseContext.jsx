import React, { createContext, useContext, useState, useEffect } from 'react';
import { courseService } from '../services/courseService';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        setLoading(true);
        const [courseList, categoryList, instructorList] = await Promise.all([
          courseService.getAllCourses(),
          courseService.getCategories(),
          courseService.getInstructors()
        ]);
        setCourses(courseList);
        setCategories(categoryList);
        setInstructors(instructorList);
      } catch (err) {
        console.error('Failed to load courses', err);
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, []);

  return (
    <CourseContext.Provider
      value={{
        courses,
        categories,
        instructors,
        loading,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => useContext(CourseContext);
