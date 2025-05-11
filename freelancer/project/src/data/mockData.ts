import { FreelancerProfile, ClientProfile, Project, Proposal, Review } from '../types';

// Mock freelancers data
export const freelancers: FreelancerProfile[] = [
  {
    id: '1',
    name: 'Alex Morgan',
    email: 'alex@example.com',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    userType: 'freelancer',
    joinedDate: '2023-01-15',
    title: 'Full Stack Developer',
    hourlyRate: 85,
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    bio: 'Experienced full stack developer with 7+ years of experience building scalable web applications.',
    portfolio: [
      {
        id: '1',
        title: 'E-commerce Platform',
        description: 'Built a full-featured e-commerce platform with React, Node.js, and MongoDB.',
        imageUrl: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: 'https://example.com/portfolio/ecommerce'
      },
      {
        id: '2',
        title: 'Social Media Dashboard',
        description: 'Created a responsive dashboard for monitoring social media analytics.',
        imageUrl: 'https://images.pexels.com/photos/4126743/pexels-photo-4126743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: 'https://example.com/portfolio/dashboard'
      }
    ],
    rating: 4.9,
    completedJobs: 38
  },
  {
    id: '2',
    name: 'Sarah Chen',
    email: 'sarah@example.com',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    userType: 'freelancer',
    joinedDate: '2022-08-10',
    title: 'UI/UX Designer',
    hourlyRate: 75,
    skills: ['UI Design', 'UX Research', 'Figma', 'Adobe XD'],
    bio: 'Passionate UI/UX designer with a focus on creating beautiful, user-centered interfaces.',
    portfolio: [
      {
        id: '1',
        title: 'Banking App Redesign',
        description: 'Redesigned a banking app focusing on simplicity and usability.',
        imageUrl: 'https://images.pexels.com/photos/6804601/pexels-photo-6804601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: 'https://example.com/portfolio/banking-app'
      }
    ],
    rating: 4.8,
    completedJobs: 27
  },
  {
    id: '3',
    name: 'David Wilson',
    email: 'david@example.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    userType: 'freelancer',
    joinedDate: '2023-03-22',
    title: 'Mobile Developer',
    hourlyRate: 90,
    skills: ['React Native', 'iOS', 'Android', 'Firebase'],
    bio: 'Specialized in creating cross-platform mobile applications that deliver exceptional user experiences.',
    portfolio: [
      {
        id: '1',
        title: 'Fitness Tracking App',
        description: 'Developed a fitness tracking app with React Native and Firebase.',
        imageUrl: 'https://images.pexels.com/photos/4098366/pexels-photo-4098366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        link: 'https://example.com/portfolio/fitness-app'
      }
    ],
    rating: 4.7,
    completedJobs: 19
  }
];

// Mock clients data
export const clients: ClientProfile[] = [
  {
    id: '101',
    name: 'Tech Innovators Inc.',
    email: 'contact@techinnovators.com',
    avatar: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    userType: 'client',
    joinedDate: '2022-05-18',
    company: 'Tech Innovators Inc.',
    industry: 'Software Development',
    projectsPosted: 12
  },
  {
    id: '102',
    name: 'Creative Solutions',
    email: 'projects@creativesolutions.com',
    avatar: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    userType: 'client',
    joinedDate: '2023-01-05',
    company: 'Creative Solutions',
    industry: 'Digital Marketing',
    projectsPosted: 8
  }
];

