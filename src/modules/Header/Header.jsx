import { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

import { useSelector, shallowEqual } from 'react-redux';
import { getIsLogin } from '../../redux/userAccount/userAccount-selectors';
import { getUser } from '../../redux/userAccount/userAccount-selectors';

import Modal from './Modal';
import HeaderLogo from './svgComponents/HeaderLogo';
import SignOutLogo from './svgComponents/SignOutLogo';
import HeaderMenuLogo from './svgComponents/HeaderMenuLogo';

import styles from './header.module.scss';

const linkClassName = ({ isActive }) =>
// console.log(isActive)
  isActive ? styles.activeLink : styles.inActiveLink;

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const userState = useSelector(getUser, shallowEqual);
  // const isLogin = useSelector(getIsLogin, shallowEqual);
  // console.log(isLogin)
  const openClose = () => {
    setModalOpen(prevState => {
      return !prevState;
    });
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerBlock}>
          <Link className={styles.headerLogoLink} to="/">
            <HeaderLogo className={styles.headerLogo} color={'none'} />
          </Link>
          <NavLink className={linkClassName} to="/">
            Home
          </NavLink>
          <NavLink className={linkClassName} to="useful-info">
            Materials
          </NavLink>
          <NavLink className={linkClassName} to="contacts">
            Contacts
          </NavLink>
          {modalOpen || !Boolean(userState.email) || (
            <p className={styles.userProfileLogo}>
              {userState.email.slice(0, 1)}
            </p>
          )}
        </div>
        <button className={styles.openModalBtn} onClick={openClose}>
          <HeaderMenuLogo color="black" className={styles.openModalLogo} />
        </button>
      </header>
      {!modalOpen || <Modal openClose={openClose} />}
    </>
  );
};

export default Header;
