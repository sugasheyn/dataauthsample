import { Heart, Users, Handshake, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "40% Discount",
    description: "Significant savings on all writing services for verified non-profit organizations"
  },
  {
    icon: Users,
    title: "Mission-Driven",
    description: "Supporting organizations that create positive impact in their communities"
  },
  {
    icon: Handshake,
    title: "Partnership Focus",
    description: "Long-term collaboration to help amplify your organization's message"
  }
];

const eligibilityRequirements = [
  "Registered 501(c)(3) status or equivalent",
  "Valid non-profit documentation",
  "Mission-driven organization",
  "Community-focused activities"
];

export default function NonProfitDiscountSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="nonprofit" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" data-testid="nonprofit-title">
            Special Pricing for Non-Profits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="nonprofit-subtitle">
            Supporting organizations that make a difference with significantly reduced rates
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="grid gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start" data-testid={`nonprofit-benefit-${index}`}>
                    <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2" data-testid={`benefit-title-${index}`}>
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600" data-testid={`benefit-description-${index}`}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6" data-testid="eligibility-title">
              Eligibility Requirements
            </h3>
            <ul className="space-y-4">
              {eligibilityRequirements.map((requirement, index) => (
                <li key={index} className="flex items-center" data-testid={`requirement-${index}`}>
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-accent/10 rounded-lg">
              <p className="text-sm text-gray-600 mb-4" data-testid="verification-note">
                <strong>Verification Process:</strong> Please provide documentation of your non-profit status when requesting a quote. This helps us verify eligibility and apply the appropriate discount.
              </p>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full mt-6 bg-accent text-white py-3 rounded-lg hover:bg-accent/90 transition-colors font-semibold"
              data-testid="nonprofit-contact-button"
            >
              Get Your Non-Profit Quote
            </button>
          </div>
        </div>

        <div className="bg-primary-gradient rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4" data-testid="nonprofit-impact-title">
            Amplifying Your Impact Through Words
          </h3>
          <p className="text-blue-100 max-w-2xl mx-auto mb-6" data-testid="nonprofit-impact-description">
            Your organization's mission deserves powerful storytelling. With professional content that connects with donors, volunteers, and the communities you serve, we can help you communicate your impact more effectively.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">Grant Writing</div>
              <div className="text-blue-100 text-sm">Compelling proposals that secure funding</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">Donor Communications</div>
              <div className="text-blue-100 text-sm">Stories that inspire giving</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">Impact Reports</div>
              <div className="text-blue-100 text-sm">Data-driven narratives of your work</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}