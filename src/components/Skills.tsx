
import React from 'react';

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React Js", "TypeScript", "HTML", "CSS", "JavaScript", "Bootstrap"]
  },
  {
    name: "Backend",
    skills: ["Node Js", "MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    name: "Data Science",
    skills: ["Python", "Jupyter", "Google Colab", "Sk Learn Kit", "Power BI"]
  },
  {
    name: "Tools",
    skills: ["GitHub", "VS Code", "Eclipse"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="section-heading">Skills</h2>
        
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Here are some skills I've been actively developing to enhance my career.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category) => (
            <div key={category.name} className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-theme-dark-purple">{category.name}</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="skill-box">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-theme-purple/5 rounded-2xl p-8">
          <h3 className="text-xl font-semibold mb-6 text-theme-dark-purple text-center">My Learning Approach</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-14 h-14 bg-theme-purple/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Research & Explore</h4>
              <p className="text-gray-600">I constantly research new technologies and methodologies to expand my knowledge base.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-14 h-14 bg-theme-purple/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Apply & Practice</h4>
              <p className="text-gray-600">I believe in learning by doing, applying new skills through projects and practical exercises.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="w-14 h-14 bg-theme-purple/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Iterate & Improve</h4>
              <p className="text-gray-600">I continuously refine my skills based on feedback and evolving industry standards.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
