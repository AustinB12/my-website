import './Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='container header-content'>
        <a href='#' className='logo'>
          AustinBaird<span>.software</span>
        </a>
        <nav className='nav'>
          <ul className='nav-list'>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#experience'>Experience</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
