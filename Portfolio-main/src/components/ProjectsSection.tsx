import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Food Delivery App',
    category: 'UI/UX Design',
    description: 'Seamlessly designed with intuitive UI/UX for a smooth, effortless food ordering experience.',
    image: 'https://res.cloudinary.com/dllnqyjmn/image/upload/v1746418736/22654312_67Z_2112.w009.n001.83B.p14.83_eo9jhg.jpg',
    link: 'https://www.figma.com/proto/WSUxLNLoGijila6CCaAdeP/burger?node-id=212-29&t=qYCEcd3okehyOSUO-1'
  },
  {
    id: 2,
    title: 'Nike App UI Design',
    category: 'UI/UX Design',
    description: 'Bold and intuitive UI delivering a seamless Nike shopping experience.',
    image: 'https://res.cloudinary.com/dllnqyjmn/image/upload/v1746418732/online-shopping-concept_ta3vyv.jpg',
    link: 'https://dribbble.com/shots/25980913-NIKE-APP-UI-DESIGN?utm_source=Clipboard_Shot&utm_campaign=Haresh_L_S&utm_content=NIKE%20APP%20UI%20DESIGN&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Haresh_L_S&utm_content=NIKE%20APP%20UI%20DESIGN&utm_medium=Social_Share'
  },
  {
    id: 3,
    title: 'Air Max Headset',
    category: 'UI/UX Design',
    description: 'Clean and immersive UI design crafted for effortless control of the AIR MAX headset experience.',
    image: 'https://res.cloudinary.com/dllnqyjmn/image/upload/v1746418730/headphones-displayed-against-dark-background_1_z3xvrr.jpg',
    link: 'https://dribbble.com/shots/25980965-AIR-MAX-HEADSET-UI-UX-DESIGN?utm_source=Clipboard_Shot&utm_campaign=Haresh_L_S&utm_content=AIR%20MAX%20HEADSET%20UI%2FUX%20DESIGN&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Haresh_L_S&utm_content=AIR%20MAX%20HEADSET%20UI%2FUX%20DESIGN&utm_medium=Social_Share'
  },
  {
    id: 4,
    title: 'Auto Irrigator App UI Design',
    category: 'UI/UX Design',
    description: 'Smart and minimal UI crafted for seamless control of automated irrigation systems.',
    image: 'https://res.cloudinary.com/dllnqyjmn/image/upload/v1746418733/refreshment-from-as-sprinklers-arc-water-geometric-greenery-fields_gwdm20.jpg',
    link: 'https://dribbble.com/shots/25981011-AUTO-IRRIGATOR-APP-UI-DESIGN?utm_source=Clipboard_Shot&utm_campaign=Haresh_L_S&utm_content=AUTO%20IRRIGATOR%20APP%20UI%20DESIGN&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Haresh_L_S&utm_content=AUTO%20IRRIGATOR%20APP%20UI%20DESIGN&utm_medium=Social_Share'
  },

  {
    id: 5,
    title: 'Nike poster - LeBron Edition',
    category: 'Graphic Design',
    description: '',
    image: 'https://res.cloudinary.com/dllnqyjmn/image/upload/v1746419109/basketball-shoes-girl-min_zwv7t0.jpg',
    link: 'https://dribbble.com/shots/25913484-NIKE-LEBRON-NXXT-GENISUS-QS-EP?utm_source=Clipboard_Shot&utm_campaign=Haresh_L_S&utm_content=NIKE%20LEBRON%20NXXT%20GENISUS%20QS%20EP&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Haresh_L_S&utm_content=NIKE%20LEBRON%20NXXT%20GENISUS%20QS%20EP&utm_medium=Social_Share'
  },

  {
    id: 6,
    title: 'The Souled Store - Black Panter Edition',
    category: 'Graphic Design',
    description: '',
    image: 'https://res.cloudinary.com/dllnqyjmn/image/upload/v1746418727/1733821981_8530093_nzjtsd.jpg',
    link: 'https://dribbble.com/shots/25913495-THE-SOUL-STORE-Black-Panter-Edition?utm_source=Clipboard_Shot&utm_campaign=Haresh_L_S&utm_content=THE%20SOUL%20STORE%20%22Black%20Panter%20Edition%22&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Haresh_L_S&utm_content=THE%20SOUL%20STORE%20%22Black%20Panter%20Edition%22&utm_medium=Social_Share'
  },

  {
    id: 7,
    title: 'Starbucks',
    category: 'Graphic Design',
    description: '',
    image: 'https://res.cloudinary.com/dllnqyjmn/image/upload/v1746418726/100501_hjzoyi.webp',
    link: 'https://dribbble.com/shots/25913502-STARBUCKS-Frappuccino-Chilled-Coffee?utm_source=Clipboard_Shot&utm_campaign=Haresh_L_S&utm_content=STARBUCKS%20%22%20Frappuccino%20Chilled%20Coffee%22&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Haresh_L_S&utm_content=STARBUCKS%20%22%20Frappuccino%20Chilled%20Coffee%22&utm_medium=Social_Share'
  },

  {
    id: 8,
    title: 'Nike-Air Jordon',
    category: 'Graphic Design',
    description: '',
    image: 'https://res.cloudinary.com/dllnqyjmn/image/upload/v1746418726/nikes-senior-designer-explains-what-went-into-new-air-jordan-01_dpwfbv.webp',
    link: 'https://dribbble.com/shots/25913511-NIKE-Air-Jordon?utm_source=Clipboard_Shot&utm_campaign=Haresh_L_S&utm_content=NIKE%20%20%22%20Air%20Jordon%22&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Haresh_L_S&utm_content=NIKE%20%20%22%20Air%20Jordon%22&utm_medium=Social_Share'


  }
  
    
];

const categories = ['All', 'UI/UX Design', 'Graphic Design','Web Design'];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,229,255,0.3)] hover:-translate-y-2">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs px-3 py-1 rounded-full bg-accent-cyan/20 text-accent-cyan">
            {project.category}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-accent-cyan transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4">
          {project.description}
        </p>
        
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-accent-cyan hover:text-white transition-colors"
        >
          View Project 
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (headingRef.current) {
              headingRef.current.classList.add('reveal-active');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="projects" 
      className="section-padding bg-dark-card"
      ref={sectionRef}
    >
      <div className="container mx-auto">
        <h2 
          ref={headingRef}
          className="text-4xl font-bold mb-12 text-center reveal-on-scroll"
        >
          My <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-4 py-2 rounded-full transition-all',
                activeCategory === category 
                  ? 'bg-accent-cyan text-black font-medium' 
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700'
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="px-8 py-3 rounded-full border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-black transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
