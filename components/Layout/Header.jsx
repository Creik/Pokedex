import React, { useRef } from 'react';
import styles from '../../styles/Header.module.css';
import UserInfo from '../UserInfo';
const Header = () => {
  return (
    <header id={styles.header}>
      <div id={styles.header_top}>
        <img className={styles.btnMenu} src="/assets/icons/Menu.svg" alt="" />
        <img id={styles.logo} src="/assets/logo.png" alt="" />
      </div>
      <div id={styles.header_content}>
        <UserInfo/>
        <button className={styles.btnLogout}>
          <img className={styles.btnIcon} src="/assets/icons/Logout.svg"/>
          <span className={styles.btnText}>LOG OUT</span>
        </button>
      </div>
    </header>
  );
}
 
export default Header;