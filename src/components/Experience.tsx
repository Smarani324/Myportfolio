import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const achievements = [
    "Designed and executed comprehensive test cases and scenarios",
    "Performed thorough manual testing to identify and log defects",
    "Worked with bug tracking tools and followed SDLC and STLC processes",
    "Validated UI elements and performed functional and regression testing",
    "Tested e-commerce features and payment gateway integration",
    "Ensured seamless user experience across multiple projects"
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Professional experience in software testing and quality assurance
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border p-8">
            {/* Company Header */}
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Briefcase className="text-blue-600" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">Software Test Engineer</h3>
                <p className="text-xl text-blue-600 font-medium">Attivo Tech Solutions</p>
              </div>
            </div>

            {/* Job Details */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center text-slate-600">
                <Calendar className="mr-3 text-blue-600" size={20} />
                <span>January 2025 – Present</span>
              </div>
              <div className="flex items-center text-slate-600">
                <MapPin className="mr-3 text-blue-600" size={20} />
                <span>Full-time Position</span>
              </div>
            </div>

            {/* Major Projects */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Major Projects</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border">
                  <h5 className="font-semibold text-slate-800 mb-2">Adactin Project</h5>
                  <p className="text-slate-600 text-sm">
                    Tested hotel booking functionalities, validated UI elements, and performed 
                    comprehensive functional and regression testing to ensure smooth user experience.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border">
                  <h5 className="font-semibold text-slate-800 mb-2">MPIONLINE Project</h5>
                  <p className="text-slate-600 text-sm">
                    Tested e-commerce features, payment gateway integration, and ensured seamless 
                    user experience across various platforms and devices.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Key Achievements</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={16} />
                    <span className="text-slate-700 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;