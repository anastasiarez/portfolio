import './animatedLetters.scss';

const AnimatedLetters = ({ letterClass, strArray, index }) => {
  return (
    <span>
      {
        strArray.map((char, i) => (
          <span key={char + 1} className={`${letterClass} _${i + index}`} >
            {char}
          </span>
        ))
      }
    </span>
  );
};

export default AnimatedLetters;