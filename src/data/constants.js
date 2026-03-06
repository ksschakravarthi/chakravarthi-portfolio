// ============================================================
// SKILLS CONSTANTS
// ============================================================
export const SKILLS = {
  programming: [
    { name: 'JavaScript (ES6+)', level: 92, icon: '⚡' },
    { name: 'TypeScript', level: 78, icon: '🔷' },
    { name: 'Python', level: 70, icon: '🐍' },
    { name: 'SQL', level: 85, icon: '🗄️' },
  ],
  frontend: [
    { name: 'React.js', level: 95, icon: '⚛️' },
    { name: 'HTML5', level: 95, icon: '🌐' },
    { name: 'CSS3 / Tailwind', level: 88, icon: '🎨' },
    { name: 'State Management', level: 80, icon: '🔄' },
  ],
  backend: [
    { name: 'Node.js', level: 75, icon: '🟢' },
    { name: 'Express.js', level: 73, icon: '🚀' },
    { name: 'REST API Design', level: 90, icon: '🔗' },
    { name: 'PostgreSQL', level: 82, icon: '🐘' },
    { name: 'MongoDB', level: 70, icon: '🍃' },
  ],
  tools: [
    { name: 'Git / GitHub', level: 90, icon: '🐙' },
    { name: 'Docker', level: 65, icon: '🐳' },
    { name: 'Postman', level: 88, icon: '📮' },
    { name: 'Agile / Scrum', level: 85, icon: '🏃' },
  ],
  extra: [
    { name: 'Three.js / WebGL', level: 55, icon: '🌀' },
    { name: 'GraphQL', level: 50, icon: '🔺' },
    { name: 'Redis', level: 45, icon: '🔴' },
    { name: 'AWS Basics', level: 50, icon: '☁️' },
    { name: 'Figma / UI Design', level: 60, icon: '✏️' },
    { name: 'Testing (Jest)', level: 65, icon: '🧪' },
  ],
};

export const SKILL_TAGS = [
  'React.js', 'JavaScript', 'TypeScript', 'Node.js', 'Python',
  'PostgreSQL', 'MongoDB', 'REST APIs', 'Docker', 'Git',
  'Express.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Agile',
  'Three.js', 'GraphQL', 'Redis', 'AWS', 'Jest',
];

// ============================================================
// PROJECTS CONSTANTS
// ============================================================
export const PROJECTS = [
  {
    id: '01',
    title: 'Hospital Information System',
    subtitle: 'Enterprise Healthcare Platform',
    company: 'RailTel Corporation',
    year: '2024',
    tag: 'Healthcare · Enterprise',
    color: '#C8FF00',
    description:
      'A comprehensive web-based healthcare management system for managing patient data, appointments, billing, and reporting. Built interactive dashboards that extract real-time insights from structured SQL databases.',
    highlights: [
      'Designed modular React component architecture',
      '20+ RESTful API integrations for live sync',
      'Role-based auth & access controls',
      'Optimized rendering for large datasets',
      'Production-grade error handling',
    ],
    tech: ['React.js', 'Node.js', 'PostgreSQL', 'REST API', 'JWT Auth', 'Docker'],
    metrics: [
      { label: 'API Endpoints', value: '20+' },
      { label: 'Performance Boost', value: '40%' },
      { label: 'Users Served', value: '500+' },
    ],
  },
  {
    id: '02',
    title: 'UMID System',
    subtitle: 'Unique Medical Identification — Indian Railways',
    company: 'RailTel Corporation',
    year: '2024',
    tag: 'Government · Healthcare',
    color: '#00BFFF',
    description:
      'Contributed to the redevelopment of a medical identity portal serving railway employees and pensioners nationwide. Built responsive interfaces and integrated backend services via REST APIs.',
    highlights: [
      'Responsive cross-device UI',
      'Backend REST API integration',
      'SQL query validation & debugging',
      'Secure medical data handling',
      'Scalable for national deployment',
    ],
    tech: ['React.js', 'REST API', 'PostgreSQL', 'HTML5', 'CSS3'],
    metrics: [
      { label: 'Users', value: '100K+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Response Time', value: '<200ms' },
    ],
  },
  {
    id: '03',
    title: 'ID Card Management',
    subtitle: 'RailTel Employee & Visitor System',
    company: 'RailTel Corporation',
    year: '2024',
    tag: 'Enterprise · Admin',
    color: '#FF6B35',
    description:
      'Dynamic form-based workflow system for employee ID and visitor card management. Implemented multi-level approval dashboards with structured data visualization and validation APIs.',
    highlights: [
      'Multi-level approval workflows',
      'Dynamic form architecture',
      'Backend validation API hooks',
      'Data visualization dashboards',
      'Efficient error state handling',
    ],
    tech: ['React.js', 'Express.js', 'MongoDB', 'REST API', 'Chart.js'],
    metrics: [
      { label: 'Workflow Steps', value: '5-Level' },
      { label: 'Processing Time', value: '-60%' },
      { label: 'Accuracy', value: '99%' },
    ],
  },
];

// ============================================================
// EXPERIENCE CONSTANTS
// ============================================================
export const EXPERIENCE = [
  {
    role: 'Software Engineer (Frontend)',
    company: 'RailTel Corporation of India Limited',
    period: 'Apr 2024 – Present',
    location: 'Hyderabad',
    type: 'Full-time',
    responsibilities: [
      'Designed and developed scalable web applications focused on healthcare and enterprise analytics',
      'Implemented complex UI modules using React.js for structured data visualization',
      'Integrated 20+ RESTful APIs transforming SQL data into user-friendly dashboards',
      'Collaborated with backend developers for API contracts and SQL optimization',
      'Participated in Agile sprint planning, peer code reviews, and knowledge sharing',
      'Contributed to containerized deployment workflows with Docker',
    ],
  },
];

// ============================================================
// NAV LINKS
// ============================================================
export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const MARQUEE_ITEMS = [
  'REACT.JS', '⚡', 'TYPESCRIPT', '•', 'NODE.JS', '⚡', 'POSTGRESQL',
  '•', 'DOCKER', '⚡', 'REST APIs', '•', 'AGILE', '⚡', 'UI/UX',
  '•', 'JAVASCRIPT', '⚡', 'TAILWIND CSS', '•', 'GIT',
];
