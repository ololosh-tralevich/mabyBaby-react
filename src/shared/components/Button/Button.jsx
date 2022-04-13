import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = ({ onClickBtn, btnText, isActive, type }) => {
  const isActiveBtn = () => {
    return isActive ? styles.activeBtn : styles.inActiveBtn;
  };

  return (
    <button className={isActiveBtn()} type={type} onClick={onClickBtn}>
      {btnText}
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClickBtn: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};
