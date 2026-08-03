export const mockCategories = [
  { id: 'web-dev', name: 'Web Development', icon: 'Code', count: 42, color: 'from-blue-500 to-indigo-600' },
  { id: 'ai-ml', name: 'AI & Machine Learning', icon: 'Cpu', count: 35, color: 'from-purple-500 to-pink-600' },
  { id: 'design', name: 'UI/UX & Product Design', icon: 'Palette', count: 28, color: 'from-amber-500 to-orange-600' },
  { id: 'data-science', name: 'Data Science & Analytics', icon: 'BarChart', count: 31, color: 'from-emerald-500 to-teal-600' },
  { id: 'cloud-devops', name: 'Cloud Computing & DevOps', icon: 'Cloud', count: 24, color: 'from-cyan-500 to-blue-600' },
  { id: 'mobile-dev', name: 'Mobile App Development', icon: 'Smartphone', count: 19, color: 'from-violet-500 to-purple-600' },
  { id: 'business', name: 'Business & Entrepreneurship', icon: 'Briefcase', count: 22, color: 'from-rose-500 to-red-600' },
  { id: 'cyber-security', name: 'Cyber Security & Ethical Hacking', icon: 'Shield', count: 16, color: 'from-slate-600 to-slate-900' }
];

export const mockInstructors = [
  {
    id: 'inst-1',
    name: 'Dr. Sarah Jenkins',
    title: 'Ex-Google Staff Engineer & AI Researcher',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    reviewsCount: 14200,
    studentsCount: 98400,
    coursesCount: 6,
    bio: 'Pioneer in Machine Learning and Fullstack Web Architectures with over 14 years of industry leadership at Silicon Valley giants.',
    verified: true,
    socials: { twitter: '#', linkedin: '#', github: '#' }
  },
  {
    id: 'inst-2',
    name: 'Alex Vance',
    title: 'Lead Product Designer at DesignSystem.io',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    rating: 4.8,
    reviewsCount: 9800,
    studentsCount: 64200,
    coursesCount: 4,
    bio: 'Specializing in high-converting SaaS user interfaces, micro-interactions, Figma design systems, and modern visual design standard methodologies.',
    verified: true,
    socials: { twitter: '#', linkedin: '#', dribbble: '#' }
  },
  {
    id: 'inst-3',
    name: 'Michael Chang',
    title: 'Principal Cloud Architect & AWS Certified Fellow',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    rating: 4.95,
    reviewsCount: 21500,
    studentsCount: 128000,
    coursesCount: 8,
    bio: 'Passionate about distributed systems, Kubernetes orchestration, serverless microservices, and enterprise Cloud transformations.',
    verified: true,
    socials: { twitter: '#', linkedin: '#', github: '#' }
  },
  {
    id: 'inst-4',
    name: 'Elena Rostova',
    title: 'Senior Data Scientist & Algorithmic Trader',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    rating: 4.87,
    reviewsCount: 8400,
    studentsCount: 52100,
    coursesCount: 5,
    bio: 'Expert in Python data science stack, PyTorch neural networks, predictive analytics, and enterprise data pipelines.',
    verified: true,
    socials: { twitter: '#', linkedin: '#', github: '#' }
  }
];

