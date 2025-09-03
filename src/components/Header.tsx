import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleResumeDownload = () => {
    // Create a simple resume content
    const resumeContent = `
KOLA SMARANI
Software Tester
Email: Smaranikola7@gmail.com
Phone: +91 9912515652

EXPERIENCE:
Software Test Engineer – Attivo Tech Solutions (Jan 2025 – Present)
- Worked on Adactin Project and MPIONLINE Project
- Designed and executed test cases and scenarios
- Performed manual testing and identified defects

EDUCATION:
M.Com – Dr.S.R.K.govt arts college (2020-2021) – 65%
B.Com – Dr.S.R.K.govt arts college (2016-2019) – 58%
Intermediate – Sri Sai junior college (2014-2016) – 64%
Schooling – RGG Govt high School (2014) – 78%

SKILLS:
- Manual Testing
- Basic Automation Testing
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Kola_Smarani_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-800">
            Kola <span className="text-blue-600">Smarani</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={handleResumeDownload}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {['Home', 'About', 'Education', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={handleResumeDownload}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-fit"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;