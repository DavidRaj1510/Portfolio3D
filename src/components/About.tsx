
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <h2 className="section-heading">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-theme-purple shadow-lg">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQFh1gT1hzR6_Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718251680994?e=2147483647&v=beta&t=Cf8KNt7r3_6Rq8udTH8qqwLqY9Ob0kuZY8OgHsh4jpo" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">
              I am <span className="text-theme-purple">Emme Emmanuel David Raj</span>
            </h3>
            
            <p className="text-gray-700 mb-6 text-lg">
              I am an enthusiastic learner with a passion for exploring new courses and technologies. By actively engaging in continuous learning, I aim to enhance my skills and stay updated with industry trends, which ultimately fuels my career growth and opens up new opportunities.
            </p>
            
            <p className="text-gray-700 mb-6 text-lg">
              With a background in Computer Science and Engineering, I'm particularly interested in data analysis, web development, and creating innovative solutions. I enjoy tackling complex problems and turning data into actionable insights.
            </p>
            
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 mt-6">
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">eedraj2003@gmail.com</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900">From</h4>
                <p className="text-gray-600">Andhra Pradesh, India</p>
              </div>
              
              <div>
                <a 
                  href="https://drive.google.com/file/d/115QqR0R5cukiF7qLz-_EJ9rZeP1fBDRe/view?usp=sharing" 
                  target="_blank"
                  rel="noreferrer" 
                  className="px-6 py-2 bg-theme-purple text-white rounded-lg hover:bg-theme-dark-purple transition-colors duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
