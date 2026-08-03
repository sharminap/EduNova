import { mockCourses, mockCategories, mockInstructors } from '../data/mockCourses';

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

export const courseService = {
  getAllCourses: async (filters = {}) => {
    await delay();
    let courses = [...mockCourses];

    if (filters.search) {
      const q = filters.search.toLowerCase();
      courses = courses.filter(
        (c) => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.categoryName.toLowerCase().includes(q)
      );
    }

    if (filters.category && filters.category !== 'all') {
      courses = courses.filter((c) => c.category === filters.category);
    }

    if (filters.level && filters.level !== 'all') {
      courses = courses.filter((c) => c.level.toLowerCase() === filters.level.toLowerCase());
    }

    if (filters.sort) {
      if (filters.sort === 'price-low') courses.sort((a, b) => a.price - b.price);
      if (filters.sort === 'price-high') courses.sort((a, b) => b.price - a.price);
      if (filters.sort === 'rating') courses.sort((a, b) => b.rating - a.rating);
      if (filters.sort === 'popular') courses.sort((a, b) => b.studentsCount - a.studentsCount);
    }

    return courses;
  },

  getCourseById: async (id) => {
    await delay();
    const course = mockCourses.find((c) => c.id === id);
    if (!course) throw new Error('Course not found');
    return course;
  },

  getCategories: async () => {
    await delay(200);
    return mockCategories;
  },

  getInstructors: async () => {
    await delay(200);
    return mockInstructors;
  },

  createCourse: async (courseData) => {
    await delay(800);
    const newCourse = {
      id: 'course-' + Date.now(),
      ...courseData,
      rating: 5.0,
      ratingCount: 1,
      studentsCount: 0,
      badge: 'New',
      instructor: mockInstructors[0]
    };
    mockCourses.unshift(newCourse);
    return newCourse;
  }
};
