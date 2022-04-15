import { useState } from 'react';

import { Link, NavLink } from 'react-router-dom';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { userOperations } from '../../redux/userAccount/userAccount-operations';
import { getUser } from '../../redux/userAccount/userAccount-selectors';

import Modal from './Modal';
import HeaderLogo from './svgComponents/HeaderLogo';
import SignOutLogo from './svgComponents/SignOutLogo';
import HeaderMenuLogo from './svgComponents/HeaderMenuLogo';

import styles from './header.module.scss';

const linkClassName = ({ isActive }) =>
  isActive ? styles.activeLink : styles.inActiveLink;

const Header = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const userState = useSelector(getUser, shallowEqual);
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
          <ul className={styles.linksList}>
            <li className={styles.linksListItem}>
              <NavLink className={linkClassName} to="/">
                Home
              </NavLink>
            </li>
            <li className={styles.linksListItem}>
              <NavLink className={linkClassName} to="useful-info">
                Materials
              </NavLink>
            </li>
            <li className={styles.linksListItem}>
              <NavLink className={linkClassName} to="contacts">
                Contacts
              </NavLink>
            </li>
          </ul>
          {modalOpen || !Boolean(userState.email) || (
            <p className={styles.userProfileLogo}>
              {userState.email.slice(0, 1)}
            </p>
          )}
        </div>
        <button className={styles.openModalBtn} onClick={openClose}>
          <HeaderMenuLogo color="black" className={styles.openModalLogo} />
        </button>
        <button
          className={styles.logoutBtn}
          onClick={() => dispatch(userOperations.logoutUser())}
        >
          <SignOutLogo color="black" className={styles.openModalLogo} />
        </button>
      </header>
      {!modalOpen || <Modal openClose={openClose} />}
    </>
  );
};

export default Header;
