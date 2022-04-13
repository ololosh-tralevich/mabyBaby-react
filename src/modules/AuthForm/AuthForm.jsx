import TextField from '../../shared/components/TextField';

import styles from './authForm.module.scss';

const AuthForm = () => {
  const onType = ev => {
    console.log(ev.target.value);
  };

  return (
    <div>
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
    </div>
  );
};

export default AuthForm;
