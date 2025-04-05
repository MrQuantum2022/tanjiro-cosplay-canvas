
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <div className="h-8 w-8 rounded-full overflow-hidden bg-gradient-to-r from-tanjiro-primary to-tanjiro-secondary p-[2px]">
                <div className="bg-black h-full w-full rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">TK</span>
                </div>
              </div>
              Tushar's Cosplays
            </h3>
            <p className="text-gray-400 mt-2">Professional Tanjiro Kamado cosplayer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a 
                href="https://instagram.com/digitally__artistic_" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full text-white hover:opacity-90 transition-opacity"
              >
                <Instagram size={18} />
                <span>@digitally__artistic_</span>
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
