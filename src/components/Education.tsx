import { School } from '@mui/icons-material';
import './Education.css';

const education = [
  {
    degree: "Master's Degree",
    major: 'Computer Science',
    school: 'UNC Wilmington',
    year: '2026 (Expected)',
    description:
      'Focused on software engineering, advanced algorithms, and managing information systems.',
  },
  {
    degree: "Bachelor's Degree in CS",
    major: 'Computer Science',
    school: 'UNC Wilmington',
    year: '2019',
    description:
      'Core curriculum in programming, data structures, and computer architecture. Graduated with honors.',
  },
];

function Education() {
  return (
    <section id='education' className='education'>
      <div className='container'>
        <h2 className='section-title'>
          Education <School color={'primary'} fontSize='large' />
        </h2>
        <div className='education-content'>
          <div className='education-timeline'>
            {education.map((item, index) => (
              <div key={index} className='education-item'>
                <div className='education-marker'>
                  <div className='education-dot' />
                  {index < education.length - 1 && (
                    <div className='education-line' />
                  )}
                </div>
                <div className='education-card'>
                  <span className='education-year'>{item.year}</span>
                  <h3 className='education-degree'>{item.degree}</h3>
                  <span className='education-major'>{item.major}</span>
                  <h4 className='education-school'>{item.school}</h4>
                  <p className='education-description'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
