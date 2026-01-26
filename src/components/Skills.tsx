import { Handyman } from '@mui/icons-material';
import './Skills.css';

const skills = [
  { name: 'JavaScript', level: 100 },
  { name: 'TypeScript', level: 100 },
  { name: 'React', level: 100 },
  { name: 'SQL', level: 95 },
  { name: 'Node.js', level: 90 },
  { name: 'C#', level: 90 },
  { name: '.NET', level: 90 },
  { name: 'Git', level: 90 },
  { name: 'Azure', level: 70 },
];

const technologies = [
  'React',
  'Next.js',
  'Node.js',
  'Express',
  'SQL Server',
  'PostgreSQL',
  'MongoDB',
  'Docker',
  'Azure',
  'GraphQL',
  'REST APIs',
  'CI/CD',
  'Agile',
];

function Skills() {
  return (
    <section id='skills' className='skills'>
      <div className='container'>
        <h2 className='section-title'>
          Skills & Technologies
          <Handyman color={'primary'} fontSize='large' />
        </h2>

        <div className='skills-content'>
          <div className='skills-bars'>
            <h3>Core Skills</h3>
            {skills.map((skill) => (
              <div key={skill.name} className='skill-item'>
                <div className='skill-header'>
                  <span className='skill-name'>{skill.name}</span>
                  <span className='skill-percentage'>{skill.level}%</span>
                </div>
                <div className='skill-bar'>
                  <div
                    className='skill-progress'
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className='technologies'>
            <h3>Technologies I Work With</h3>
            <div className='tech-grid'>
              {technologies.map((tech) => (
                <span key={tech} className='tech-tag'>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
