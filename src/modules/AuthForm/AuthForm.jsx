import TextField from '../../shared/components/TextField';
import Button from '../../shared/components/Button/Button';

import styles from './authForm.module.scss';

const AuthForm = () => {
  const onType = ev => {
    console.log(ev.target.value);
  };

  const submitForm = ev => {
    ev.preventDefault();
    console.log('click');
  };

  return (
    <div className="container">
      <div className={styles.wrapper}>
      <div className={styles.login__info}>
        <h1>
        Pro Test
        </h1>
        <p>
        [ Мы поможем найти слабые места 
в знаниях, чтобы вы смогли их усилить. Покажем что актуально знать для QA Engineer и постараемся сделать процесс познания более разнообразным_ ]
        </p>
      </div>
      <div className={styles.form__wrapper}>
      <form className={styles.form}>
        <p className={styles.text}>войдите в приложение используя e-mail и пароль:</p>
        <TextField
          type={'email'}
          name={'email'}
          placeholder={'E-mail'}
          required={true}
          onType={onType}
          className={styles.TextField}
        />
        <TextField
          type={'password'}
          name={'password'}
          placeholder={'Password'}
          required={true}
          onType={onType}
          className={styles.TextField}
        />
        <div className={styles.form__buttons}>
        <Button
          onClickBtn={submitForm}
          btnText={'Войти '}
          isActive={true}
          type={'submit'}
          className={styles.Button}
        />
        <Button
          onClickBtn={submitForm}
          btnText={'Регистрация'}
          isActive={false}
          type={'submit'}
          className={styles.Button1}
        />
        </div>
      </form>
      </div>
      </div>
    </div>
  );
};

export default AuthForm;