// Mock projects data
export const projects: Project[] = [
  {
    id: '201',
    title: 'E-commerce Website Development',
    description: 'We need a skilled developer to build a modern e-commerce website with product catalog, shopping cart, and payment integration. The platform should be responsive and provide a seamless shopping experience.',
    budget: {
      min: 3000,
      max: 5000,
      type: 'fixed'
    },
    skills: ['React', 'Node.js', 'MongoDB', 'Payment Integration'],
    category: 'Web Development',
    client: clients[0],
    proposals: 7,
    postedDate: '2023-05-15',
    deadline: '2023-06-30',
    status: 'open'
  },
  {
    id: '202',
    title: 'Mobile App UI/UX Design',
    description: 'Looking for a talented UI/UX designer to create the interface for our new fitness mobile application. We need wireframes, prototypes, and final designs for both iOS and Android platforms.',
    budget: {
      min: 50,
      max: 75,
      type: 'hourly'
    },
    skills: ['UI Design', 'UX Design', 'Figma', 'Mobile Design'],
    category: 'Design',
    client: clients[1],
    proposals: 12,
    postedDate: '2023-05-10',
    deadline: '2023-06-15',
    status: 'open'
  },
  {
    id: '203',
    title: 'WordPress Blog Customization',
    description: 'We have an existing WordPress blog that needs customization. We\'re looking for someone to implement a new theme, optimize for speed, and add some custom functionality.',
    budget: {
      min: 1000,
      max: 2000,
      type: 'fixed'
    },
    skills: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
    category: 'Web Development',
    client: clients[0],
    proposals: 5,
    postedDate: '2023-05-08',
    status: 'in-progress'
  },
  {
    id: '204',
    title: 'React Native Fitness App',
    description: 'We\'re looking for an experienced React Native developer to build a cross-platform fitness application with workout tracking, nutrition plans, and progress analytics.',
    budget: {
      min: 4000,
      max: 6000,
      type: 'fixed'
    },
    skills: ['React Native', 'Firebase', 'UI/UX', 'Mobile Development'],
    category: 'Mobile Development',
    client: clients[1],
    proposals: 9,
    postedDate: '2023-05-05',
    deadline: '2023-07-10',
    status: 'open'
  },
  {
    id: '205',
    title: 'Brand Identity Design',
    description: 'New startup seeking a designer to create a complete brand identity including logo, color palette, typography, and brand guidelines.',
    budget: {
      min: 2500,
      max: 3500,
      type: 'fixed'
    },
    skills: ['Logo Design', 'Branding', 'Illustrator', 'Identity Design'],
    category: 'Design',
    client: clients[0],
    proposals: 15,
    postedDate: '2023-05-01',
    deadline: '2023-06-01',
    status: 'completed'
  }
];

// Mock proposals data
export const proposals: Proposal[] = [
  {
    id: '301',
    project: projects[0],
    freelancer: freelancers[0],
    coverLetter: 'I have extensive experience building e-commerce platforms with React and Node.js. I\'ve worked on similar projects and can deliver a high-quality solution within your timeline.',
    bid: 4200,
    estimatedTime: 4,
    status: 'pending',
    submittedDate: '2023-05-16'
  },
  {
    id: '302',
    project: projects[1],
    freelancer: freelancers[1],
    coverLetter: 'As a UI/UX designer specializing in mobile applications, I believe I\'m a perfect fit for your project. I can create intuitive and beautiful interfaces that users will love.',
    bid: 70,
    estimatedTime: 40,
    status: 'accepted',
    submittedDate: '2023-05-11'
  }
];

// Mock reviews data
export const reviews: Review[] = [
  {
    id: '401',
    project: projects[4],
    reviewer: clients[0],
    reviewee: freelancers[1],
    rating: 5,
    comment: 'Sarah delivered exceptional work! The brand identity she created perfectly captured our vision. Highly recommended!',
    date: '2023-06-02'
  },
  {
    id: '402',
    project: projects[2],
    reviewer: clients[0],
    reviewee: freelancers[0],
    rating: 4,
    comment: 'Alex did a great job customizing our WordPress site. Good communication and delivered on time.',
    date: '2023-05-25'
  }
];

// Skills array for dropdowns and filters
export const skillsList = [
  'React', 'Angular', 'Vue.js', 'JavaScript', 'TypeScript',
  'Node.js', 'Express', 'Django', 'Flask', 'Ruby on Rails',
  'PHP', 'Laravel', 'WordPress', 'Shopify',
  'HTML', 'CSS', 'SASS', 'LESS', 'Tailwind CSS', 'Bootstrap',
  'MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis',
  'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes',
  'UI Design', 'UX Design', 'Graphic Design', 'Logo Design', 'Illustration',
  'Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator',
  'React Native', 'Flutter', 'Swift', 'Kotlin', 'Mobile Development',
  'DevOps', 'CI/CD', 'Testing', 'SEO', 'Digital Marketing'
];

// Categories for projects
export const categories = [
  'Web Development',
  'Mobile Development',
  'Design',
  'Marketing',
  'Writing',
  'Admin Support',
  'Customer Service',
  'Sales',
  'Accounting',
  'Consulting',
  'Legal',
  'Engineering',
  'Data Science'
];