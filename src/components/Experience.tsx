
import React from 'react';
import { Calendar } from 'lucide-react';

const experiences = [
  {
    title: "Full Stack Web Intern",
    company: "GrrowUp",
    duration: "June 2024 - September 2024",
    description: "I completed my internship at Grrowup as a Full Stack Web Developer, where I gained hands-on experience in both frontend and backend development. During this time, I worked on various projects that enhanced my skills in technologies like HTML, CSS, JavaScript, React, and Node.js etc",
    skills: [
      "ReactJS",
      "NodeJs",
      "MongoDB",
      "HTML",
      "CSS",
      "JavaScript",
      
    ]
  },
  {
    title: "Data Science Intern",
    company: "Bharat Intern",
    duration: "July 2024 - Aug 2024",
    description: "•	Implemented data preprocessing, feature engineering, and model evaluation techniques using Python libraries like scikit-learn.",
    skills: [
      "Data Visualisation",
      "Data Mining",
      "Python",
      "Statistics",
      "Machine Learning"
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <h2 className="section-heading">Experience</h2>
        
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          I have hands-on experience in various roles, contributing to diverse projects that enhance my skills and expertise.
        </p>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <h4 className="text-theme-purple font-medium mb-3">{exp.company}</h4>
                    
                    <div className="flex items-center text-gray-500 mb-4">
                      <Calendar size={18} className="mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                    
                    <div className="mt-4">
                      <h5 className="text-sm font-semibold mb-2 text-gray-700">Skills</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span 
                            key={skill} 
                            className="text-xs py-1 px-3 bg-theme-purple/10 text-theme-dark-purple rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h4 className="text-lg font-semibold mb-4">Responsibilities & Achievements</h4>
                    <p className="text-gray-700 mb-6">
                      {exp.description}
                    </p>
                    
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <h5 className="text-sm font-semibold mb-3 text-gray-700">Key Takeaways</h5>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Gained practical experience in professional development environments</li>
                        <li>Improved collaboration skills by working in cross-functional teams</li>
                        <li>Developed problem-solving abilities through real-world challenges</li>
                        <li>Enhanced technical skills through hands-on project work</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
