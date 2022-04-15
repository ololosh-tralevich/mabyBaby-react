import axios from 'axios';

const getTechTest = () => {
  const data = axios.get('/qa-test/tech');
  return data;
};

const getTheoryTest = () => {
  const data = axios.get('/qa-test/theory');
  return data;
};

const getTechResult = answersObj => {
  const data = axios.post('/qa-test/tech-results', answersObj);
  return data;
};

const getTheoryResult = answersObj => {
  const data = axios.post('/qa-test/theory-results', answersObj);
  return data;
};

const qaApi = {
  getTechTest,
  getTheoryTest,
  getTechResult,
  getTheoryResult,
};

export default qaApi;
