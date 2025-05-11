import React, { useState } from 'react';
import { Search, Sliders, ArrowDownNarrowWide, ArrowUpNarrowWide } from 'lucide-react';
import ProjectCard from '../components/project/ProjectCard';
import TextField from '../components/ui/TextField';
import Select from '../components/ui/Select';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { projects, categories, skillsList } from '../data/mockData';
import { Project } from '../types';

const ProjectsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('recent');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [showFilters, setShowFilters] = useState(false);
  
  // Generate category options for select
  const categoryOptions = [
    { value: '', label: 'All Categories' },
    ...categories.map(category => ({ value: category, label: category }))
  ];
  
  // Handle search and filter
  const handleSearch = () => {
    let results = [...projects];
    
    // Search term filter
    if (searchTerm) {
      results = results.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Category filter
    if (selectedCategory) {
      results = results.filter(project => project.category === selectedCategory);
    }
    
    // Skills filter
    if (selectedSkills.length > 0) {
      results = results.filter(project => 
        selectedSkills.some(skill => project.skills.includes(skill))
      );
    }
    
    // Price range filter
    if (priceRange.min) {
      results = results.filter(project => project.budget.min >= Number(priceRange.min));
    }
    if (priceRange.max) {
      results = results.filter(project => project.budget.max <= Number(priceRange.max));
    }
    
    // Sorting
    if (sortBy === 'recent') {
      results.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime());
    } else if (sortBy === 'oldest') {
      results.sort((a, b) => new Date(a.postedDate).getTime() - new Date(b.postedDate).getTime());
    } else if (sortBy === 'budget-high') {
      results.sort((a, b) => b.budget.max - a.budget.max);
    } else if (sortBy === 'budget-low') {
      results.sort((a, b) => a.budget.min - b.budget.min);
    }
    
    setFilteredProjects(results);
  };
  
  // Toggle a skill in the selected skills array
  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Browse Projects</h1>
        
        {/* Search Bar */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-grow">
              <TextField
                placeholder="Search for projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                leftIcon={<Search size={20} className="text-gray-400" />}
                fullWidth
              />
            </div>
            <div className="w-full md:w-56">
              <Select
                options={categoryOptions}
                value={selectedCategory}
                onChange={(value) => setSelectedCategory(value)}
                placeholder="All Categories"
                fullWidth
              />
            </div>
            <Button onClick={handleSearch}>
              Search
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              leftIcon={<Sliders size={16} />}
            >
              Filters
            </Button>
          </div>
          
          {/* Additional Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Price Range */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
                  <div className="flex items-center space-x-2">
                    <TextField
                      placeholder="Min"
                      type="number"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                    />
                    <span className="text-gray-500">-</span>
                    <TextField
                      placeholder="Max"
                      type="number"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                    />
                  </div>
                </div>
                
                {/* Sort Options */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Sort By</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSortBy('recent')}
                      className={`inline-flex items-center rounded-md px-3 py-1.5 text-sm ${
                        sortBy === 'recent' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <ArrowDownNarrowWide size={14} className="mr-1" />
                      Most Recent
                    </button>
                    <button
                      onClick={() => setSortBy('oldest')}
                      className={`inline-flex items-center rounded-md px-3 py-1.5 text-sm ${
                        sortBy === 'oldest' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <ArrowUpNarrowWide size={14} className="mr-1" />
                      Oldest First
                    </button>
                    <button
                      onClick={() => setSortBy('budget-high')}
                      className={`inline-flex items-center rounded-md px-3 py-1.5 text-sm ${
                        sortBy === 'budget-high' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      Budget: High to Low
                    </button>
                    <button
                      onClick={() => setSortBy('budget-low')}
                      className={`inline-flex items-center rounded-md px-3 py-1.5 text-sm ${
                        sortBy === 'budget-low' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      Budget: Low to High
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Skills */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skillsList.slice(0, 15).map((skill) => (
                    <button
                      key={skill}
                      onClick={() => toggleSkill(skill)}
                      className={`rounded-full px-3 py-1 text-sm ${
                        selectedSkills.includes(skill)
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                  <button className="rounded-full px-3 py-1 text-sm bg-gray-100 text-blue-600 hover:bg-gray-200">
                    + More Skills
                  </button>
                </div>
              </div>
              
              {/* Selected Filters */}
              {(selectedCategory || selectedSkills.length > 0 || priceRange.min || priceRange.max) && (
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  <span className="text-sm text-gray-500">Active filters:</span>
                  
                  {selectedCategory && (
                    <Badge
                      variant="primary"
                      className="px-3 py-1 flex items-center"
                    >
                      {selectedCategory}
                      <button
                        onClick={() => setSelectedCategory('')}
                        className="ml-1.5 h-4 w-4 rounded-full bg-blue-200 flex items-center justify-center"
                      >
                        <span className="sr-only">Remove filter</span>
                        <XIcon />
                      </button>
                    </Badge>
                  )}
                  
                  {selectedSkills.map(skill => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1 flex items-center"
                    >
                      {skill}
                      <button
                        onClick={() => toggleSkill(skill)}
                        className="ml-1.5 h-4 w-4 rounded-full bg-teal-200 flex items-center justify-center"
                      >
                        <span className="sr-only">Remove filter</span>
                        <XIcon />
                      </button>
                    </Badge>
                  ))}
                  
                  {(priceRange.min || priceRange.max) && (
                    <Badge
                      variant="primary"
                      className="px-3 py-1 flex items-center"
                    >
                      Price: ${priceRange.min || '0'} - ${priceRange.max || 'Any'}
                      <button
                        onClick={() => setPriceRange({ min: '', max: '' })}
                        className="ml-1.5 h-4 w-4 rounded-full bg-blue-200 flex items-center justify-center"
                      >
                        <span className="sr-only">Remove filter</span>
                        <XIcon />
                      </button>
                    </Badge>
                  )}
                  
                  <button
                    onClick={() => {
                      setSelectedCategory('');
                      setSelectedSkills([]);
                      setPriceRange({ min: '', max: '' });
                      setSortBy('recent');
                      setSearchTerm('');
                      setFilteredProjects(projects);
                    }}
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
              
              <div className="mt-6 flex justify-end">
                <Button onClick={handleSearch}>
                  Apply Filters
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Projects List */}
        <div className="mt-4">
          <p className="text-gray-500 mb-6">{filteredProjects.length} projects found</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <div className="col-span-3 py-16 text-center">
                <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
                <p className="text-gray-400 mt-2">Try adjusting your filters or search term.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const XIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L7 7M1 7L7 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default ProjectsPage;