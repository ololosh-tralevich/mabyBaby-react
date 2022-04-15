import RadioInput from '../../../shared/components/RadioInput';
import PropTypes from "prop-types";
import styles from './question.module.scss';

const Question = ({ answers, onChange }) => {  
  const answersRadio =  answers.map((answer,index)=>{return (<RadioInput type='radio' name='answers' value={answer} required='false' onChange={onChange} />)
  
})
  return (        
      <form className={styles.form}>{answersRadio}</form>    
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


