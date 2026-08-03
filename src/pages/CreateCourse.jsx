import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../context/ToastContext';
import { courseService } from '../services/courseService';
import { PlusCircle, UploadCloud, Video, FileText, CheckCircle2, Save } from 'lucide-react';

export const CreateCourse = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('web-dev');
  const [level, setLevel] = useState('Intermediate');
  const [price, setPrice] = useState('89.99');
  const [description, setDescription] = useState('');

  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      toast.error('Please enter course title and description');
      return;
    }

    try {
      setUploading(true);
      await courseService.createCourse({
        title,
        subtitle,
        category,
        categoryName: 'Web Development',
        level,
        price: parseFloat(price) || 89.99,
        originalPrice: parseFloat(price) * 1.5,
        description,
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
        previewVideo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        duration: '24 hours',
        lessonsCount: 42
      });

      toast.success('Course created and published successfully!');
      navigate('/instructor');
    } catch (err) {
      toast.error('Failed to create course');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <PlusCircle className="w-6 h-6 text-purple-400" />
          Create New Masterclass
        </h1>
        <p className="text-xs text-slate-400">Publish your video lectures, curriculum, and quizzes to thousands of students.</p>
      </div>

      <form onSubmit={handleSubmit} className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-900/40 space-y-6">
        
        {/* Basic Details */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white">1. Course Essentials</h3>
          
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300">Course Title</label>
            <input
              type="text"
              placeholder="e.g. Master Next.js 15 & Server Components"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300">Subtitle / Tagline</label>
            <input
              type="text"
              placeholder="e.g. Build production SaaS apps from scratch"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none"
              >
                <option value="web-dev">Web Development</option>
                <option value="ai-ml">AI & Machine Learning</option>
                <option value="design">UI/UX Design</option>
                <option value="cloud-devops">Cloud & DevOps</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Skill Level</label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300">Price ($ USD)</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-300">Full Description</label>
            <textarea
              rows="4"
              placeholder="Describe what students will learn..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white focus:outline-none"
            />
          </div>
        </div>

        {/* Video Upload Simulation Dropzone */}
        <div className="space-y-3 pt-4 border-t border-slate-800">
          <h3 className="text-base font-bold text-white">2. Video & Media Assets</h3>
          <div
            onClick={() => toast.info('Video File Dropzone selected')}
            className="p-8 border-2 border-dashed border-purple-500/30 hover:border-purple-500 rounded-2xl bg-purple-950/10 text-center cursor-pointer space-y-2 transition-colors"
          >
            <UploadCloud className="w-10 h-10 text-purple-400 mx-auto" />
            <p className="text-xs font-bold text-white">Click or drag MP4 video lectures here</p>
            <p className="text-[11px] text-slate-400">Supports HD 1080p, 4K H.264 up to 5GB per video file</p>
          </div>
        </div>

        <button
          type="submit"
          disabled={uploading}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-bold shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 transition-all"
        >
          {uploading ? 'Publishing Course...' : 'Publish Masterclass Now'}
        </button>

      </form>
    </div>
  );
};
