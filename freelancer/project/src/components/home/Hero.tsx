import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 py-8 md:py-16 lg:py-24 bg-white sm:bg-transparent px-4 sm:px-6 lg:px-8 sm:max-w-lg lg:max-w-2xl xl:max-w-3xl">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block lg:inline">Find the perfect</span>{' '}
              <span className="block text-blue-600 lg:inline">freelance services</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Connect with talented freelancers for any project, any size. Work with the largest network of independent professionals for your business needs.
            </p>
            
            <div className="mt-8 sm:flex sm:items-center sm:space-x-4">
              <div className="relative rounded-md shadow-sm flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-12 py-3 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Try 'web development' or 'logo design'"
                />
              </div>
              <div className="mt-3 sm:mt-0 sm:flex-shrink-0">
                <Button 
                  size="lg"
                  className="w-full sm:w-auto"
                  rightIcon={<ArrowRight size={16} />}
                >
                  Search
                </Button>
              </div>
            </div>
            
            <div className="mt-6 text-sm text-gray-500">
              <span>Popular:</span>
              <Link to="/search?q=web-development" className="ml-2 text-blue-600 hover:text-blue-800">Web Development</Link>
              <Link to="/search?q=design" className="ml-2 text-blue-600 hover:text-blue-800">Design</Link>
              <Link to="/search?q=wordpress" className="ml-2 text-blue-600 hover:text-blue-800">WordPress</Link>
              <Link to="/search?q=mobile-app" className="ml-2 text-blue-600 hover:text-blue-800">Mobile App</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:right-0 sm:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Team working"
        />
      </div>
    </div>
  );
};

export default Hero;