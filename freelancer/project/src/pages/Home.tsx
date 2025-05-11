import React from 'react';
import Hero from '../components/home/Hero';
import ProjectCard from '../components/project/ProjectCard';
import FreelancerCard from '../components/freelancer/FreelancerCard';
import Button from '../components/ui/Button';
import { ChevronRight, Briefcase, User, Shield, Clock } from 'lucide-react';
import { projects, freelancers } from '../data/mockData';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Projects */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
            <Link to="/projects">
              <Button 
                variant="text" 
                rightIcon={<ChevronRight size={16} />}
              >
                View all projects
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Top Freelancers */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Top Freelancers</h2>
            <Link to="/freelancers">
              <Button 
                variant="text" 
                rightIcon={<ChevronRight size={16} />}
              >
                View all freelancers
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {freelancers.map((freelancer) => (
              <FreelancerCard key={freelancer.id} freelancer={freelancer} />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-500">
              SkillMatch connects businesses with talented freelancers in just a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Clients */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Clients</h3>
              <ol className="space-y-4 text-gray-600">
                <li className="flex">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <span>Post a job with your requirements and budget</span>
                </li>
                <li className="flex">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <span>Review proposals and select the perfect freelancer</span>
                </li>
                <li className="flex">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <span>Collaborate through our platform and get great work done</span>
                </li>
              </ol>
              <div className="mt-6">
                <Link to="/post-project">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    rightIcon={<ChevronRight size={16} />}
                  >
                    Post a Project
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* For Freelancers */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <User size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Freelancers</h3>
              <ol className="space-y-4 text-gray-600">
                <li className="flex">
                  <span className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                  <span>Create a complete profile showcasing your skills</span>
                </li>
                <li className="flex">
                  <span className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                  <span>Browse projects and submit winning proposals</span>
                </li>
                <li className="flex">
                  <span className="bg-purple-100 text-purple-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                  <span>Deliver great work and build your reputation</span>
                </li>
              </ol>
              <div className="mt-6">
                <Link to="/create-profile">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    rightIcon={<ChevronRight size={16} />}
                  >
                    Find Work
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Why Choose Us */}
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose Us</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex">
                  <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check />
                  </div>
                  <span>Verified professionals with proven track records</span>
                </li>
                <li className="flex">
                  <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check />
                  </div>
                  <span>Secure payments and contract protection</span>
                </li>
                <li className="flex">
                  <div className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check />
                  </div>
                  <span>24/7 support and dispute resolution</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/how-it-works">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    rightIcon={<ChevronRight size={16} />}
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-500">
              See what our clients and freelancers have to say about their experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "I found an amazing developer on SkillMatch who helped bring my app idea to life. The quality of talent and the ease of use made the whole process smooth."
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full mr-3"
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Avatar"
                />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Emily Johnson</h4>
                  <p className="text-sm text-gray-500">Startup Founder</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "As a freelance designer, SkillMatch has been a game-changer for my career. I've connected with clients from around the world and built a sustainable business."
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full mr-3"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Avatar"
                />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Michael Chen</h4>
                  <p className="text-sm text-gray-500">UI/UX Designer</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "We've been able to scale our content production by working with freelance writers through SkillMatch. The platform makes it easy to find and manage talent."
              </p>
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full mr-3"
                  src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Avatar"
                />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Sarah Williams</h4>
                  <p className="text-sm text-gray-500">Marketing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Ready to get started?</h2>
            <p className="mt-4 text-xl text-blue-100">
              Join thousands of clients and freelancers who are already growing with SkillMatch.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/signup" className="mr-4">
                <Button size="lg">Join as a Client</Button>
              </Link>
              <Link to="/signup?type=freelancer">
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                  Join as a Freelancer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Check: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const Star: React.FC<{ size: number }> = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export default Home;