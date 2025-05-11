export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  userType: 'client' | 'freelancer';
  joinedDate: string;
}

export interface FreelancerProfile extends User {
  title: string;
  hourlyRate: number;
  skills: string[];
  bio: string;
  portfolio: PortfolioItem[];
  rating: number;
  completedJobs: number;
}

export interface ClientProfile extends User {
  company?: string;
  industry?: string;
  projectsPosted: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  budget: {
    min: number;
    max: number;
    type: 'fixed' | 'hourly';
  };
  skills: string[];
  category: string;
  client: ClientProfile;
  proposals: number;
  postedDate: string;
  deadline?: string;
  status: 'open' | 'in-progress' | 'completed';
}

export interface Proposal {
  id: string;
  project: Project;
  freelancer: FreelancerProfile;
  coverLetter: string;
  bid: number;
  estimatedTime: number;
  status: 'pending' | 'accepted' | 'rejected';
  submittedDate: string;
}

export interface Message {
  id: string;
  sender: User;
  recipient: User;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Review {
  id: string;
  project: Project;
  reviewer: User;
  reviewee: User;
  rating: number;
  comment: string;
  date: string;
}