import React, { useState } from 'react';
import { Menu, X, Search, BellRing, MessageSquare, User } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock authentication state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Main Nav */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-blue-600 text-2xl font-bold">Skill</span>
                <span className="text-gray-800 text-2xl font-bold">Match</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <Link 
                to="/projects" 
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 border-transparent hover:border-blue-500 transition-colors"
              >
                Find Projects
              </Link>
              <Link 
                to="/freelancers" 
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-blue-500 hover:text-gray-900 transition-colors"
              >
                Find Freelancers
              </Link>
              <Link 
                to="/how-it-works" 
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-blue-500 hover:text-gray-900 transition-colors"
              >
                How It Works
              </Link>
            </nav>
          </div>
          
          {/* Search and User Navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0 hidden md:flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  <button className="text-gray-400 hover:text-gray-500 p-1 rounded-full hover:bg-gray-100 transition-colors">
                    <Search size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-gray-500 p-1 rounded-full hover:bg-gray-100 transition-colors">
                    <MessageSquare size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-gray-500 p-1 rounded-full hover:bg-gray-100 transition-colors">
                    <BellRing size={20} />
                  </button>
                  <Link to="/dashboard" className="relative ml-2">
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="User"
                    />
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-green-400 ring-2 ring-white"></span>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline">Log In</Button>
                  </Link>
                  <Link to="/signup">
                    <Button>Sign Up</Button>
                  </Link>
                </>
              )}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden -mr-2 flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              to="/projects" 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-900 transition-colors"
            >
              Find Projects
            </Link>
            <Link 
              to="/freelancers" 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-900 transition-colors"
            >
              Find Freelancers
            </Link>
            <Link 
              to="/how-it-works" 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-900 transition-colors"
            >
              How It Works
            </Link>
          </div>
          
          {/* Mobile auth buttons */}
          {!isLoggedIn && (
            <div className="pt-4 pb-3 border-t border-gray-200 flex flex-col space-y-3 px-4">
              <Link to="/login" className="w-full">
                <Button variant="outline" fullWidth>Log In</Button>
              </Link>
              <Link to="/signup" className="w-full">
                <Button fullWidth>Sign Up</Button>
              </Link>
            </div>
          )}
          
          {/* Mobile User profile */}
          {isLoggedIn && (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="User"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">David Wilson</div>
                  <div className="text-sm font-medium text-gray-500">david@example.com</div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Link 
                  to="/dashboard" 
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/messages" 
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Messages
                </Link>
                <Link 
                  to="/notifications" 
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Notifications
                </Link>
                <button 
                  onClick={() => setIsLoggedIn(false)} 
                  className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;