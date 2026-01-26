import imgOne from '../assets/about-1.png?url';
import imgTwo from '../assets/about-2.png?url';
import imgThree from '../assets/about-3.png?url';
import { Mood } from '@mui/icons-material';
import './About.css';

function About() {
  return (
    <section id='about' className='about'>
      <div className='container'>
        <h2 className='section-title'>
          About Me <Mood color={'primary'} fontSize='large' />{' '}
        </h2>
        <div className='about-content'>
          <div className='about-image'>
            <div className='about-image-placeholder'>
              <img
                className='about-img'
                src={imgOne}
                alt='Austin Baird'
              />
              <img
                className='about-img'
                src={imgTwo}
                alt='Austin Baird'
              />
              <img
                className='about-img'
                src={imgThree}
                alt='Austin Baird'
              />
            </div>
          </div>
          <div className='about-text'>
            <p style={{ textIndent: '2em' }}>
              I'm a software engineer with a passion for designing UIs, building
              software, and solving complex problems. With experience in
              full-stack development, I enjoy working on projects that challenge
              me and allow me to grow.
            </p>
            <p style={{ textIndent: '2em' }}>
              When I'm not coding, you can find me hanging out with my new
              daughter, walking my dogs, in my garden, or working out.
            </p>
            <div className='about-stats'>
              <div className='stat'>
                <span className='stat-number'>7+</span>
                <span className='stat-label'>Years Experience</span>
              </div>
              <div className='stat'>
                <span className='stat-number'>2</span>
                <span className='stat-label'>Computer Science Degrees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
