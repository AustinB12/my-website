import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='container footer-content'>
        <div className='footer-brand'>
          <a href='#' className='footer-logo'>
            AustinBaird<span>.software</span>
          </a>
          <p>Building great software, one line at a time.</p>
        </div>
        <div className='footer-links'>
          <div className='footer-section'>
            <h4>Navigation</h4>
            <div className='links-holder'>
              <ul>
                <li>
                  <a href='#about'>About</a>
                </li>
                <li>
                  <a href='#skills'>Skills</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href='#projects'>Projects</a>
                </li>
                <li>
                  <a href='#experience'>Experience</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='footer-section'>
            <h4>Connect</h4>
            <div className='links-holder'>
              <ul>
                <li>
                  <a href='#'>GitHub</a>
                </li>
                <li>
                  <a href='#'>LinkedIn</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href='#'>Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <p>© {currentYear} Austin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
