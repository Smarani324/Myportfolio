import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Commerce (M.Com)",
      institution: "Dr.S.R.K.govt arts college",
      period: "2020-2021",
      percentage: "65%",
      level: "Post Graduation"
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      institution: "Dr.S.R.K.govt arts college",
      period: "2016-2019",
      percentage: "58%",
      level: "Graduation"
    },
    {
      degree: "Intermediate",
      institution: "Sri Sai junior college",
      period: "2014-2016",
      percentage: "64%",
      level: "Intermediate"
    },
    {
      degree: "High School",
      institution: "RGG Govt high School",
      period: "2014",
      percentage: "78%",
      level: "Schooling"
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            My academic journey that shaped my analytical thinking and problem-solving skills
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:ml-0' : 'md:ml-1/2'
                } ml-12`}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-8 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10">
                  <GraduationCap size={16} className="text-white" />
                </div>

                {/* Content Card */}
                <div className={`bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition-shadow duration-200 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item.level}
                    </div>
                    <div className="flex items-center text-slate-600">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{item.period}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {item.degree}
                  </h3>
                  
                  <p className="text-slate-600 mb-4">
                    {item.institution}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-green-600">
                      <Award size={16} className="mr-2" />
                      <span className="font-medium">{item.percentage}</span>
                    </div>
                    <div className="text-sm text-slate-500">
                      {item.level}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;