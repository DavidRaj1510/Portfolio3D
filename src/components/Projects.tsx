
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  codeUrl: string;
  liveUrl: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Media-Verse-Comic-Anime-Novel-Magazine-Cartoon",
    description: "A visually engaging content discovery platform for comics, anime, novels, magazines, and cartoons.",
    image: "https://media-hosting.imagekit.io/c962998ab3a448fb/Screenshot%20(392).png?Expires=1839251586&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jDRrsO63iztUh8CqdpHZ635Z3KK-ThvlyFu-1VraZZMH5g36j09Oq95aITymms~fhYHx9jwEUeQ9CRL6wM4mCyCr1dp52o1t3fa79CCZyOhP2mz~QznEZqVSYAtQjPvDd-4S0AwQYk8aHhYIeK-Ux2LLcSPq9GngU8PVWolhn6BngPWNOe2-aVApJMyMNUQdtHHQsg0xtu2Yj4rTCtB3-XUF7~4E3q8F3RSscMrxcaUqi-6f2qropDSLMMA4js8aZWLdhvOSkOOTHbfBwDowuN87s5pN6aEjnCdagCrVk~aw7jyRS4scTuMxXV7L4dhk6zV~26EXTzTGD~jm9Okzvw__",
    codeUrl: "https://github.com/DavidRaj1510/Media-Verse-Comic-Anime-Novel-Magazine-Cartoon",
    liveUrl: "https://davidraj1510.github.io/Media-Verse-Comic-Anime-Novel-Magazine-Cartoon/",
    tags: ["React", "Three.js", "Vite", "TypeScript"]
  },
  {
    id: 2,
    title: "TypeRush-3D",
    description: "A 3D typing game that combines fun gameplay with educational value for typing skills.",
    image: "https://zty.pe/media/ztype-card.png",
    codeUrl: "https://github.com/DavidRaj1510/TypeRush-3D",
    liveUrl: "https://davidraj1510.github.io/TypeRush-3D/",
    tags: ["React", "Three.js", "Vite", "Gaming"]
  },
  {
    id: 3,
    title: "Mini-ChatGPT",
    description: "A basic chatbot UI simulating interactions with ChatGPT. Clean, interactive, and responsive.",
    image: "https://wallpapers.com/images/hd/chatgpt-nhlim7qw8wnazbhy.jpg",
    codeUrl: "https://github.com/DavidRaj1510/Mini-ChatGPT",
    liveUrl: "https://davidraj1510.github.io/Mini-ChatGPT/",
    tags: ["React", "API Integration", "UI/UX", "Responsive Design"]
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description: "A fully interactive 3D developer portfolio showcasing skills and projects.",
    image: "https://miro.medium.com/v2/resize:fit:590/0*6GW0JRSClQd23ZqU.jpg",
    codeUrl: "https://github.com/DavidRaj1510/Portfolio-3D",
    liveUrl: "https://davidraj1510.github.io/Portfolio-3D/",
    tags: ["React", "Vite", "TypeScript", "Three.js", "Portfolio"]
  },
  {
    id: 5,
    title: "Doctor Appointment Booking",
    description: "A web app for scheduling doctor appointments using HTML, CSS, and JavaScript.",
    image: "https://images.tristatetechnology.com/blog-images/uploads/2023/07/cost-to-develop-doctor-appointments-booking-app.jpg",
    codeUrl: "https://github.com/DavidRaj1510/Doctor-Appointment-Booking",
    liveUrl: "https://davidraj1510.github.io/Doctor-Appointment-Booking/",
    tags: ["HTML", "JavaScript", "CSS", "Web App"]
  },
  {
    id: 6,
    title: "To-do-List",
    description: "A responsive task manager to help users stay productive.",
    image: "https://onplanners.com/sites/default/files/styles/template_fancy/public/template-images/printable-digital-do-list-template_2.png",
    codeUrl: "https://github.com/DavidRaj1510/TodoList",
    liveUrl: "https://davidraj1510.github.io/TodoList/",
    tags: ["HTML", "JavaScript", "CSS", "Web App"]
  },
  {
    id: 7,
    title: "Quiz App",
    description: "An interactive web-based quiz application for testing general knowledge.",
    image: "https://lh3.googleusercontent.com/proxy/TvmH8o-49b7TFsze3T1ZHG6bxoBl3fxDjp32CLspBPKFfNJaJaoQMNoQKPH4aTRxVi32J7UYuYq23W-HyU9s3StxODSXyrxpmg7K_1DZerswhZBtTT72MAWhUB1C3k4",
    codeUrl: "https://github.com/DavidRaj1510/QuizApp",
    liveUrl: "https://davidraj1510.github.io/QuizApp/",
    tags: ["HTML", "JavaScript", "CSS", "Web App"]
  },
  {
    id: 8,
    title: "Email Spam Detection",
    description: "A machine learning project to classify and detect spam emails using Python.",
    image: "https://thumbs.dreamstime.com/b/scam-alert-young-man-dark-background-130288360.jpg",
    codeUrl: "https://github.com/DavidRaj1510/Email-Spam-Detection",
    liveUrl: "https://github.com/DavidRaj1510/Email-Spam-Detection",
    tags: ["Python", "Machine Learning", "Data Science"]
  },
  {
    id: 9,
    title: "Titanic Survival Prediction",
    description: "A predictive model analyzing Titanic passenger data to estimate survival chances.",
    image: "https://t3.ftcdn.net/jpg/09/44/64/82/360_F_944648206_RzsobZqII7NUy8HeiP28s7GIE5H7xRDC.jpg",
    codeUrl: "https://github.com/DavidRaj1510/Titanic-Survival-Prediction",
    liveUrl: "https://github.com/DavidRaj1510/Titanic-Survival-Prediction",
    tags: ["Python", "Data Analysis", "Predictive Modeling"]
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  
  const categories = ['All', 'React', 'Three.js', 'JavaScript', 'Python', 'Data Science'];
  
  const filteredProjects = filter === 'All' 
    ? projects
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="section-heading">Projects</h2>
        
        <p className="text-lg text-gray-700 mb-8 max-w-3xl">
          I've tackled a diverse array of projects, spanning from website development to machine learning applications. Here are some highlights.
        </p>
        
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                filter === category 
                  ? 'bg-theme-purple text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card flex flex-col">
              <div className="overflow-hidden h-48 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-3 right-3 flex space-x-2">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-black/70 text-white text-xs py-1 px-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
                
                <div className="flex items-center justify-between mt-4">
                  <a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-1 text-gray-700 hover:text-theme-purple transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-theme-purple text-white rounded-lg hover:bg-theme-dark-purple transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/DavidRaj1510" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
