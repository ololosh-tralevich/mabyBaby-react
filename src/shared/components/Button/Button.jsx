import styles from './orangeButton.module.scss';

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
