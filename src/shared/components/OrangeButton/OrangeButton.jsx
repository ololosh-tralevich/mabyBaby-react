import styles from './orangeButton.module.scss';

const OrangeButton = ({onClickBtn, btnText}) => {
  return (
    <button className={styles.button} type="button" onClick={onClickBtn}>
      {btnText}
    </button>
  );
};

export default OrangeButton;
