
import { useState, useEffect } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-black z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-mask">
          <img
            src="/public/lovable-uploads/842580cf-4ee0-4d3e-adee-1e094fb4e786.png"
            alt="Tanjiro Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Water effect overlay */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div className="absolute inset-0 bg-tanjiro-primary animate-flow"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-20">
        {/* Left text content */}
        <div className="w-full md:w-1/2 text-white space-y-6 py-12 md:py-0">
          <div className={`transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow">
              <span className="block">Tushar as</span>
              <span className="text-tanjiro-primary text-5xl md:text-7xl">Tanjiro Kamado</span>
            </h1>
            <p className="text-xl mt-4 text-gray-100 max-w-lg">
              Professional cosplayer bringing the Water Breathing demon slayer to life with stunning authenticity and craftsmanship.
            </p>
          </div>
          
          <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex gap-4 mt-8">
              <a href="#gallery" className="bg-gradient-to-r from-tanjiro-primary to-tanjiro-secondary text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-tanjiro-primary/30 transition-all">
                View Gallery
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:border-tanjiro-primary hover:text-tanjiro-primary transition-all">
                Book Now
              </a>
            </div>
          </div>
        </div>
        
        {/* Right image */}
        <div className="w-full md:w-1/2 relative flex justify-center">
          <div className={`relative transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Water breathing circle effect */}
            <div className="absolute -inset-8 water-breathing"></div>
            
            {/* Main image */}
            <img 
              src="/public/lovable-uploads/a422d274-30ac-427d-8f99-51dcb93aff5f.png" 
              alt="Tushar as Tanjiro" 
              className="relative z-10 max-h-[70vh] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
