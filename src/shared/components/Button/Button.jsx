import { memo } from 'react';

import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = ({ onClickBtn, btnText, isActive, type, className }) => {  
  const isActiveBtn = () => {
    return isActive ? styles.activeBtn : styles.inActiveBtn;   // удалить, если не используем
  };

  console.log(btnText)
  return (
    <button className={className} type={type} onClick={onClickBtn}>
      {btnText}
    </button>
  );
};

export default memo(Button);

Button.propTypes = {
  className:PropTypes.string.isRequired,
  onClickBtn: PropTypes.func,
  btnText: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
};