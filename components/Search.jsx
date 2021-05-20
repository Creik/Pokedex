import React, { useContext } from 'react';
import MainContext from '../context/mainContext';
import styles from '../styles/Search.module.css';

const Search = () => {

  

  const mainContext = useContext(MainContext);

  const {handleChange, wordSearch, searchAvailable, location, handleSubmit} = mainContext;

  if(location.current=='details'){
    return null;
  }

  return (
    <form
      id={styles.form}
      onSubmit={handleSubmit}
    >
      <input disabled={searchAvailable} onChange={handleChange} id={styles.search} type="search" placeholder="Search..."/>
      <button disabled={searchAvailable} type="submit" id={styles.btnSubmit}>
        <img className={styles.btnIcon} src="/assets/icons/Search.svg"/>
      </button>
    </form>
  );
}
 
export default Search;