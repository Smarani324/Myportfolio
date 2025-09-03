import React from 'react';
import { ExternalLink, Code, TestTube, Shield } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Adactin Hotel Booking Testing",
      description: "Comprehensive testing of hotel booking functionalities with focus on user experience and system reliability.",
      icon: <TestTube className="text-blue-600" size={24} />,
      technologies: ["Manual Testing", "Functional Testing", "Regression Testing", "UI Testing"],
      keyContributions: [
        "Designed and executed test cases for booking workflows",
        "Validated UI elements and user interactions",
        "Performed comprehensive regression testing",
        "Identified and documented critical defects"
      ],
      category: "Web Application Testing"
    },
    {
      title: "MPIONLINE E-commerce Testing",
      description: "End-to-end testing of e-commerce platform including payment gateway integration and user experience optimization.",
      icon: <Shield className="text-purple-600" size={24} />,
      technologies: ["E-commerce Testing", "Payment Gateway Testing", "Security Testing", "User Experience Testing"],
      keyContributions: [
        "Tested e-commerce features and payment processing",
        "Validated payment gateway integration",
        "Ensured cross-platform compatibility",
        "Optimized user experience across devices"
      ],
      category: "E-commerce Platform"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Major testing projects showcasing my expertise in quality assurance and software testing
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Project Header */}
                <div className="p-6 border-b bg-gradient-to-r from-slate-50 to-blue-50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      {project.icon}
                    </div>
                    <span className="text-sm text-slate-600 bg-white px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{project.description}</p>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wide">
                      Technologies & Methods
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Contributions */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wide">
                      Key Contributions
                    </h4>
                    <ul className="space-y-2">
                      {project.keyContributions.map((contribution, contribIndex) => (
                        <li key={contribIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700 text-sm">{contribution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-900 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <Code size={16} />
                    <span>View Testing Details</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;