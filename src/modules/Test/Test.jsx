import { useEffect } from 'react';

import { Navigate } from 'react-router-dom';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getTestType, getGlobalState, getTestsArr } from '../../redux/qaTests/qaTests-selectors';

import { qaOperations } from '../../redux/qaTests/qaTests-operations';

import styles from './test.module.scss';

// import answers from './answers'

const Test = () => {
  const globalState = useSelector(getGlobalState, shallowEqual)
  console.log(globalState.qaTests)

  const testType = useSelector(getTestType, shallowEqual);
  const testArr = useSelector(getTestsArr, shallowEqual)
  
  const dispatch = useDispatch();
  useEffect(() => {
    testType === 'tech' && dispatch(qaOperations.getTechTest());
    testType === 'theory' && dispatch(qaOperations.getTheoryTest());
  }, []);

  if (testType !== 'tech' && testType !== 'theory') {
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
