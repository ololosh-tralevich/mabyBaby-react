import PropTypes from 'prop-types';
import styles from './question.module.scss';

const Question = ({
  question: { question, answers, questionId },
  onChange,
  selectedAnswers,
}) => {
  const answersRadio = answers.map((answer, index) => {
    return (
      <label className={styles.answers_form_label} key={index}>
        <input
          className={styles.answers_form_radio}
          type="radio"
          name="answers"
          value={answer}
          required={false}          
          checked={selectedAnswers.find(e=>(e.answer === answer)&&(e.questionId === questionId))}
          onChange={() => onChange({ questionId, answer })}
        />{' '}
        {answer}
      </label>
    );
  });
  return (
    <div className={styles.answers}>
      <p className={styles.answers_title}>{question}</p>
      <form className={styles.answers_form} name="answer_form">
        {answersRadio}
      </form>
    </div>
  );
};

export default Question;

Question.defaultProps = {
  answers: [],
};

Question.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
