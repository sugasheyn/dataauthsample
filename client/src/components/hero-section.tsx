export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 bg-primary-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Turn Complex Ideas Into <span className="text-accent">Clear, Actionable Language</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              I help companies, organizations, and individuals communicate with credibility and life. From medical accuracy to tech innovation, I deliver writing that works at the intersection of structure, evidence, and empathy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-accent text-white px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors text-lg font-semibold text-center"
                data-testid="button-view-work"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary transition-colors text-lg font-semibold text-center"
                data-testid="button-start-project"
              >
                Start Your Project
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional writing workspace with medical and tech content" 
              className="rounded-xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
