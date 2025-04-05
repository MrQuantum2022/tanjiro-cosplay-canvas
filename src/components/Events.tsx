
import { useEffect, useRef, useState } from 'react';

const Events = () => {
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

  const events = [
    {
      title: "Engifest Cosplay Competition",
      date: "February 16-17, 2024",
      location: "DTU, Delhi",
      image: "/public/lovable-uploads/55587d8b-9942-42a7-ab58-90e32125b4dc.png",
      description: "First place winner at the anime cosplay competition with the Water Breathing showcase."
    },
    {
      title: "Japanese Society Cosplay Event",
      date: "April 4, 2024",
      location: "Maitreyi College, New Delhi",
      image: "/public/lovable-uploads/e3235dd9-fef5-46d8-9d5e-faf3b246e3f6.png",
      description: "Featured performer demonstrating Tanjiro's iconic Water Breathing techniques."
    },
    {
      title: "Anime Convention",
      date: "March 25, 2024",
      location: "Chankyapuri, New Delhi",
      image: "/public/lovable-uploads/2f6f1bb2-4146-4136-9ef6-3c47c3b0c0d4.png",
      description: "Special guest appearance alongside other Demon Slayer cosplayers."
    }
  ];
  
  return (
    <section id="events" ref={sectionRef} className="py-20 relative bg-gray-900">
      <div className="absolute inset-0 bg-wave-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold text-white mb-2 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            Event <span className="text-tanjiro-primary">Performances</span>
          </h2>
          <div className="w-24 h-1 bg-tanjiro-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className={`bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
                <div className="flex items-center gap-2 text-tanjiro-primary text-sm mb-3">
                  <span>{event.date}</span>
                  <span>•</span>
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
