
import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import RealNetworkGraph from './RealNetworkGraph';

interface HeroProps {
  onStart?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content - Animated Transitions */}
        <div className="space-y-8 relative h-[400px]">
          {/* Slide 1 */}
          <div className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out transform ${currentSlide === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
             <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Test <span className="text-gray-400">Thumbnails</span> in Agentic User Experience (AUX)
            </h1>
            <p className="text-xl text-gray-400 mt-6 max-w-lg">
              Simulate millions of interactions with your website or content to predict performances with high accuracy.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="primary" size="lg" onClick={onStart}>Start Simulating</Button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out transform ${currentSlide === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Imagine testing your website's user journey on <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">10.000 instead of 10 users</span>.
            </h1>
            <p className="text-xl text-gray-400 mt-6 max-w-lg">
              Whether optimizing your website or still in developing the right visuals or content pieces, Agentic User Experience (AUX) enable you to make the right decisions, based on what your users want.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="primary" size="lg" onClick={onStart}>Start Simulating</Button>
            </div>
          </div>
        </div>

        {/* Right Visuals - Real Network Graph */}
        <div className="relative h-[500px] w-full flex items-center justify-center">
           <div 
             className="w-full h-full opacity-80"
             style={{ 
               maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
               WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)'
             }}
           >
              <RealNetworkGraph />
           </div>
           
           {/* Overlay Elements for depth */}
           <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
