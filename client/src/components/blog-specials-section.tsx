const packages = [
  {
    name: "New Client Starter",
    price: "20% OFF",
    nonProfitPrice: "40% OFF",
    period: "first blog package (3+ posts)",
    features: [
      "3+ blog posts",
      "Light research included",
      "1 revision per post",
      "Consistent formatting",
      "5-day delivery"
    ],
    popular: false,
    highlight: "Limited Time"
  },
  {
    name: "Ongoing Partner Rate",
    price: "Monthly",
    nonProfitPrice: "40% OFF",
    period: "discounted bundles",
    features: [
      "5+ posts per month",
      "Priority scheduling",
      "2 revisions included",
      "Content calendar planning",
      "3-day delivery"
    ],
    popular: true,
    highlight: "Best Value"
  },
  {
    name: "Kickoff Bonus",
    price: "FREE",
    nonProfitPrice: "40% OFF",
    period: "with first package",
    features: [
      "Free headlines",
      "Meta descriptions",
      "SEO optimization",
      "Social media snippets",
      "Rush delivery available"
    ],
    popular: false,
    highlight: "Free Bonus"
  }
];

export default function BlogSpecialsSection() {
  return (
    <section className="py-20 bg-accent-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="blog-specials-title">
            Special Offers
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto" data-testid="blog-specials-subtitle">
            Exclusive deals to help you get started and build long-term partnerships
          </p>
          <div className="bg-yellow-400/20 border border-yellow-400/30 rounded-lg p-4 mt-6 max-w-2xl mx-auto">
            <p className="text-yellow-100 font-semibold">🌟 Non-Profit Organizations receive 40% off all packages!</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`backdrop-blur-sm rounded-xl p-8 text-center border ${
                pkg.popular 
                  ? 'bg-white/20 border-2 border-white transform scale-105' 
                  : 'bg-white/10 border-white/20'
              }`}
              data-testid={`package-card-${index}`}
            >
              {pkg.popular && (
                <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
              )}
              <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                {pkg.highlight}
              </div>
              <h3 className="text-2xl font-bold mb-4" data-testid={`package-name-${index}`}>
                {pkg.name}
              </h3>
              <div className="mb-4">
                <div className="text-4xl font-bold" data-testid={`package-price-${index}`}>
                  {pkg.price}
                </div>
                <div className="text-lg text-emerald-200" data-testid={`package-nonprofit-price-${index}`}>
                  Non-profits: {pkg.nonProfitPrice}
                </div>
              </div>
              <div className="text-emerald-100 mb-6" data-testid={`package-period-${index}`}>
                {pkg.period}
              </div>
              <ul className="text-left space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className="w-full bg-white text-accent py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                data-testid={`package-button-${index}`}
              >
                Start Your Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
