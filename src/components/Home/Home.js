import './home.scss';
import LogoTitle from '../../assets/images/LogoA.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const Home = () => {

  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray =
    ['n', 'a', 's', 't', 'a', 's', 'i', 'i', 'a', ','];
  const jobArray =
    ['a', ' ', 'F', 'u', 'l', 'l', ' ', 's', 't', 'a', 'c', 'k', ' ', 'w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 6000);
    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>

          <img src={LogoTitle} alt='developer' />
          <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            index={15} />
          <br />
          <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            index={22} />
        </h1>
        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  );
};

export default Home;