import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">
              Kola <span className="text-blue-400">Smarani</span>
            </h3>
            <p className="text-slate-300">
              Software Testing Professional | Ensuring Quality & Reliability
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="mb-4 p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              <ArrowUp size={20} />
            </button>
            <div className="flex items-center text-slate-300">
              <span>Made with</span>
              <Heart className="mx-2 text-red-500 fill-current" size={16} />
              <span>by Kola Smarani</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400 text-sm">
          <p>&copy; 2025 Kola Smarani. All rights reserved.</p>
          <p className="mt-2">
            "Ensuring Quality. Delivering Reliability."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;