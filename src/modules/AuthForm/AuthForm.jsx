import TextField from '../../shared/components/TextField';
import Button from '../../shared/components/Button';

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
      <div className={styles.wrapper}>
          <form className={styles.form}>
            <p className={styles.text}>
            Login to our app using e-mail and password:
            </p>
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
                btnText={'Sign In '}
                isActive={true}
                type={'submit'}
                className={styles.button}
              />
              <Button
                onClickBtn={submitForm}
                btnText={'Sign Up'}
                isActive={false}
                type={'submit'}
                className={styles.button}
              />
            </div>
          </form>
        </div>
  );
};

export default AuthForm;