export const mockCourses = [
  {
    id: 'course-1',
    title: 'Full-Stack Web Mastery: Modern React 19, Next.js & Node Architecture',
    subtitle: 'Master enterprise frontend & backend engineering from zero to senior production deployment.',
    category: 'web-dev',
    categoryName: 'Web Development',
    badge: 'Bestseller',
    level: 'Intermediate',
    language: 'English',
    updatedDate: 'August 2026',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    previewVideo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    price: 89.99,
    originalPrice: 149.99,
    rating: 4.9,
    ratingCount: 3840,
    studentsCount: 24500,
    duration: '42 hours',
    lessonsCount: 148,
    instructor: mockInstructors[0],
    description: 'Elevate your web engineering skills to elite Silicon Valley startup standards. In this comprehensive masterclass, you will build scalable SaaS applications using React 19, Server Components, TypeScript, Node.js, Express, Docker, and MongoDB.',
    whatYouWillLearn: [
      'Architect modular full-stack SaaS apps with React 19 and Node.js',
      'Implement JWT, OAuth2 authentication with refresh token rotation',
      'Optimize Web Vitals, SSR performance, and CDN caching strategies',
      'Deploy CI/CD pipelines using GitHub Actions, Docker, and AWS EC2',
      'Master state management with Context API, Redux Toolkit, and React Query',
      'Design clean RESTful & GraphQL APIs with input validation and rate limiting'
    ],
    requirements: [
      'Basic understanding of HTML, CSS, and JavaScript (ES6+)',
      'A computer running macOS, Windows, or Linux with Node.js installed'
    ],
    curriculum: [
      {
        id: 'mod-1',
        title: 'Module 1: Modern JavaScript & React 19 Essentials',
        duration: '4 hours',
        lessons: [
          { id: 'les-1', title: '1. Course Orientation & Architecture Setup', duration: '12:45', type: 'video', isFree: true, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
          { id: 'les-2', title: '2. ES6+ Advanced Concepts & Async Pattern Mastery', duration: '24:10', type: 'video', isFree: true, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
          { id: 'les-3', title: '3. React 19 Compiler, Actions & Server Components Deep Dive', duration: '35:50', type: 'video', isFree: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
          { id: 'les-4', title: '4. Module 1 Knowledge Quiz', duration: '15 mins', type: 'quiz', isFree: false }
        ]
      },
      {
        id: 'mod-2',
        title: 'Module 2: State Management & Custom Hooks',
        duration: '6 hours',
        lessons: [
          { id: 'les-5', title: '5. Context API vs Zustand vs Redux Architecture', duration: '28:15', type: 'video', isFree: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
          { id: 'les-6', title: '6. Building Custom Hooks for API Fetching & Caching', duration: '31:20', type: 'video', isFree: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4' },
          { id: 'les-7', title: '7. Hands-on Project: Realtime Notification Manager (PDF Included)', duration: '45:00', type: 'pdf', isFree: false }
        ]
      },
      {
        id: 'mod-3',
        title: 'Module 3: Scalable Backend REST API with Node & Mongo',
        duration: '8 hours',
        lessons: [
          { id: 'les-8', title: '8. Express Server Setup & Middleware Design', duration: '22:00', type: 'video', isFree: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoylikes.mp4' },
          { id: 'les-9', title: '9. Database Modeling with Mongoose Schema Hooks', duration: '40:10', type: 'video', isFree: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdown.mp4' },
          { id: 'les-10', title: '10. Security Hardening: Helmet, Cors, Rate Limiting & Sanitization', duration: '18:40', type: 'video', isFree: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4' }
        ]
      }
    ],
    reviews: [
      {
        id: 'rev-1',
        userName: 'David Miller',
        userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '3 days ago',
        comment: 'Hands down the best React and Node course on the internet. Dr. Sarah Jenkins explains complex architectural decisions with extreme clarity.'
      },
      {
        id: 'rev-2',
        userName: 'Sophia Chen',
        userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: '1 week ago',
        comment: 'This course landed me my Senior Frontend Engineer role at a top Series-B startup! The real-world production setups were priceless.'
      }
    ],
    faqs: [
      { q: 'Is this course suitable for beginners?', a: 'Basic knowledge of HTML and JavaScript is recommended, but we cover foundational concepts before diving into advanced architecture.' },
      { q: 'Do I get lifetime access to course materials?', a: 'Yes! Once enrolled, you have lifetime access to all lectures, project repositories, and future course updates.' },
      { q: 'Will I receive a verified certificate upon completion?', a: 'Absolutely. Upon completing 100% of the lessons and quizzes, EduNova automatically issues a verifiable PDF certificate.' }
    ]
  },
  {
    id: 'course-2',
    title: 'Generative AI & LLM Systems Engineering: PyTorch, LangChain & RAG',
    subtitle: 'Build production-ready Large Language Model applications, vector databases, and custom agents.',
    category: 'ai-ml',
    categoryName: 'AI & Machine Learning',
    badge: 'Trending',
    level: 'Advanced',
    language: 'English',
    updatedDate: 'July 2026',
    thumbnail: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    previewVideo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    price: 94.99,
    originalPrice: 159.99,
    rating: 4.95,
    ratingCount: 2910,
    studentsCount: 18200,
    duration: '36 hours',
    lessonsCount: 112,
    instructor: mockInstructors[0],
    description: 'Step into the forefront of Artificial Intelligence. Learn how to fine-tune open-source LLMs like Llama 3, build retrieval-augmented generation (RAG) pipelines with Pinecone and Qdrant, and orchestrate multi-agent workflows.',
    whatYouWillLearn: [
      'Build end-to-end RAG architecture with vector databases and embeddings',
      'Fine-tune Llama 3 and Mistral using LoRA and QLoRA techniques',
      'Construct autonomous AI Agents with Tool Calling and LangGraph',
      'Deploy low-latency AI inference servers using vLLM and Docker'
    ],
    requirements: [
      'Intermediate Python programming skill',
      'Basic linear algebra and probability concepts'
    ],
    curriculum: [
      {
        id: 'mod-21',
        title: 'Module 1: Foundations of Transformer Models & Embeddings',
        duration: '5 hours',
        lessons: [
          { id: 'les-201', title: '1. Introduction to Attention Mechanism & Transformers', duration: '20:15', type: 'video', isFree: true, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
          { id: 'les-202', title: '2. Generating Vector Embeddings & Similarity Metrics', duration: '28:40', type: 'video', isFree: false, videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }
        ]
      }
    ],
    reviews: [],
    faqs: []
  },
  {
    id: 'course-3',
    title: 'SaaS UI/UX Design System & Micro-Interactions Masterclass',
    subtitle: 'Design world-class digital products in Figma, craft design tokens, and build Framer prototypes.',
    category: 'design',
    categoryName: 'UI/UX Design',
    badge: 'Popular',
    level: 'All Levels',
    language: 'English',
    updatedDate: 'August 2026',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
    previewVideo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    price: 74.99,
    originalPrice: 129.99,
    rating: 4.88,
    ratingCount: 1980,
    studentsCount: 15400,
    duration: '28 hours',
    lessonsCount: 94,
    instructor: mockInstructors[1],
    description: 'Learn the secrets behind modern Apple, Linear, and Stripe UI aesthetic design. Create atomic design systems, custom color tokens, micro-interactions, responsive auto-layouts, and user testing frameworks.',
    whatYouWillLearn: [
      'Master Figma variables, auto-layout 5.0, and design token management',
      'Create high-fidelity interactive prototypes with advanced micro-animations',
      'Conduct UX research, journey mapping, and conversion rate optimization'
    ],
    requirements: ['Free Figma Account', 'Passion for beautiful visual design'],
    curriculum: [],
    reviews: [],
    faqs: []
  },
  {
    id: 'course-4',
    title: 'Enterprise AWS DevOps & Kubernetes Orchestration Masterclass',
    subtitle: 'Architect production Kubernetes clusters, Terraform infrastructure, and automated GitOps.',
    category: 'cloud-devops',
    categoryName: 'Cloud Computing & DevOps',
    badge: 'Featured',
    level: 'Advanced',
    language: 'English',
    updatedDate: 'June 2026',
    thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    previewVideo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    price: 89.99,
    originalPrice: 149.99,
    rating: 4.92,
    ratingCount: 3120,
    studentsCount: 21900,
    duration: '50 hours',
    lessonsCount: 160,
    instructor: mockInstructors[2],
    description: 'Master Cloud Native architecture. Build automated Infrastructure as Code (IaC) using Terraform, provision EKS clusters, implement ArgoCD GitOps pipelines, and monitor using Prometheus and Grafana.',
    whatYouWillLearn: [
      'Provision AWS Infrastructure using Terraform & CloudFormation',
      'Deploy microservices onto AWS EKS with helm charts and ingress',
      'Set up zero-downtime blue/green deployments with ArgoCD'
    ],
    requirements: ['Basic Linux Command Line understanding', 'AWS Free Tier account'],
    curriculum: [],
    reviews: [],
    faqs: []
  },
  {
    id: 'course-5',
    title: 'Python for Financial Engineering & High-Frequency Data Science',
    subtitle: 'Build quantitative trading models, risk management engines, and real-time analytical dashboards.',
    category: 'data-science',
    categoryName: 'Data Science & Analytics',
    badge: 'Hot',
    level: 'Intermediate',
    language: 'English',
    updatedDate: 'July 2026',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
    previewVideo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    price: 79.99,
    originalPrice: 139.99,
    rating: 4.85,
    ratingCount: 1650,
    studentsCount: 11200,
    duration: '32 hours',
    lessonsCount: 104,
    instructor: mockInstructors[3],
    description: 'Combine Python data science stack with quantitative finance. Analyze financial time-series, compute Monte Carlo simulations, build option pricing algorithms, and execute backtests.',
    whatYouWillLearn: [
      'Analyze financial data using NumPy, Pandas, Polars, and SciPy',
      'Implement Black-Scholes pricing and Monte Carlo risk models',
      'Build algorithmic backtesting systems with Backtrader'
    ],
    requirements: ['Basic Python programming', 'High school level algebra'],
    curriculum: [],
    reviews: [],
    faqs: []
  },
  {
    id: 'course-6',
    title: 'iOS 18 & Swift 6 App Development with SwiftUI & VisionOS',
    subtitle: 'Create modern, spatial apps for iPhone, iPad, and Apple Vision Pro from scratch.',
    category: 'mobile-dev',
    categoryName: 'Mobile App Development',
    badge: 'New',
    level: 'All Levels',
    language: 'English',
    updatedDate: 'August 2026',
    thumbnail: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=1200&q=80',
    previewVideo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoylikes.mp4',
    price: 84.99,
    originalPrice: 144.99,
    rating: 4.91,
    ratingCount: 1420,
    studentsCount: 9800,
    duration: '38 hours',
    lessonsCount: 120,
    instructor: mockInstructors[1],
    description: 'Learn modern Swift 6 language features, concurrency (async/await), SwiftData persistence, and interactive SwiftUI views for iOS 18 and VisionOS spatial computing.',
    whatYouWillLearn: [
      'Build reactive user interfaces using SwiftUI & Observation framework',
      'Implement SwiftData for offline database persistence',
      'Publish production apps to Apple App Store'
    ],
    requirements: ['Mac computer running macOS Sequoia', 'Xcode 16 installed'],
    curriculum: [],
    reviews: [],
    faqs: []
  }
];
