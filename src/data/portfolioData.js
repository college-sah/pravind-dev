export const PERSONAL_INFO = {
  name: 'Pravind Sah',
  title: 'Frontend Developer Intern',
  tagline: 'Building clean, responsive and user-friendly web experiences with React.',
  supportingText: 'B.Sc. CSIT student and aspiring Frontend Developer with hands-on experience building responsive web applications using HTML, CSS, JavaScript, React.js, Tailwind CSS and Bootstrap.',
  location: 'Biratnagar, Nepal',
  email: 'sahpravind83@gmail.com',
  phone: '+977 9825700506',
  github: 'https://github.com/college-sah',
  linkedin: 'https://linkedin.com/in/pravind-sah-placeholder',
  status: 'Available for Frontend Internship',
  college: 'AIMS College, Biratnagar',
  educationSummary: 'B.Sc. CSIT — 4th Semester',
  resumeUrl: '/resume.pdf'
};
export const PROJECTS = [{
  id: 'youtube-clone',
  title: 'YouTube Clone',
  tagline: 'Feature-rich video browsing & playback experience powered by REST API',
  description: 'A responsive YouTube-inspired application with video browsing, search, categories, thumbnails and video playback. Integrated external API data and implemented client-side routing.',
  detailedOverview: 'Engineered a scalable single-page video platform modeled after YouTube. The application interacts with external video APIs to fetch trending feeds, channel specifics, search queries, and suggested content. Focus was placed on low-latency state caching, modular component breakdown, and sleek responsive playback across all devices.',
  problem: 'Standard video platform clones often suffer from clunky navigation, poor loading states, and brittle search query parsing on responsive devices.',
  solution: 'Architected dynamic routing using React Router, debounced search queries, decoupled video cards into self-contained components, and styled a dark-mode first UI using Tailwind CSS.',
  technologies: ['React.js', 'Tailwind CSS', 'REST API', 'Axios', 'React Router'],
  features: ['Video browsing feed with trending highlights', 'Instant search with responsive results', 'Category filter pill-less navigation bar', 'High-resolution thumbnail previews & duration tags', 'Embedded video playback player & related video rail', 'Asynchronous Axios REST API data integration', 'Client-side routing with clean URL parameters', 'Mobile-first responsive layout (320px to 4K)'],
  challenges: ['Managing API quota limits and graceful mock fallbacks during high traffic', 'Handling nested responsive layouts for the main feed and playback sidebar', 'Optimizing image render times with lazy-loading attributes'],
  githubUrl: 'https://github.com/college-sah',
  liveDemoUrl: 'https://github.com/college-sah',
  featured: true,
  category: 'react',
  interactiveDemoType: 'youtube',
  highlights: ['External REST API', 'React Router v6', 'Tailwind Responsive']
}, {
  id: 'shopping-cart',
  title: 'Shopping Cart',
  tagline: 'Component-based e-commerce store with synchronized cart state',
  description: 'A component-based shopping cart application with product listing, cart state management and an interactive user interface.',
  detailedOverview: 'Built a reactive e-commerce product exploration and checkout system. Features dynamic category filtering, price calculations, instant cart item counters, quantity modifiers, and promo discount computation.',
  problem: 'Managing shopping cart state across isolated product cards and the checkout drawer often leads to out-of-sync totals and state mutations.',
  solution: 'Utilized React immutable state patterns and custom reducer logic to keep quantity, inventory status, price subtotals, and shipping thresholds strictly synchronized in real time.',
  technologies: ['React.js', 'JavaScript', 'CSS'],
  features: ['Dynamic product listing with categories & price badges', 'One-click Add to Cart with inventory counters', 'Slide-over interactive cart summary drawer', 'Increment, decrement, and item removal actions', 'Real-time subtotal, tax calculation, and discounts', 'Reusable UI components (ProductCard, CartItem, Badge)', 'Smooth state transitions and empty cart indicators'],
  challenges: ['Ensuring instantaneous subtotal calculations without layout shifts', 'Handling mobile touch ergonomics inside the flyout cart drawer'],
  githubUrl: 'https://github.com/college-sah',
  liveDemoUrl: 'https://github.com/college-sah',
  featured: true,
  category: 'react',
  interactiveDemoType: 'cart',
  highlights: ['React State & Props', 'E-commerce UI', 'Zero-friction Checkout']
}, {
  id: 'react-todo-app',
  title: 'React Todo App',
  tagline: 'Intuitive CRUD task management with state persistence',
  description: 'A responsive task management application demonstrating React state, events, reusable components and CRUD-style task operations.',
  detailedOverview: 'Designed a productivity dashboard focused on rapid keyboard workflows and clean task segregation. Supports inline task editing, priority classification, active/completed status toggling, and local storage state persistence.',
  problem: 'Simple todo apps can feel lifeless without proper keyboard accessibility, clear visual status distinction, and persistent storage.',
  solution: 'Implemented clean event listeners, dual-state modal/inline editing, local storage sync, and filter controls (All, Active, Completed) using pure React hooks.',
  technologies: ['React.js', 'JavaScript', 'CSS'],
  features: ['Add new tasks with description and priority tags', 'Inline edit mode with keyboard save (Enter) and cancel (Esc)', 'One-click completion toggle with visual strikethrough', 'Batch clear-completed action and single delete modal', 'Filter by status (All, Active, Completed)', 'Local storage persistence across browser reloads', 'Keyboard accessibility and responsive layouts'],
  challenges: ['Synchronizing local storage state seamlessly on every state mutation', 'Structuring reusable component interfaces for task lists and items'],
  githubUrl: 'https://github.com/college-sah',
  liveDemoUrl: 'https://github.com/college-sah',
  featured: true,
  category: 'react',
  interactiveDemoType: 'todo',
  highlights: ['CRUD Operations', 'Local Storage Persistence', 'Modular Architecture']
}, {
  id: 'viperteam7-hackathon',
  title: 'ViperTeam7 — Hackathon Project',
  tagline: 'Collaborative frontend interface developed under rapid hackathon sprint',
  description: 'A collaborative hackathon project where I contributed to the frontend implementation and user interface as part of a development team.',
  detailedOverview: 'Built during a fast-paced development hackathon alongside peer developers. Spearheaded the frontend structure, responsive landing layout, typography pairing, and client-side interactions to present our team concept effectively under strict deadlines.',
  problem: 'Rapid prototype development during hackathons requires rapid coordination, clean CSS structuring without collisions, and delivering a functional UI in hours.',
  solution: 'Established modular CSS conventions, separated layout sections into distinct files, and led git merge reviews for frontend templates to avoid conflicts.',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  badge: 'Team Project',
  features: ['Collaborative team development workflow using Git & GitHub', 'Rapid responsive frontend prototyping under sprint constraints', 'Accessible semantic HTML5 layout and clean CSS styling', 'Interactive JavaScript DOM interactions and event handling', 'Multi-device view testing (Mobile, Tablet, Desktop)'],
  challenges: ['Synchronizing branch changes across teammates under tight time limits', 'Maintaining consistent visual design without heavy external frameworks'],
  githubUrl: 'https://github.com/college-sah',
  liveDemoUrl: 'https://github.com/college-sah',
  featured: true,
  category: 'hackathon',
  interactiveDemoType: 'hackathon',
  highlights: ['Hackathon Sprint', 'Team Collaboration', 'Responsive UI']
}];
export const SKILLS = [
// Frontend
{
  name: 'HTML5',
  category: 'frontend',
  level: 'Comfortable',
  description: 'Semantic document structure, accessible landmarks, and modern web standards',
  iconName: 'Code'
}, {
  name: 'CSS3',
  category: 'frontend',
  level: 'Comfortable',
  description: 'Flexbox, Grid, keyframe animations, media queries, and responsive layouts',
  iconName: 'Palette'
}, {
  name: 'JavaScript ES6+',
  category: 'frontend',
  level: 'Comfortable',
  description: 'Arrow functions, destructuring, promises, async/await, array methods, DOM APIs',
  iconName: 'Terminal'
}, {
  name: 'React.js',
  category: 'frontend',
  level: 'Comfortable',
  description: 'Declarative component architecture, functional patterns, props, and JSX',
  iconName: 'Atom'
}, {
  name: 'Tailwind CSS',
  category: 'frontend',
  level: 'Comfortable',
  description: 'Utility-first styling, responsive prefixes, custom configuration, dark mode',
  iconName: 'Sparkles'
}, {
  name: 'Bootstrap',
  category: 'frontend',
  level: 'Intermediate',
  description: 'Grid systems, responsive utility classes, pre-built components, and prototyping',
  iconName: 'Layers'
},
// React Ecosystem
{
  name: 'React Hooks',
  category: 'react',
  level: 'Comfortable',
  description: 'useState, useEffect, useRef, useMemo, and custom hook development',
  iconName: 'Cpu'
}, {
  name: 'React Router',
  category: 'react',
  level: 'Intermediate',
  description: 'Client-side routing, route parameters, navigation guards, dynamic views',
  iconName: 'Compass'
}, {
  name: 'Context API',
  category: 'react',
  level: 'Intermediate',
  description: 'Global state passing, theme providers, user preference stores',
  iconName: 'Share2'
}, {
  name: 'Component-based Development',
  category: 'react',
  level: 'Comfortable',
  description: 'Decoupled, reusable UI primitives, prop validation, and single responsibility',
  iconName: 'Box'
},
// APIs
{
  name: 'REST APIs',
  category: 'apis',
  level: 'Comfortable',
  description: 'HTTP methods (GET, POST, PUT, DELETE), status codes, endpoint integration',
  iconName: 'Globe'
}, {
  name: 'Axios',
  category: 'apis',
  level: 'Comfortable',
  description: 'Promise-based HTTP client, request/response interceptors, error handling',
  iconName: 'Send'
}, {
  name: 'API Integration',
  category: 'apis',
  level: 'Comfortable',
  description: 'Async data fetching, loading spinners, empty states, and error handling',
  iconName: 'Network'
}, {
  name: 'JSON',
  category: 'apis',
  level: 'Comfortable',
  description: 'Data serialization, nested payload transformation, schema structures',
  iconName: 'FileJson'
},
// Tools
{
  name: 'Git',
  category: 'tools',
  level: 'Comfortable',
  description: 'Version control, branch management, merge resolution, commit hygiene',
  iconName: 'GitBranch'
}, {
  name: 'GitHub',
  category: 'tools',
  level: 'Comfortable',
  description: 'Repositories, pull requests, issue tracking, project documentation, code reviews',
  iconName: 'GitPullRequest'
}, {
  name: 'VS Code',
  category: 'tools',
  level: 'Comfortable',
  description: 'Modern developer workflow, extensions, debugging tools, Prettier, ESLint',
  iconName: 'Monitor'
}, {
  name: 'Vite',
  category: 'tools',
  level: 'Comfortable',
  description: 'Lightning-fast bundler, development server, modern build configuration',
  iconName: 'Zap'
}, {
  name: 'npm',
  category: 'tools',
  level: 'Comfortable',
  description: 'Package management, script orchestration, dependency resolution',
  iconName: 'Package'
}];
export const JOURNEY = [{
  stage: '01',
  title: 'Learning & Building',
  period: 'Current Academic Focus',
  badge: 'B.Sc. CSIT — 4th Semester',
  description: 'Currently developing frontend applications using React, JavaScript and modern CSS frameworks while pursuing computer science foundations.',
  highlights: ['Mastered core web fundamentals: HTML5, CSS3, modern JavaScript (ES6+)', 'Building single-page component architectures with React.js', 'Implementing utility-first responsive styling via Tailwind CSS']
}, {
  stage: '02',
  title: 'Project Development',
  period: 'Hands-on Execution',
  badge: 'Practical Portfolio',
  description: 'Transformed conceptual knowledge into 4 real-world projects emphasizing responsive behavior, asynchronous data fetching, and reusable components.',
  highlights: ['YouTube Clone with REST API and video playback features', 'Interactive E-commerce Shopping Cart with live calculations', 'React Todo App demonstrating full CRUD and local persistence', 'ViperTeam7 Hackathon collaborative frontend implementation']
}, {
  stage: '03',
  title: 'Current Goal',
  period: 'Next Milestone',
  badge: 'Open for Opportunities',
  description: 'Seeking a Frontend Developer Internship where I can contribute to real-world projects, learn from experienced senior developers, and grow as a software professional.',
  highlights: ['Ready to contribute to agile teams and production codebases', 'Eager to learn backend integration, testing, and modern frontend pipelines', 'Committed to writing readable, maintainable, and responsive UI code']
}];
export const EDUCATION = [{
  degree: 'B.Sc. CSIT (Bachelor of Science in Computer Science & Information Technology)',
  institution: 'AIMS College',
  location: 'Biratnagar, Nepal',
  period: '4th Semester (Ongoing)',
  semester: '4th Semester',
  status: 'In Progress',
  description: 'Currently pursuing B.Sc. CSIT while developing practical skills in frontend development, data structures, and software engineering.',
  coursework: ['Data Structures & Algorithms', 'Web Technologies & Development', 'Object-Oriented Programming (OOP)', 'Database Management Systems', 'Computer Architecture & OS']
}];
export const GITHUB_REPOS = [{
  name: 'youtube-clone-react',
  description: 'Responsive YouTube clone built with React.js, Tailwind CSS, and REST API integration.',
  language: 'JavaScript',
  languageColor: '#f7df1e',
  stars: 5,
  forks: 2,
  topics: ['react', 'tailwind', 'youtube-api', 'frontend'],
  url: 'https://github.com/college-sah'
}, {
  name: 'shopping-cart-react',
  description: 'Interactive shopping cart application with real-time state management and price calculations.',
  language: 'JavaScript',
  languageColor: '#f7df1e',
  stars: 3,
  forks: 1,
  topics: ['react', 'cart-state', 'components', 'css'],
  url: 'https://github.com/college-sah'
}, {
  name: 'react-todo-app',
  description: 'Clean CRUD task manager built with React hooks and local storage persistence.',
  language: 'JavaScript',
  languageColor: '#f7df1e',
  stars: 4,
  forks: 1,
  topics: ['react', 'crud', 'hooks', 'localstorage'],
  url: 'https://github.com/college-sah'
}, {
  name: 'viperteam7-hackathon',
  description: 'Collaborative hackathon submission featuring responsive layouts and team-developed UI.',
  language: 'HTML & CSS',
  languageColor: '#e34c26',
  stars: 6,
  forks: 3,
  topics: ['hackathon', 'team-project', 'vanilla-js', 'responsive-design'],
  url: 'https://github.com/college-sah'
}];