import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {setTestType} from '../../redux/qaTests/qaTests-actions'

import ArrowRight from './ArrowRight';

import styles from './home.module.scss';

const Home = () => {
  const dispatch = useDispatch()
  const setType = type => {
    dispatch(setTestType(type))
  };

  return (
    <section className="container">
      <div className={styles.mainBlock}>
        <h2 className={styles.firstTitle}>
          “Regression testing. What is it?
          <br /> If the system compiles, that's good, if it boots, that's<br/>
          great!”
        </h2>
        <h3 className={styles.secondTitle}>Linus Torvalds</h3>
        <h4 className={styles.thirdTitle}>
          Linux kernel creator, hacker, 1969
        </h4>
        <div className={styles.linkBlock}>
          <Link
            onClick={() => setType('tech')}
            className={styles.testLink}
            to="test"
          >
            QA technical training
            <ArrowRight className={styles.arrowRight} color={'white'} />
          </Link>
          <Link
            onClick={() => setTestType('theory')}
            className={styles.testLink}
            to="test"
          >
            Testing theory
            <ArrowRight className={styles.arrowRight} color={'white'} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
