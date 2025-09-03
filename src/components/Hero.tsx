import React from 'react';
import { ArrowRight, Mail, Phone, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Welcome to my portfolio
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Hello, I'm <br />
                <span className="text-blue-600">Kola Smarani</span>
              </h1>
              <div className="text-xl md:text-2xl text-slate-600 font-medium">
                Software Tester
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                "Ensuring Quality. Delivering Reliability."
              </p>
              <p className="text-slate-700 leading-relaxed">
                Passionate software testing professional with expertise in manual testing, 
                automation, and quality assurance. I focus on delivering bug-free, 
                high-performing applications that exceed customer expectations.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-slate-600">
              <a href="mailto:Smaranikola7@gmail.com" className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
                <Mail size={18} />
                <span>Smaranikola7@gmail.com</span>
              </a>
              <a href="tel:+919912515652" className="flex items-center space-x-2 hover:text-blue-600 transition-colors">
                <Phone size={18} />
                <span>+91 9912515652</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/kola-smarani-897003382"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Smarani324/My-portfolio.git"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors"
              >
                <Github size={20} />
              </a>
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              <span>Get In Touch</span>
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-30 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-40"></div>
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="https://i.postimg.cc/SxdKj97v/IMG-20240920-WA0006-1.jpg"
                  alt="Kola Smarani"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border">
                <div className="text-2xl font-bold text-slate-800">1+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border">
                <div className="text-2xl font-bold text-blue-600">2</div>
                <div className="text-sm text-slate-600">Major Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;