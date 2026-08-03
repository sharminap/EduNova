export const mockCurrentUser = {
  id: 'user-101',
  name: 'Alex Vance',
  email: 'alex.vance@edunova.com',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  role: 'student', // student | instructor | admin
  headline: 'Full-Stack Developer & UI Enthusiast',
  location: 'San Francisco, CA',
  joinedDate: 'January 2025',
  bio: 'Passionate about building modern SaaS web applications, learning modern AI architectures, and mastering cloud deployments.',
  streak: 14,
  dailyGoalMinutes: 45,
  dailySpentMinutes: 32,
  completedCoursesCount: 3,
  inProgressCoursesCount: 2,
  certificatesCount: 3,
  totalHoursLearned: 148,
  xpPoints: 3450,
  level: 'Intermediate Developer',
  enrolledCourses: [
    {
      courseId: 'course-1',
      enrolledDate: '2026-06-10',
      progress: 68,
      lastAccessed: '2 hours ago',
      lastLessonId: 'les-3',
      completedLessons: ['les-1', 'les-2', 'les-4', 'les-5']
    },
    {
      courseId: 'course-2',
      enrolledDate: '2026-07-01',
      progress: 35,
      lastAccessed: 'Yesterday',
      lastLessonId: 'les-201',
      completedLessons: ['les-201']
    }
  ],
  wishlist: ['course-3', 'course-4', 'course-6'],
  certificates: [
    {
      id: 'cert-8921',
      courseId: 'course-1',
      courseTitle: 'Full-Stack Web Mastery: Modern React 19, Next.js & Node Architecture',
      issueDate: 'August 1, 2026',
      instructorName: 'Dr. Sarah Jenkins',
      verificationCode: 'EDU-2026-9842-FS',
      downloadUrl: '#'
    },
    {
      id: 'cert-4102',
      courseId: 'course-3',
      courseTitle: 'SaaS UI/UX Design System & Micro-Interactions Masterclass',
      issueDate: 'June 15, 2026',
      instructorName: 'Alex Vance',
      verificationCode: 'EDU-2026-1104-UI',
      downloadUrl: '#'
    }
  ],
  achievements: [
    { id: 'ach-1', name: '7-Day Streak Master', description: 'Learned continuously for 7 consecutive days', icon: 'Flame', unlockedDate: 'Jul 12, 2026', tier: 'Gold' },
    { id: 'ach-2', name: 'Fast Learner', description: 'Completed 10 lessons in a single day', icon: 'Zap', unlockedDate: 'Jul 20, 2026', tier: 'Silver' },
    { id: 'ach-3', name: 'Quiz Wizard', description: 'Scored 100% on 3 module quizzes in a row', icon: 'Award', unlockedDate: 'Aug 01, 2026', tier: 'Gold' },
    { id: 'ach-4', name: 'Code Samurai', description: 'Spent over 100 hours learning on EduNova', icon: 'Target', unlockedDate: 'Jul 28, 2026', tier: 'Platinum' }
  ],
  upcomingDeadlines: [
    { id: 'dl-1', title: 'React 19 Final Capstone Submission', courseTitle: 'Full-Stack Web Mastery', dueDate: 'Tomorrow at 11:59 PM', priority: 'High' },
    { id: 'dl-2', title: 'LLM RAG Pipeline Assignment', courseTitle: 'Generative AI Masterclass', dueDate: 'In 3 days', priority: 'Medium' }
  ],
  notifications: [
    { id: 'notif-1', title: 'New Course Announcement', message: 'Dr. Sarah Jenkins published a new lecture on React 19 Server Actions.', time: '10 mins ago', read: false },
    { id: 'notif-2', title: 'Certificate Earned!', message: 'Congratulations! Your certificate for Full-Stack Web Mastery is ready.', time: '1 day ago', read: true },
    { id: 'notif-3', title: 'Quiz Grade Released', message: 'You scored 95% on Module 1 Knowledge Quiz.', time: '3 days ago', read: true }
  ],
  leaderboard: [
    { rank: 1, name: 'Elena Rostova', xp: 4890, avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80', badge: '🥇 Top Scholar' },
    { rank: 2, name: 'David Miller', xp: 4120, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80', badge: '🥈 Master' },
    { rank: 3, name: 'Alex Vance (You)', xp: 3450, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', isUser: true, badge: '🥉 Rising Star' },
    { rank: 4, name: 'Sophia Chen', xp: 3100, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80', badge: 'Pro' }
  ]
};

export const mockDashboardStats = {
  totalRevenue: 28450,
  monthlyActiveStudents: 1420,
  totalCoursesCreated: 6,
  averageRating: 4.9,
  recentSales: [
    { id: 'sale-1', studentName: 'Jordan Taylor', courseTitle: 'Full-Stack Web Mastery', amount: '$89.99', date: '2 hours ago' },
    { id: 'sale-2', studentName: 'Maria Garcia', courseTitle: 'Generative AI & LLM Systems', amount: '$94.99', date: '5 hours ago' },
    { id: 'sale-3', studentName: 'Kevin Patel', courseTitle: 'SaaS UI/UX Design System', amount: '$74.99', date: 'Yesterday' }
  ]
};

export const mockAdminStats = {
  totalUsers: 148500,
  totalInstructors: 340,
  totalCourses: 1250,
  platformRevenue: '$1.48M',
  pendingCourseApprovals: 8,
  systemStatus: 'Healthy (99.99% Uptime)',
  recentUsers: [
    { id: 'usr-1', name: 'Marcus Brody', email: 'marcus@dev.io', role: 'Student', status: 'Active', joined: 'Today' },
    { id: 'usr-2', name: 'Dr. Sarah Jenkins', email: 'sarah@ai-labs.com', role: 'Instructor', status: 'Verified', joined: 'Jan 2025' },
    { id: 'usr-3', name: 'Samira Khan', email: 'samira@design.co', role: 'Student', status: 'Active', joined: 'Yesterday' }
  ]
};
