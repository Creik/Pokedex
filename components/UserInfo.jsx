import React from 'react';
import styles from '../styles/UserInfo.module.css';
const UserInfo = () => {
  return (
    <div className={styles.userInfo}>
      <img className={styles.avatar} src="/assets/avatar.png"/>
      <p className={styles.userName}>Creik</p>
      <p className={styles.userLevel}>Level 69</p>
      <p className={styles.userMessage}>Work hard on your test</p>
    </div>
  );
}
 
export default UserInfo;