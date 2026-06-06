function Services() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-cyan-50/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
          Our AI Services
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-12">
          Explore our comprehensive AI solutions designed to transform your business operations, enhance customer engagement, and drive growth.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Static Service Cards */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              AI Business Automation
            </h3>
            <p className="text-slate-600 mb-6">
              Streamline your workflows and reduce manual overhead with intelligent automation.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              AI Business Promotion
            </h3>
            <p className="text-slate-600 mb-6">
              Scale your reach and optimize marketing campaigns using predictive AI tools.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              AI Agent Talk Time
            </h3>
            <p className="text-slate-600 mb-6">
              Enhance voice interactions and customer support with natural language processing.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              AI Automated Chatbot
            </h3>
            <p className="text-slate-600 mb-6">
              Provide 24/7 instant support with intelligent, context-aware chat agents.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              AI add-on Services
            </h3>
            <p className="text-slate-600 mb-6">
              Custom AI integrations and specialized tools to augment your existing stack.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
              Industry Specific AI
            </h3>
            <p className="text-slate-600 mb-6">
              Tailored use cases designed for the unique challenges of your specific market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;