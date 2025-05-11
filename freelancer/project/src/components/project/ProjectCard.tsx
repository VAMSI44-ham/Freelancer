import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, PlusCircle, ChevronRight, Briefcase } from 'lucide-react';
import Badge from '../ui/Badge';
import Card from '../ui/Card';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Function to calculate time since posting
  const getTimeAgo = (dateString: string) => {
    const postedDate = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - postedDate.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return `${Math.floor(diffInDays / 30)} months ago`;
  };

  return (
    <Card hoverable className="transition-all duration-300">
      <Link to={`/projects/${project.id}`} className="block">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <Briefcase size={16} className="mr-1" />
              <span>{project.category}</span>
              <span className="mx-2">•</span>
              <Clock size={16} className="mr-1" />
              <span>{getTimeAgo(project.postedDate)}</span>
            </div>
          </div>
          <Badge 
            variant={project.status === 'open' ? 'success' : 
                    project.status === 'in-progress' ? 'warning' : 'neutral'}
          >
            {project.status === 'open' ? 'Open' : 
             project.status === 'in-progress' ? 'In Progress' : 'Completed'}
          </Badge>
        </div>
        
        <p className="mt-3 text-gray-600 line-clamp-2">{project.description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="neutral">{skill}</Badge>
          ))}
          {project.skills.length > 3 && (
            <Badge variant="neutral">+{project.skills.length - 3} more</Badge>
          )}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
          <div>
            <p className="text-gray-900 font-medium">
              {project.budget.type === 'fixed' ? 
                `$${project.budget.min.toLocaleString()} - $${project.budget.max.toLocaleString()}` : 
                `$${project.budget.min} - $${project.budget.max}/hr`}
            </p>
            <p className="text-sm text-gray-500">{project.proposals} proposals</p>
          </div>
          
          <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <PlusCircle size={16} className="mr-1" />
            <span className="text-sm font-medium mr-1">Apply Now</span>
            <ChevronRight size={16} />
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ProjectCard;