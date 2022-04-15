import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getTestType } from '../../redux/qaTests/qaTests-selectors';
import {setTestResults} from '../../redux/qaTests/qaTests-actions'

import Button from 'shared/components/Button';
import Question from './Question';

import qaApi from 'shared/api/qaApi/qaApi';

import styles from './test.module.scss';

const Test =  () => {
    const [answers, setAnswers] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const dispatch = useDispatch()
    const testType = useSelector(getTestType, shallowEqual);    
   
  if (testType !== 'theory' && testType !== 'tech') {
      console.log("navig")
    return <Navigate to="/" />;
  }
  const questions = dispatch => {
    dispatch(qaApi.getTest('tech'))
  }
 
   
    const onClickFinish = () => {
        if (questions.length === answers.length) {
          dispatch(setTestResults(answers));
          return <Navigate to="/results" />;
        }
        return <Navigate to="/" />;
    }
    
      if (!questions?.length) {
        return (
          <div>
            <div>
              <h2>{'[Testing ' + testType + ']'}</h2>
              <Button
                btnText="Finish Test"
                type="button"
                isActive={true}
                onClickBtn={onClickFinish}
                className={styles.btn}
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
          if (prevState < questions.length) {
            return prevState + 1;
          }
          return prevState;
        });
      };
    
      return (
        <div>
          <div>
            <h2>{'[Testing ' + testType + ']'}</h2>
            <Button
              btnText="Finish Test"
              type="button"
              isActive={true}
              onClickBtn={onClickFinish}
              className={styles.btn}
            />
          </div>
          <div className={styles.question}>
              <p className={styles.counterQuestions}>Question  <span>{currentQuestion}</span> / {questions.length} </p>
    
          <Question
            question={questions[currentQuestion]}
            onChange={onChangeAnswer}
          />
          </div>
          <div>
            <Button
              btnText="Previous question"
              type="button"
              isActive={true}
              onClickBtn={onClickPrevious}
              className={styles.btn}
            />
            <Button
              btnText="Next question"
              type="button"
              isActive={true}
              onClickBtn={onClickNext}
              className={styles.btn}
            />
          </div>
        </div>
      );

  
};

export default Test;
