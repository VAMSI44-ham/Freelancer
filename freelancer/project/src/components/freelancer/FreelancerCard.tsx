import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, CheckCircle } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { FreelancerProfile } from '../../types';

interface FreelancerCardProps {
  freelancer: FreelancerProfile;
}

const FreelancerCard: React.FC<FreelancerCardProps> = ({ freelancer }) => {
  return (
    <Card hoverable className="transition-all duration-300">
      <Link to={`/freelancers/${freelancer.id}`} className="block">
        <div className="flex items-start">
          <img 
            src={freelancer.avatar} 
            alt={freelancer.name} 
            className="w-16 h-16 rounded-full mr-4 object-cover"
          />
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors">
                {freelancer.name}
              </h3>
              <div className="flex items-center">
                <Star size={16} className="text-yellow-400 mr-1" />
                <span className="text-gray-700 font-medium">{freelancer.rating.toFixed(1)}</span>
                <span className="text-gray-500 text-sm ml-1">({freelancer.completedJobs})</span>
              </div>
            </div>
            
            <p className="text-gray-700 font-medium">{freelancer.title}</p>
            
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <MapPin size={14} className="mr-1" />
              <span>Remote</span>
            </div>
            
            <div className="mt-3 flex flex-wrap gap-2">
              {freelancer.skills.slice(0, 4).map((skill, index) => (
                <Badge key={index} variant="neutral">{skill}</Badge>
              ))}
              {freelancer.skills.length > 4 && (
                <Badge variant="neutral">+{freelancer.skills.length - 4} more</Badge>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
          <div>
            <p className="text-gray-900 font-medium">${freelancer.hourlyRate}/hr</p>
            <div className="flex items-center text-sm text-gray-500">
              <CheckCircle size={14} className="text-green-500 mr-1" />
              <span>{freelancer.completedJobs} jobs completed</span>
            </div>
          </div>
          
          <button className="text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium border border-blue-600 hover:border-blue-700 rounded-md px-3 py-1">
            View Profile
          </button>
        </div>
      </Link>
    </Card>
  );
};

export default FreelancerCard;