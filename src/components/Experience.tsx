import { Work } from '@mui/icons-material';
import './Experience.css';

const experiences = [
  {
    id: 1,
    title: 'Full-Stack Software Engineer II',
    company: 'SolarWinds',
    period: '2022 - Present',
    description:
      'Designing, architecting, and developing a Database Observability application',
    achievements: [
      'UI Rewrite from React v16 to v19 with TypeScript integration',
      'Trained and mentored interns and junior developers',
      'Reduced build times by ~40%',
    ],
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'REMI Group',
    period: '2021 - 2022',
    description:
      'Full-Stack development in an Angular, Node.js, SQL Server tech stack coding feature and bug fixes',
    achievements: [
      'Managing DevOps in Azure and TeamCity',
      'Contributing to engineering documentation and best practices',
      'Onboarding new developers to the team',
    ],
  },
  {
    id: 3,
    title: 'Software Engineer',
    company: 'Ally Financial',
    period: '2020 - 2022',
    description:
      'Developed and maintained a large-scale .NET app for Ally call centers',
    achievements: ['Led the development of a MVP logging application in Go'],
  },
  {
    id: 4,
    title: 'Software Developer',
    company: 'EMS Linq',
    period: '2019 - 2020',
    description:
      'Full Stack development on an Agile team in a React / .NET / SQL Server tech stack',
    achievements: [
      'Completed numerous client-facing features successfully',
      'Learned agile methodologies and team collaboration',
    ],
  },
];

function Experience() {
  return (
    <section id='experience' className='experience'>
      <div className='container'>
        <h2 className='section-title'>
          Work Experience <Work color={'primary'} fontSize='large' />
        </h2>
        <div className='timeline'>
          {experiences.map((exp) => (
            <div key={exp.id} className='timeline-item'>
              <div className='timeline-marker' />
              <div className='timeline-content'>
                <div className='timeline-header'>
                  <div>
                    <h3 className='timeline-title'>{exp.title}</h3>
                    <p className='timeline-company'>{exp.company}</p>
                  </div>
                  <span className='timeline-period'>{exp.period}</span>
                </div>
                <p className='timeline-description'>{exp.description}</p>
                <ul className='timeline-achievements'>
                  {exp.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
