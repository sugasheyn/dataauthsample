import { Lightbulb, Target, TrendingUp, Search, Edit, Zap, CheckCircle } from "lucide-react";

const beliefs = [
  {
    icon: Lightbulb,
    title: "Content Should Connect",
    description: "Every piece of writing should forge a genuine connection between you and your audience, speaking their language and addressing their real needs."
  },
  {
    icon: Target,
    title: "Purpose Drives Everything",
    description: "Great writing starts with understanding the 'why' behind every word, ensuring each piece serves a clear purpose and achieves specific goals."
  },
  {
    icon: TrendingUp,
    title: "Results Matter",
    description: "Beautiful writing means nothing without measurable impact. I focus on creating content that drives engagement, conversions, and business growth."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Understand the Goal",
    description: "Inform, persuade, or convert — every piece has a clear objective."
  },
  {
    number: 2,
    title: "Map the Audience",
    description: "Knowledge level, needs, and language preferences guide every word."
  },
  {
    number: 3,
    title: "Research Deeply",
    description: "Primary sources, reputable journals, and client insights inform content."
  },
  {
    number: 4,
    title: "Design the Structure",
    description: "Headings, flow, and logic create scannable, engaging content."
  },
  {
    number: 5,
    title: "Write for Voice & Precision",
    description: "Official English as the base, adapting tone as needed for context."
  },
  {
    number: 6,
    title: "Edit for Impact",
    description: "Tighten, verify, and refine for maximum effectiveness."
  }
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" data-testid="philosophy-title">
            My Writing Philosophy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="philosophy-subtitle">
            Great content is a system, not a scramble — structured, evidence-based, and empathy-driven
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6" data-testid="beliefs-title">
              What I Believe
            </h3>
            <div className="space-y-6">
              {beliefs.map((belief, index) => {
                const IconComponent = belief.icon;
                return (
                  <div key={index} className="flex items-start" data-testid={`belief-${index}`}>
                    <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-4 mt-1">
                      <IconComponent className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2" data-testid={`belief-title-${index}`}>
                        {belief.title}
                      </h4>
                      <p className="text-gray-600" data-testid={`belief-description-${index}`}>
                        {belief.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional business writing meeting" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="philosophy-image"
            />
          </div>
        </div>

        {/* Language Credo */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 mb-16 border border-primary/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Language Credo</h3>
            <p className="text-lg text-gray-700 italic">
              "Rules and expectations are always changing. Platforms evolve their own slang, formats, and house styles. It can be hard to find a writer who honors the official standard without sounding stiff — and who welcomes innovation without losing rigor.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              I aim for both: clean, standard-driven writing that adapts to the medium — precise on a medical page, conversational in a blog, and persuasive in a landing page — so your message lands with credibility and life."
            </p>
          </div>
        </div>

        <div className="bg-warm-white rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center" data-testid="process-title">
            My Content Creation Process
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center" data-testid={`process-step-${index}`}>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-3 text-sm" data-testid={`process-step-title-${index}`}>
                  {step.title}
                </h4>
                <p className="text-xs text-gray-600" data-testid={`process-step-description-${index}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
