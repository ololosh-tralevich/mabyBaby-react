import PropTypes from 'prop-types';

import styles from './textField.module.scss';

const TextField = ({ type, name, value, placeholder, required, onType, className }) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
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
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onType: PropTypes.func.isRequired,
};
