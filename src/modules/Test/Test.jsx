
import { Navigate } from 'react-router-dom';

import { useSelector, shallowEqual } from 'react-redux';

import { getTestType } from '../../redux/qaTests/qaTests-selectors';

import styles from './test.module.scss';

const Test = () => {
    const testType = useSelector(getTestType, shallowEqual)
    // console.log(testType)

  if (testType !== 'theory' && testType !== 'tech') {
    return <Navigate to="/" />;
  }

  return (
    <div>
      {/* your code */}
      <p>test</p>
    </div>
  );
};

export default Test;

