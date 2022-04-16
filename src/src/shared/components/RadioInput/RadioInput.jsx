import PropTypes from 'prop-types'

import styles from './radioInput.module.scss';

const RadioInput = ({type, name, value, required, onChange}) => {
  return (
    <input
      className={styles.textField}
      type={type}
      name={name}
      value={value}
      required={required}
      onChange={onChange}
    />
  );
};

{/* 

Пример: <RadioInput type={'radio'} name={'answer'} value={'answer 1'} required={false} onChange={yourFunc}/> 

*/}

export default RadioInput;

RadioInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  