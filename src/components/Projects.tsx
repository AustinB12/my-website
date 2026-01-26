import { LaptopWindows } from '@mui/icons-material';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Wayback Public Library',
    description:
      'A full-stack library management system with patron management, book inventory, reservation, and borrowing features.',
    image: '📚',
    technologies: ['React', 'Node.js', 'TypeScript', 'Sqlite', 'Express'],
    github: 'https://github.com/AustinB12/WPL-app',
    demo: 'https://wpl-app.onrender.com/',
  },
  // {
  //   id: 2,
  //   title: 'Task Management App',
  //   description:
  //     'A collaborative project management tool with real-time updates, team workspaces, and analytics dashboard.',
  //   image: '📋',
  //   technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
  //   github: '#',
  //   demo: '#',
  // },
];

function Projects() {
  return (
    <section id='projects' className='projects'>
      <div className='container'>
        <h2 className='section-title'>
          Featured Projects <LaptopWindows color={'primary'} fontSize='large' />
        </h2>
        <div className='projects-grid'>
          {projects.map((project) => (
            <div key={project.id} className='project-card'>
              <div className='project-image'>
                <span>{project.image}</span>
              </div>
              <div className='project-content'>
                <h3 className='project-title'>{project.title}</h3>
                <p className='project-description'>{project.description}</p>
                <div className='project-tech'>
                  {project.technologies.map((tech) => (
                    <span key={tech} className='project-tech-tag'>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='project-links'>
                  <a href={project.github} className='project-link'>
                    GitHub →
                  </a>
                  <a href={project.demo} className='project-link'>
                    Live Demo →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
