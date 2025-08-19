import { TrendingUp, Info, Globe, Megaphone, Edit3, Plus, Heart, BookOpen, Users } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Analytical Articles",
    description: "Data-driven, thought leadership content that breaks down complex topics into digestible insights for your audience.",
    features: ["Market analysis", "Industry reports", "Data interpretation", "Research-backed insights"]
  },
  {
    icon: Info,
    title: "Informational Articles",
    description: "Clear, structured explainers that educate and inform while establishing your expertise and credibility.",
    features: ["How-to guides", "Educational content", "Explainer articles", "Step-by-step processes"]
  },
  {
    icon: Globe,
    title: "Website Copy",
    description: "Compelling web content that converts visitors into customers and clearly communicates your value proposition.",
    features: ["Home pages", "About pages", "Service descriptions", "Product pages"]
  },
  {
    icon: Megaphone,
    title: "Marketing Copy",
    description: "Persuasive marketing content designed to drive action and boost your conversion rates.",
    features: ["Landing pages", "Email campaigns", "Ad copy", "Sales pages"]
  },
  {
    icon: Heart,
    title: "Medical & Health Communication",
    description: "Patient or professional medical content that's accurate, accessible, and empathetic.",
    features: ["Patient education", "Medical marketing", "Health blogs", "Clinical content"]
  },
  {
    icon: BookOpen,
    title: "Editorial Consulting",
    description: "Content audits, tone guides, and content calendars to elevate your brand voice.",
    features: ["Content audits", "Tone guides", "Content calendars", "Brand voice development"]
  }
];

const specialOffers = [
  {
    icon: Plus,
    title: "New Client Starter",
    description: "20% off first blog package (3+ posts)",
    highlight: "Limited Time"
  },
  {
    icon: Users,
    title: "Ongoing Partner Rate",
    description: "Discounted monthly bundles for long-term clients",
    highlight: "Best Value"
  },
  {
    icon: TrendingUp,
    title: "Kickoff Bonus",
    description: "Free headlines & meta descriptions with first package",
    highlight: "Free Bonus"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" data-testid="services-title">
            Writing Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="services-subtitle">
            Each project includes light research, consistent formatting, and one revision. Extra research or multi-stakeholder edits available.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                data-testid={`service-card-${index}`}
              >
                <div className="text-accent text-3xl mb-4">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4" data-testid={`service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Special Offers Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-primary mb-4">Special Offers</h3>
          <p className="text-lg text-gray-600 mb-8">Exclusive deals to help you get started</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {specialOffers.map((offer, index) => {
            const IconComponent = offer.icon;
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl border border-accent/20 p-6 text-center"
                data-testid={`offer-card-${index}`}
              >
                <div className="text-accent text-2xl mb-3">
                  <IconComponent className="w-6 h-6 mx-auto" />
                </div>
                <div className="bg-accent text-white text-xs px-3 py-1 rounded-full inline-block mb-3">
                  {offer.highlight}
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{offer.title}</h4>
                <p className="text-gray-600 text-sm">{offer.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
