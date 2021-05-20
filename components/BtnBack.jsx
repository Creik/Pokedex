import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/BtnBack.module.css';
import MainContext from '../context/mainContext';

const BtnBack = () => {
  const router = useRouter(); 

  const mainContext = useContext(MainContext);

  const {location,setSearchResults} = mainContext;

  if(location.current!="details"){
    return null;
  }
  console.log(location);

  const handleClick = () => {
    setSearchResults([]);
    router.back();
  };

  return (
    <button className={styles.btn} onClick={() => handleClick()}>
      <img className={styles.btnIcon} src="/assets/icons/Back.svg"/>
    </button>
  );
}
 
export default BtnBack;