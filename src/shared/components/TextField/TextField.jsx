import PropTypes from 'prop-types';

import styles from './textField.module.scss';

const TextField = ({ type, name, placeholder, required, onType }) => {
  return (
    <input
      className={styles.textField}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={onType}
    />
  );
};

export default TextField;

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onType: PropTypes.func.isRequired,
};
