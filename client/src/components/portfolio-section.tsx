import { FileText, Heart, TrendingUp, Globe, Megaphone, BookOpen } from "lucide-react";

const writingSamples = [
  {
    icon: Heart,
    category: "Medical & Health",
    title: "Type 1 Diabetes Management",
    description: "Patient education content that balances medical accuracy with accessible language.",
    type: "Blog Post"
  },
  {
    icon: TrendingUp,
    category: "Technology & Innovation",
    title: "AI in Healthcare",
    description: "Analytical article exploring emerging trends and their impact on patient care.",
    type: "Thought Leadership"
  },
  {
    icon: Globe,
    category: "Website Copy",
    title: "Healthcare Startup Landing Page",
    description: "Conversion-focused copy that builds trust and drives patient engagement.",
    type: "Landing Page"
  },
  {
    icon: Megaphone,
    category: "Marketing Copy",
    title: "Medical Device Campaign",
    description: "Persuasive marketing content that educates while driving action.",
    type: "Email Campaign"
  },
  {
    icon: BookOpen,
    category: "Editorial",
    title: "Health & Wellness Blog",
    description: "Regular content that establishes authority and builds community.",
    type: "Blog Series"
  },
  {
    icon: FileText,
    category: "Analytical",
    title: "Healthcare Policy Analysis",
    description: "Data-driven insights that break down complex policy changes.",
    type: "White Paper"
  }
];

export default function PortfolioSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" data-testid="portfolio-title">
            View My Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="portfolio-subtitle">
            Samples showcasing my expertise across medical communication, technology, and marketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {writingSamples.map((sample, index) => {
            const IconComponent = sample.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100"
                data-testid={`portfolio-sample-${index}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-accent text-2xl">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                    {sample.type}
                  </span>
                </div>
                <h4 className="font-semibold text-primary mb-2 text-sm">
                  {sample.category}
                </h4>
                <h3 className="font-bold text-gray-800 mb-3" data-testid={`sample-title-${index}`}>
                  {sample.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4" data-testid={`sample-description-${index}`}>
                  {sample.description}
                </p>
                <div className="text-xs text-gray-500">
                  Click to view full sample →
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-12 text-center border border-primary/10">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4" data-testid="portfolio-cta-title">
              Ready to See More?
            </h3>
            <p className="text-lg text-gray-600 mb-8" data-testid="portfolio-cta-description">
              I'd be happy to provide custom samples relevant to your specific project during our consultation. Let's discuss how I can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors font-semibold"
                data-testid="portfolio-request-samples-button"
              >
                Request Custom Samples
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold"
                data-testid="portfolio-start-project-button"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
