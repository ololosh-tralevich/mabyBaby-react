import { Link } from 'react-router-dom';

// import { useSelector, shallowEqual } from 'react-redux';

// import { getGlobalStore } from '../../redux/userAccount/userAccount-selectors';

import ArrowRight from './ArrowRight';

import styles from './home.module.scss';

const Home = () => {
  // const globalStore = useSelector(getGlobalStore, shallowEqual);
  // console.log(globalStore);

  return (
    <section className="container">
      <div className={styles.mainBlock}>
        <h2 className={styles.firstTitle}>
          “Regression testing. What is it?
          <br /> If the system compiles, that's good, if it boots, that's
          great!”
        </h2>
        <div className={styles.horizontalLine}></div>
        <h3 className={styles.secondTitle}>Linus Torvalds</h3>
        <h4 className={styles.thirdTitle}>
          Linux kernel creator, hacker, 1969
        </h4>
        <div className={styles.linkBlock}>
          <Link className={styles.testLink} to="test">
            QA technical training
            <ArrowRight className={styles.arrowRight} color={'white'} />
          </Link>
          <Link className={styles.testLink} to="test">
            Testing theory
            <ArrowRight className={styles.arrowRight} color={'white'} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
