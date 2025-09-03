import React from 'react';
import { Target, Award, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="text-blue-600" size={24} />,
      title: "Quality Focus",
      description: "Dedicated to ensuring top-notch quality in every application"
    },
    {
      icon: <Award className="text-green-600" size={24} />,
      title: "Reliability",
      description: "Committed to delivering reliable and bug-free software solutions"
    },
    {
      icon: <Users className="text-purple-600" size={24} />,
      title: "User Experience",
      description: "Passionate about improving user experiences through thorough testing"
    },
    {
      icon: <Lightbulb className="text-orange-600" size={24} />,
      title: "Innovation",
      description: "Implementing effective testing strategies and methodologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              I am a passionate software testing professional with a strong focus on ensuring quality 
              and reliability in applications. I enjoy identifying defects, improving user experiences, 
              and implementing effective testing strategies.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              My goal is to contribute to delivering high-performing, bug-free software solutions that 
              meet customer expectations. With experience in both manual and automation testing, I bring 
              a comprehensive approach to quality assurance.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">My Mission</h3>
              <p className="text-slate-700">
                To ensure every application I test meets the highest standards of quality, 
                functionality, and user satisfaction through meticulous testing processes and 
                continuous improvement.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border hover:shadow-lg transition-shadow duration-200"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;