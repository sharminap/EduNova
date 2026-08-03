import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockCourses, mockCategories } from '../data/mockCourses';
import { CourseCard } from '../components/course/CourseCard';
import { Search, Filter, Grid, List, SlidersHorizontal, RotateCcw } from 'lucide-react';

export const Explore = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedSort, setSelectedSort] = useState('popular');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'

  const filteredCourses = useMemo(() => {
    let result = [...mockCourses];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (c) => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.categoryName.toLowerCase().includes(q)
      );
    }

    if (selectedCategory !== 'all') {
      result = result.filter((c) => c.category === selectedCategory);
    }

    if (selectedLevel !== 'all') {
      result = result.filter((c) => c.level.toLowerCase() === selectedLevel.toLowerCase());
    }

    if (selectedSort === 'price-low') result.sort((a, b) => a.price - b.price);
    if (selectedSort === 'price-high') result.sort((a, b) => b.price - a.price);
    if (selectedSort === 'rating') result.sort((a, b) => b.rating - a.rating);
    if (selectedSort === 'popular') result.sort((a, b) => b.studentsCount - a.studentsCount);

    return result;
  }, [searchQuery, selectedCategory, selectedLevel, selectedSort]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedLevel('all');
    setSelectedSort('popular');
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header Banner */}
      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Explore All Masterclasses
        </h1>
        <p className="text-slate-600 text-sm max-w-2xl">
          Browse our curated catalog of software engineering, artificial intelligence, cloud architecture, and visual design courses.
        </p>
      </div>

      {/* Top Filter & Search Controls */}
      <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search Bar */}
        <div className="relative w-full md:max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by title, topic, or skill..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Filters and View Controls */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          
          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Categories</option>
            {mockCategories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>

          {/* Level Dropdown */}
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-blue-500"
          >
            <option value="all">All Skill Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>

          {/* Sort Dropdown */}
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-blue-500"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

          {/* Reset Filters */}
          <button
            onClick={resetFilters}
            className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-300 transition-colors"
            title="Reset Filters"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-300">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-slate-500'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-slate-500'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Result Stats */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>Showing <strong className="text-slate-900">{filteredCourses.length}</strong> masterclasses</span>
        {selectedCategory !== 'all' && (
          <span className="text-blue-600 font-semibold">Filtered by Category</span>
        )}
      </div>

      {/* Courses Display Grid / List */}
      {filteredCourses.length > 0 ? (
        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white rounded-3xl space-y-4 max-w-md mx-auto border border-slate-300">
          <SlidersHorizontal className="w-10 h-10 text-blue-500 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900">No courses match your query</h3>
          <p className="text-xs text-slate-500">Try clearing your filters or searching for another keyword like "React", "AI", or "DevOps".</p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
};
