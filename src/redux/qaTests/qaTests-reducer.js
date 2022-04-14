import { createReducer, combineReducers } from '@reduxjs/toolkit';

import testTypeAction from './qaTests-actions';

const testType = createReducer('', {
  [testTypeAction]: (state, { payload }) => {
    //   console.log(payload)
    return (state = payload);
  },
});

export default testType