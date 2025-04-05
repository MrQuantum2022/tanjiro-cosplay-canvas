
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/90 z-0"></div>
      
      {/* Decorative checker pattern */}
      <div className="absolute top-0 right-0 w-40 h-40 checkerboard opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 checkerboard opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-white mb-2 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            About <span className="text-tanjiro-primary">Tanjiro</span> Cosplay
          </h2>
          <div className="w-24 h-1 bg-tanjiro-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-tanjiro-primary to-tanjiro-haori-teal opacity-30 blur-md"></div>
              <img 
                src="/public/lovable-uploads/3a1c9e6f-a04e-462e-b831-79e2fee1aa86.png" 
                alt="Tushar as Tanjiro" 
                className="rounded-lg relative z-10 w-full"
              />
            </div>
          </div>
          
          {/* Right content */}
          <div className={`text-white space-y-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-tanjiro-primary">The Character</h3>
            <p className="text-gray-300">
              Tanjiro Kamado is the main protagonist of the hit anime "Demon Slayer: Kimetsu no Yaiba." He is known for his exceptional sense of smell, kind heart, and mastery of Water Breathing techniques.
            </p>
            
            <h3 className="text-2xl font-bold text-tanjiro-primary pt-4">The Cosplay</h3>
            <p className="text-gray-300">
              This cosplay features the iconic green-black checkered haori, Demon Slayer uniform, and Tanjiro's distinctive earrings and scar. The costume is meticulously crafted with attention to detail, from the Nichirin Blade to the traditional footwear.
            </p>
            
            <h3 className="text-2xl font-bold text-tanjiro-primary pt-4">Water Breathing</h3>
            <p className="text-gray-300">
              In performances, the cosplay comes to life with dynamic recreations of Tanjiro's Water Breathing forms, complete with flowing fabric and visual effects that capture the essence of these powerful techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
