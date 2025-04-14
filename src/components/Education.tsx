
import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    id: 1,
    institution: "G Pulla Reddy Engineering College",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
    duration: "Dec 2021 - June 2025",
    grade: "8.32 CGPA",
    description: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at G Pulla Reddy Engineering College, Andhra Pradesh. I have maintained a descent CGPA of 8.36 till now.",
    icon: "🎓"
  },
  {
    id: 2,
    institution: "Narayana Junior College",
    degree: "BIEAP- Board of Intermediate Education, Andhra Pradesh",
    duration: "Apr 2019 - Aug 2021",
    grade: "96.6%",
    description: "I completed my 12th grade at Narayana Junior College, achieving a CGPA of 96.6%.",
    icon: "📚"
  },
  {
    id: 3,
    institution: "Sister Stanislas English Medium School",
    degree: "CBSE-Central Board of Secondary Education",
    duration: "Apr 2009 - Apr 2019",
    grade: "87.8%",
    description: "I completed my schooling at Sister Stanislas English Medium School, where I achieved a percentage of 87.3% in the CBSE board.",
    icon: "🏫"
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <h2 className="section-heading">Education</h2>
        
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Education has been a transformative experience for me, guiding my personal development and self-awareness. Here are the key details of my academic history.
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute h-full w-0.5 bg-gray-200 left-0 md:left-1/2 transform md:-translate-x-1/2 top-0"></div>
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <div key={item.id} className="relative flex flex-col md:flex-row md:items-center">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-theme-purple text-white flex items-center justify-center">
                  <span className="text-lg">{item.icon}</span>
                </div>
                
                {/* Timeline content - alternating sides */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16 md:ml-auto'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex md:hidden items-center gap-3 mb-4">
                      <span className="w-8 h-8 flex items-center justify-center bg-theme-purple text-white text-lg rounded-full">
                        {item.icon}
                      </span>
                      <h3 className="text-xl font-semibold">{item.institution}</h3>
                    </div>
                    
                    <h3 className="hidden md:block text-xl font-semibold mb-2">{item.institution}</h3>
                    <h4 className="text-theme-purple font-medium mb-3">{item.degree}</h4>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{item.duration}</span>
                      </div>
                      
                      <div className="flex items-center text-gray-600">
                        <Award size={16} className="mr-2" />
                        <span className="text-sm">Grade: {item.grade}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700">{item.description}</p>
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
