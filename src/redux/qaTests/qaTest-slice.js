import { createSlice } from '@reduxjs/toolkit';

import {getTest, getResult} from './qaTest-operations';

const initialState = {
    type: "",
    result: '',    
    loading: false,
    error: null,
  };