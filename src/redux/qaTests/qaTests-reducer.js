import { createReducer, combineReducers } from '@reduxjs/toolkit';

import {setTestResults, setTestType} from './qaTests-actions';

const typeReducer = createReducer('', {
  [setTestType]: (state, { payload }) => {   
    return (state = payload);
  },
});

const resultsReducer = createReducer('', {
    [setTestResults]: (state, { payload }) => {   
      return (state = payload);
    },
  });

const test = combineReducers({type:typeReducer, result:resultsReducer})

export default test;