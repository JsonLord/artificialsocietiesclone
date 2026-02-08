
import React from 'react';
import { LayoutTemplate, Smartphone, MousePointer2, Type, Eye, GitCompare } from 'lucide-react';

const TrustedBy: React.FC = () => {
  const dilemmas = [
    {
      icon: <LayoutTemplate size={20} />,
      category: "Layout Density",
      question: "Card Grid vs. List View?",
      outcome: "Which layout maximizes information retention?"
    },
    {
      icon: <Smartphone size={20} />,
      category: "Mobile Navigation",
      question: "Bottom Bar vs. Hamburger?",
      outcome: "Where does the thumb naturally reach?"
    },
    {
      icon: <MousePointer2 size={20} />,
      category: "Primary Action",
      question: "Floating Button vs. Header CTA?",
      outcome: "Optimizing for click-through rate."
    },
    {
      icon: <Type size={20} />,
      category: "Typography",
      question: "Serif vs. Sans-Serif Headers?",
      outcome: "Impact on brand perception and readability."
    },
    {
      icon: <Eye size={20} />,
      category: "Dark Mode",
      question: "True Black vs. Dark Gray?",
      outcome: "Reducing eye strain during long sessions."
    },
    {
      icon: <GitCompare size={20} />,
      category: "Onboarding",
      question: "Self-guided vs. Tooltip Tour?",
      outcome: "Balancing education with friction."
    }
  ];

  return (
    <section className="py-24 border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-3xl md:text-4xl font-semibold text-white mb-6">
          Shaped to solve UX issues before they arise.
        </h3>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
           Designers use Agentic User Experience (AUX) to answer the toughest trade-offs without waiting for live traffic data.
        </p>

        {/* UX Dilemmas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
           {dilemmas.map((item, idx) => (
             <div key={idx} className="group p-8 rounded-2xl border border-gray-800 bg-gray-900/20 hover:border-teal-900/50 hover:bg-gray-900/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-5 text-gray-500 group-hover:text-teal-400 transition-colors">
                   {item.icon}
                   <span className="text-xs font-mono uppercase tracking-widest">{item.category}</span>
                </div>
                <div className="text-xl font-medium text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                  {item.question}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  {item.outcome}
                </p>
             </div>
           ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { value: "2,000+", label: "Persona Database ready", color: "border-blue-900" },
            { value: "Custom", label: "Database Possible", color: "border-teal-900" },
          ].map((stat, idx) => (
            <div key={idx} className={`relative flex flex-col items-center justify-center py-16 rounded-full border border-t-2 ${stat.color} bg-gradient-to-b from-gray-900 to-black`}>
              <h4 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h4>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
