import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full bg-white z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary" data-testid="brand-name">
              Professional Writing Services
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                data-testid="nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                data-testid="nav-portfolio"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('nonprofit')}
                className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                data-testid="nav-nonprofit"
              >
                Non-Profit
              </button>
              <button 
                onClick={() => scrollToSection('philosophy')}
                className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                data-testid="nav-philosophy"
              >
                Philosophy
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                data-testid="nav-projects"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
                data-testid="nav-contact"
              >
                Start Your Project
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-portfolio"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('nonprofit')}
              className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-nonprofit"
            >
              Non-Profit
            </button>
            <button 
              onClick={() => scrollToSection('philosophy')}
              className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-philosophy"
            >
              Philosophy
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left"
              data-testid="mobile-nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-accent text-white block px-3 py-2 rounded text-base font-medium w-full text-left"
              data-testid="mobile-nav-contact"
            >
              Start Your Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
