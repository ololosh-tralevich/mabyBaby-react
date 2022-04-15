import { createPortal } from 'react-dom';

import { NavLink } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useSelector, shallowEqual } from 'react-redux';
import { userOperations } from '../../../redux/userAccount/userAccount-operations';
import { getIsLogin } from '../../../redux/userAccount/userAccount-selectors';

import SignOutLogo from '../svgComponents/SignOutLogo';

import PropTypes from 'prop-types';

import styles from './modal.module.scss';

const modalRoot = document.getElementById('modalRoot');

const linkClassName = ({ isActive }) =>
  isActive ? styles.activeLink : styles.inActiveLink;

const Modal = ({ openClose }) => {
  const isLogin = useSelector(getIsLogin, shallowEqual);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(userOperations.logoutUser());
    openClose();
  };
  return createPortal(
    <div className={styles.modalBlock}>
      {!isLogin || (
        <>
          <NavLink onClick={openClose} className={linkClassName} to="/">
            Home
          </NavLink>
          <NavLink
            onClick={openClose}
            className={linkClassName}
            to="useful-info"
          >
            Materials
          </NavLink>
        </>
      )}
      <NavLink onClick={openClose} className={linkClassName} to="contacts">
        Contacts
      </NavLink>
      {!isLogin || (
        <button onClick={signOut} className={styles.signOutLogo}>
          <SignOutLogo className={styles.signOutSvg} color={'black'} />
        </button>
      )}
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  openClose: PropTypes.func.isRequired,
};
