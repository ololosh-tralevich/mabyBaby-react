import axios from 'axios';

const getTechTest = () => {
  const data = axios.get('/qa-test/tech');
  //   console.log('Tech Test: ', data);
  return data;
};

const getTheoryTest = () => {
  const data = axios.get('/qa-test');
  // console.log('Theory test: ', data)
  return data;
};

const getTechResult = answersObj => {
  const { data: result } = axios.post('/qa-test/tech-results', answersObj);
  // console.log('Tech results: ', result)
  return result;
};

const getTheoryResult = answersObj => {
  const { data: result } = axios.post('/qa-test/theory-results', answersObj);
  // console.log('Theory results: ', result)
  return result;
};

const qaApi = {
  getTechTest,
  getTheoryTest,
  getTechResult,
  getTheoryResult,
};

export default qaApi;
