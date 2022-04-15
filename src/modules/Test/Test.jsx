import { useState } from 'react';
import Button from '../../shared/components/Button';
import Loader from '../../shared/components/Loader';
import Question from './Question';
import qaAPI from '../../shared/api/qaApi/qaApi';

import styles from './test.module.scss';
import { Link } from 'react-router-dom';

const Test = () => {
    const [questions, setQuestions] = useState([])
    
    const onClickFinish = () => {}

    const onAnswerSelect =() => {}

    const answers = [];

    return (
        <div>           
            <div>
            <h2>Test Title</h2>
            <Button onClickBtn={onClickFinish} btnText='Finish test' isActive={true} type='button' className='ButtonFinish' />            
            <div>
                <p><span></span></p>
                <p></p>                
                <Question answers ={answers} onChange={onAnswerSelect}/>                   
            </div>
            </div>
        </div>
    )
}

export default Test;