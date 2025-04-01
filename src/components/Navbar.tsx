
import { useState, useEffect } from 'react';
import { Menu, X, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['home','about', 'services', 'works', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'works', label: 'Works' },
    { id: 'contact', label: 'Contact' }
    
  ];
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-secondary/90 backdrop-blur-md py-2 shadow-md" : "bg-transparent py-4"
      )}
    >
      <div className="voxel-container flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-glow text-voxel flex items-center">
        <img
          src="/src/assets/voxel.png"
          alt="Voxel Logo"
          className="mr-2 h-8 w-15 rounded"
        />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <button 
              key={item.id}
              onClick={() => scrollTo(item.id)} 
              className={cn(
                "relative py-2 transition-colors",
                activeSection === item.id ? "text-voxel" : "text-foreground/90 hover:text-voxel"
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-voxel rounded-full" />
              )}
            </button>
          ))}
        </div>
        
        {/* <Button onClick={() => scrollTo('contact')} className="hidden md:flex bg-voxel hover:bg-voxel/90 group">
          Get a Quote
          <Play className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button> */}
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground bg-card/30 p-2 rounded-md" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-x-0 top-[64px] bg-secondary/95 backdrop-blur-md transition-all duration-300 flex flex-col md:hidden py-4",
          isOpen ? "opacity-100 h-auto" : "opacity-0 h-0 pointer-events-none"
        )}
      >
        <div className="voxel-container flex flex-col space-y-4 px-4">
          {navItems.map(item => (
            <button 
              key={item.id}
              onClick={() => scrollTo(item.id)} 
              className={cn(
                "text-left py-2 transition-colors",
                activeSection === item.id ? "text-voxel" : "text-foreground/90 hover:text-voxel"
              )}
            >
              {item.label}
            </button>
          ))}
          {/* <Button onClick={() => scrollTo('contact')} className="w-full mt-4 bg-voxel hover:bg-voxel/90 group">
            Get a Quote
            <Play className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
