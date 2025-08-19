import { Linkedin, Twitter, Heart, TrendingUp, Globe } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4" data-testid="footer-brand-name">
              Professional Writing Services
            </h3>
            <p className="text-gray-400 mb-6 max-w-md" data-testid="footer-description">
              I help companies, organizations, and individuals turn complex ideas into clear, actionable language. Specializing in medical communication, technology, and strategic content.
            </p>
            
            {/* Brand in Three Words */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-3">Brand in Three Words</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium">Credible</span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium">Versatile</span>
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium">Engaging</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="footer-social-linkedin"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="footer-social-twitter"
                aria-label="Twitter profile"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-service-analytical"
                >
                  Analytical Articles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-service-informational"
                >
                  Informational Articles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-service-website"
                >
                  Website Copy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-service-marketing"
                >
                  Marketing Copy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-service-medical"
                >
                  Medical Communication
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-service-consulting"
                >
                  Editorial Consulting
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li data-testid="footer-contact-email">hello@yourname.com</li>
              <li data-testid="footer-contact-availability">Available for new projects</li>
              <li data-testid="footer-contact-response">Response within 24 hours</li>
              <li data-testid="footer-contact-special">Non-profit discounts available</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p data-testid="footer-copyright">
            &copy; 2024 Professional Writing Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
