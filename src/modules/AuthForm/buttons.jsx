import { memo } from "react"
import Button from "shared/components/Button"
import styles from './authForm.module.scss';

const Buttons = ({changeType}) => {
    console.log('render')
    return (
        <div className={styles.form__buttons}>
        <Button
          btnText={'Sign In '}
          isActive={true}
          type={'submit'}
          className={styles.button}
          onClickBtn={() => changeType('login')}
        />
        <Button
          btnText={'Sign Up'}
          isActive={false}
          type={'submit'}
          className={styles.button}
          onClickBtn={() => changeType('register')}
        />
      </div>  
    )
}

export default memo(Buttons);