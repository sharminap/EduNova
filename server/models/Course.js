import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  originalPrice: {
    type: Number,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  badge: {
    type: String,
  },
  categoryName: {
    type: String,
    required: true,
  },
  instructor: {
    name: { type: String, required: true },
    avatar: { type: String },
    bio: { type: String }
  },
  duration: {
    type: String,
    default: '0h'
  },
  level: {
    type: String,
    default: 'All Levels'
  },
  rating: {
    type: Number,
    default: 0
  },
  ratingCount: {
    type: Number,
    default: 0
  },
  studentsCount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);
export default Course;
