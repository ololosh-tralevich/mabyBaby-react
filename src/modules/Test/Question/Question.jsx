import RadioInput from '../../../shared/components/RadioInput';
import PropTypes from "prop-types";
import styles from './question.module.scss';

const Question = ({ question:{question,answers, questionId}, onChange }) => {  
  const answersRadio =  answers.map((answer,index)=>{return (<RadioInput type='radio' name='answers' value={answer} required='false' onChange={()=>onChange({questionId,answer})} />)
  
})
  return ( 
      <div className={styles.formBox}>
          <p className={styles.questionTitle}>{question}</p>
          <form className={styles.form} name="answer_form">{answersRadio}</form>    
      </div>       
  );
};

export default Question;

Question.defaultProps = {
    answers: []
}

Question.propTypes = {
    answers: PropTypes.arrayOf(PropTypes.string ).isRequired,
    onChange: PropTypes.func.isRequired
}


