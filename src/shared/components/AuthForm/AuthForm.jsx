import styles from './authForm.module.scss';

const AuthForm = () => {
  const onRegisterUser = () => {
    return;
  };

  const onLoginUser = () => {
    return;
  };

  return (
    <form className={styles.authForm}>
      <p className={styles.authFormText}>
        You can use your Google Account to authorize:
      </p>
      {/* Google авторизация ??? */}
      <p className={styles.authFormText}>
        Or login to our app using e-mail and password:
      </p>
      <input
        className={styles.authFormInput}
        type="email"
        placeholder="E-mail"
        required
      />
      <input
        className={styles.authFormInput}
        type="password"
        placeholder="Password"
        required
      />
      <div className={styles.authFormBtnBlock}>
        <button
          className={styles.authFormBtn}
          type="submit"
          onClick={onLoginUser}
        >
          Sign in
        </button>
        <button
          className={styles.authFormBtn}
          type="submit"
          onClick={onRegisterUser}
        >
          sign up
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
