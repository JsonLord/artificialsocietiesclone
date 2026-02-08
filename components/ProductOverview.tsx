import React from 'react';
import { Target, Maximize, Zap, DollarSign } from 'lucide-react';

const ProductOverview: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Targeted",
      desc: "Accurately model even hard-to-reach audiences."
    },
    {
      icon: <Maximize className="w-6 h-6" />,
      title: "Scalable",
      desc: "Test any form of idea, content, or decision"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid",
      desc: "Get actionable insights in minutes, not months."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Affordable",
      desc: "A fraction of the cost of traditional research."
    }
  ];

  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center mb-8">
          <span className="px-4 py-1.5 rounded-full border border-gray-700 text-sm text-gray-300">Product Overview</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-semibold text-center max-w-4xl mx-auto leading-tight mb-20">
          Create realistic simulations of your target audience to instantly test messages, content, or ideas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 border border-gray-800 rounded-2xl hover:border-gray-600 transition-colors bg-gray-900/20">
              <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center mb-6 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;