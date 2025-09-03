import React from 'react';
import { Code, Settings, TestTube, Wrench, Users, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Testing Methodologies",
      icon: <TestTube className="text-blue-600" size={24} />,
      skills: [
        { name: "Manual Testing", level: 90 },
        { name: "Functional Testing", level: 85 },
        { name: "Regression Testing", level: 80 },
        { name: "UI Testing", level: 85 },
      ],
      color: "blue"
    },
    {
      title: "Automation & Tools",
      icon: <Settings className="text-green-600" size={24} />,
      skills: [
        { name: "Basic Automation Testing", level: 70 },
        { name: "Bug Tracking Tools", level: 85 },
        { name: "Test Case Design", level: 90 },
        { name: "Test Documentation", level: 85 },
      ],
      color: "green"
    },
    {
      title: "Domain Knowledge",
      icon: <Code className="text-purple-600" size={24} />,
      skills: [
        { name: "E-commerce Testing", level: 85 },
        { name: "Payment Gateway Testing", level: 80 },
        { name: "Web Application Testing", level: 90 },
        { name: "Cross-platform Testing", level: 75 },
      ],
      color: "purple"
    },
    {
      title: "Process & Methodology",
      icon: <Wrench className="text-orange-600" size={24} />,
      skills: [
        { name: "SDLC Processes", level: 85 },
        { name: "STLC Processes", level: 85 },
        { name: "Defect Management", level: 80 },
        { name: "Quality Assurance", level: 90 },
      ],
      color: "orange"
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Attention to Detail",
    "Analytical Thinking",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
    "Critical Thinking"
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Comprehensive skill set in software testing, quality assurance, and modern testing methodologies
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border hover:shadow-xl transition-shadow duration-300 p-6"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-slate-50 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-slate-700">{skill.name}</span>
                        <span className="text-sm text-slate-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(category.color)} transition-all duration-500`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Soft Skills</h3>
              <p className="text-slate-600">Essential skills that complement my technical expertise</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <span className="text-slate-700 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning & Certifications */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <BookOpen className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Continuous Learning</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Committed to staying updated with the latest testing methodologies, tools, and industry best practices. 
              Currently expanding knowledge in automation testing frameworks and advanced quality assurance techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;