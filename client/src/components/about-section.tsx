export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional writer specializing in medical and tech content" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="about-image"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" data-testid="about-title">
              About Your Writing Partner
            </h2>
            <p className="text-lg text-gray-600 mb-6" data-testid="about-description-1">
              I help companies, organizations, and individuals turn complex ideas into clear, actionable language. My work lives at the intersection of medical accuracy, lived experience with Type 1 diabetes, emerging technology, and the cultural conversations that shape how people read, decide, and act.
            </p>
            <p className="text-lg text-gray-600 mb-8" data-testid="about-description-2">
              Good writing isn't just words that sound nice — it's structure, evidence, and empathy working together. I bring a unique blend of strategic thinking and creative expression to every project, combining deep research, audience understanding, and compelling storytelling.
            </p>
            
            {/* Brand in Three Words */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-primary mb-3">Brand in Three Words</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full font-medium">Credible</span>
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full font-medium">Versatile</span>
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full font-medium">Engaging</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-experience">5+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2" data-testid="stat-projects">200+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
