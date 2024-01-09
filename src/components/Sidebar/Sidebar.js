import './sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoAb from '../../assets/images/LogoAb.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (

    <div className="sidebar">
      <Link className='logo' to='/' ></Link >
      <img src={LogoAb} />

      <nav>
        <NavLink exact='true' activeclassname='active' to='/'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        </NavLink>
      </nav>

      <nav>
        <NavLink exact='true' activeclassname='active' className="about-link" to='/about'>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
        </NavLink>
      </nav>

      <nav>
        <NavLink exact='true' activeclassname='active' className="contact-link" to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://www.linkedin.com/in/anastasia-reznichenko/'>
            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href='https://github.com/anastasiarez?tab=repositories'>
            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;