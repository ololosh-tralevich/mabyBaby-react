import { useEffect, useState } from 'react';

import { Navigate } from 'react-router-dom';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getTestType} from '../../redux/qaTests/qaTests-selectors';

import { qaOperations } from '../../redux/qaTests/qaTests-operations';

import Button from 'shared/components/Button';
import Question from './Question';
import styles from './test.module.scss';

const surveyTepes = ['tech', 'theory'];
const Test = () => {       
    const testType = useSelector(getTestType, shallowEqual);  
    const [questions,setQuestions] = useState([])
    const [answers, setAnswers] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);    
    const dispatch = useDispatch();

  
  useEffect(()=>dispatch(qaOperations.getTest(testType))
  .then(({payload}) => setQuestions(payload.data)),[dispatch,testType])

  if (!surveyTepes.includes(testType)) {
    return <Navigate to="/" />;
  }
  
    const onClickFinish = () => {
      
        if (questions?.length === answers?.length) {
          dispatch(qaOperations.getResults({answers, type:testType}))
          .then(result =>{return result})
          return <Navigate to="/results" />;
        }        
        return <Navigate to="/"/>;
    }
    
      if (!questions?.length) {
        return (
          <div className='{styles.test} container'>
            <div>
              <h2>{'[Testing ' + testType + ']'}</h2>
              <Button
                btnText="Finish Test"
                type="button"
                isActive={true}
                onClickBtn={onClickFinish}
                className='btn'
              />
            </div>
            <p className={styles.error}>Sorry, couldn't get questions.</p>
          </div>
        );
      }
      
    
      const onChangeAnswer = ({ questionId, answer }) => {
        const index = questions.findIndex(e => e.questionId === questionId);
    
        setAnswers(prevState => {
          if (index === -1) {
            return [...prevState, { questionId, answer }];
          }
          const copyState = [...prevState];
          copyState[index] = { questionId, answer };
          return copyState;
        });
      };
    
      
    
      const onClickPrevious = () => {
        setCurrentQuestion(prevState => {
          if (prevState > 0) {
            return prevState - 1;
          }         
          return prevState;
        });
      };
    
      const onClickNext = () => {        
        setCurrentQuestion(prevState => {
          if (prevState < questions.length-1) {
            return prevState + 1;
          }
          return prevState;
        });
      };
    
      return (
        <div className={styles.test}>
          <div className={styles.test_title}>
            <h2>{'[Testing ' + testType + ']'}</h2>
            <Button
              btnText="Finish Test"
              type="button"
              isActive={true}
              onClickBtn={onClickFinish}
              className={styles.test_title_btn}
            />
          </div>
          <div className={styles.test_question}>
              <p className={styles.test_question_title}>Question  <span className={styles.test_curent}>{currentQuestion+1}</span> / {questions.length} </p>
    
          <Question
            question={questions[currentQuestion]}
            onChange={onChangeAnswer}
            selectedAnswers ={answers}
          />
          </div>
          <div className={styles.test_navigate}>
            <Button
              btnText="Previous question"
              type="button"
              isActive={true}
              onClickBtn={onClickPrevious}
              className={styles.test_navigate_btn}
            />
            <Button
              btnText="Next question"
              type="button"
              isActive={true}
              onClickBtn={onClickNext}
              className={styles.test_navigate_btn}
            />
          </div>
        </div>
      );

  
};

export default Test;
