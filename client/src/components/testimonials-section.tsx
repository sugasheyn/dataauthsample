import { Handshake, Star, Clock, Heart, TrendingUp, Globe } from "lucide-react";

const testimonials = [
  {
    icon: Heart,
    category: "Medical Communication",
    quote: "The ability to translate complex medical concepts into accessible language while maintaining accuracy is invaluable. This writer consistently delivers content that both healthcare professionals and patients can trust.",
    author: "Dr. Sarah Chen, Healthcare Startup CEO"
  },
  {
    icon: TrendingUp,
    category: "Technology & Innovation",
    quote: "Technical writing that's both insightful and accessible is rare. This writer has a gift for making complex tech concepts engaging for diverse audiences.",
    author: "Michael Rodriguez, Tech Marketing Director"
  },
  {
    icon: Globe,
    category: "General Business",
    quote: "Every piece of content is strategically crafted to achieve specific business goals. The writing is clear, compelling, and conversion-focused.",
    author: "Jennifer Park, Content Strategy Manager"
  }
];

const features = [
  {
    icon: Handshake,
    title: "Partnership Focused",
    description: "Building long-term relationships based on results and trust"
  },
  {
    icon: Star,
    title: "Quality Driven",
    description: "Every project receives the same attention to detail and excellence"
  },
  {
    icon: Clock,
    title: "Deadline Focused",
    description: "Consistent, reliable delivery that respects your timeline"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" data-testid="testimonials-title">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="testimonials-subtitle">
            What clients say about working with me across different industries and content types
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                data-testid={`testimonial-${index}`}
              >
                <div className="flex items-center mb-4">
                  <div className="text-accent text-2xl mr-3">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                    {testimonial.category}
                  </span>
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-sm text-gray-600 font-medium">
                  — {testimonial.author}
                </cite>
              </div>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-8" data-testid="testimonials-building-title">
              Building Trust Through Quality Work
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="p-6 bg-warm-white rounded-xl" data-testid={`testimonial-feature-${index}`}>
                    <div className="text-accent text-2xl mb-3">
                      <IconComponent className="w-8 h-8 mx-auto" />
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2" data-testid={`feature-title-${index}`}>
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600" data-testid={`feature-description-${index}`}>
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
