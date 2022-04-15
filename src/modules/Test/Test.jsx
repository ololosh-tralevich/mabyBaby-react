import { useEffect } from 'react';

import { Navigate } from 'react-router-dom';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getTestType } from '../../redux/qaTests/qaTests-selectors';

import { qaOperations } from '../../redux/qaTests/qaTests-operations';

import styles from './test.module.scss';

const Test = () => {
  const testType = useSelector(getTestType, shallowEqual);
  console.log(testType);

  const dispatch = useDispatch();
  const getTechTest = () => qaOperations.getTechTest();

  // const getTest = () => {
  //   dispatch(getTechTest())
  // }

  useEffect(() => {
    dispatch(getTechTest());
  });

  // if (testType !== 'theory' && testType !== 'tech') {
  //   return <Navigate to="/" />;
  // }

  return (
    <div>
      {/* your code */}
      <p>test</p>
    </div>
  );
};

export default Test;
