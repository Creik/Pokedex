import React, { useEffect } from 'react';
import styles from '../../styles/Main.module.css'
import BtnBack from '../BtnBack';
import Search from '../Search';


const Main = (props) => {
  
  useEffect(()=>{

  },[])

  return (
    <main id="main" className={styles.main}>
      <div className={styles.main_top}>
        
        <BtnBack/>
        <Search/>
        {/* 
          ButtonBack
          Search
        */}
      </div>
      <div className={styles.main_content}>
        {props.children}
        {/* 
          Grid
            Main
            Single
            Search
        */}
      </div>
    </main>
  );
}
 
export default Main;