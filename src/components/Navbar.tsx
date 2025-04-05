
import { Instagram } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="h-12 w-12 rounded-full overflow-hidden bg-gradient-to-r from-tanjiro-primary to-tanjiro-secondary p-[3px]">
            <div className="bg-black h-full w-full rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">TK</span>
            </div>
          </div>
          <span className="font-bold text-xl text-white text-shadow">Tushar's Cosplays</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#about" className="text-white hover:text-tanjiro-primary transition-colors">About</a>
          <a href="#gallery" className="text-white hover:text-tanjiro-primary transition-colors">Gallery</a>
          <a href="#events" className="text-white hover:text-tanjiro-primary transition-colors">Events</a>
          <a 
            href="https://instagram.com/digitally__artistic_" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:text-tanjiro-primary transition-colors"
          >
            <Instagram size={18} />
            <span>Follow</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
