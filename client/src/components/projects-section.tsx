import { Calendar, Heart, TrendingUp, Globe } from "lucide-react";

const currentProjects = [
  {
    status: "In Progress",
    statusColor: "bg-accent/10 text-accent",
    industry: "Healthcare",
    title: "Type 1 Diabetes Patient Education",
    description: "Creating accessible, medically accurate content that helps patients understand their condition and treatment options.",
    completion: "End of month"
  },
  {
    status: "Research Phase",
    statusColor: "bg-yellow-100 text-yellow-800",
    industry: "Technology",
    title: "AI in Healthcare Analysis",
    description: "Comprehensive 5-part analysis of emerging AI trends in digital health for a medical technology company.",
    completion: "Next month"
  },
  {
    status: "Strategy",
    statusColor: "bg-blue-100 text-blue-800",
    industry: "Non-Profit",
    title: "Grant Writing & Impact Reports",
    description: "Developing compelling grant proposals and impact narratives for community health organizations.",
    completion: "2 weeks"
  }
];

export default function ProjectsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" data-testid="projects-title">
            Current Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="projects-subtitle">
            A glimpse into the exciting projects I'm currently working on across medical, tech, and non-profit sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              data-testid={`project-card-${index}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${project.statusColor}`}>
                  {project.status}
                </span>
                <span className="text-gray-500 text-sm">{project.industry}</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3" data-testid={`project-title-${index}`}>
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4" data-testid={`project-description-${index}`}>
                {project.description}
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                Expected completion: {project.completion}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary-gradient rounded-xl p-8 text-white">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=300" 
              alt="Professional content creation workspace setup" 
              className="rounded-lg mb-6 w-full h-48 object-cover"
              data-testid="projects-cta-image"
            />
            <h3 className="text-2xl font-bold mb-4" data-testid="projects-cta-title">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto" data-testid="projects-cta-description">
              I'm currently accepting new projects and would love to help turn your complex ideas into clear, actionable language. Let's discuss how we can work together.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors font-semibold inline-block"
              data-testid="projects-cta-button"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
