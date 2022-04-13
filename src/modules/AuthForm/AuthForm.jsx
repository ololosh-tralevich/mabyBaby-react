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
    <div>
      <form>
        <TextField
          type={'email'}
          name={'email'}
          placeholder={'E-mail'}
          required={true}
          onType={onType}
        />
        <TextField
          type={'password'}
          name={'password'}
          placeholder={'Password'}
          required={true}
          onType={onType}
        />
        <Button
          onClickBtn={submitForm}
          btnText={'Sign in'}
          isActive={true}
          type={'submit'}
        />
        <Button
          onClickBtn={submitForm}
          btnText={'Sign up'}
          isActive={false}
          type={'submit'}
        />
      </form>
    </div>
  );
};

export default AuthForm;
