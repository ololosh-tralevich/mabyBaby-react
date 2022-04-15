import { useState } from 'react';

import TextField from '../../shared/components/TextField/TextField';
import Button from '../../shared/components/Button/Button';

import { initialState } from './initialState';

import styles from './authForm.module.scss';

const AuthForm = () => {
  const [form, setForm] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setForm({ ...initialState });
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p className={styles.text}>
          Login to our app using e-mail and password:
        </p>
        <TextField
          type={'email'}
          value={form.email}
          name={'email'}
          placeholder={'E-mail'}
          required={true}
          onType={handleChange}
          className={styles.TextField}
        />
        <TextField
          type={'password'}
          value={form.password}
          name={'password'}
          placeholder={'Password'}
          required={true}
          onType={handleChange}
          className={styles.TextField}
        />
        <div className={styles.form__buttons}>
          <Button
            btnText={'Sign In '}
            isActive={true}
            type={'submit'}
            className={styles.button}
          />
          <Button
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
