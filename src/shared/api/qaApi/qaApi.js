import axios from 'axios';

const getTest = async (type) => {
  const data = await axios.get('/qa-test/'+type);  
  return data;
};

const getResult = async ({answersObj, type}) => {
  const { data: result } = await axios.post('/qa-test/'+type+'-results', answersObj);  
  return result;
};

const qaApi = {
  getTest, 
  getResult,  
};

export default qaApi;
