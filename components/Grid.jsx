import React, { useContext, useEffect, useState } from 'react';
import Card from './Card';
import styles from '../styles/Grid.module.css';
import MainContext from '../context/mainContext';

const Grid = ({pokemons}) => {

  const [data,setData] = useState(pokemons);

  const mainContext = useContext(MainContext);

  const {setLocation, location, searchResults, notFound} = mainContext;


  useEffect(()=>{
    if(location.current=='main'){
      setData(pokemons)
    }
    if(location.current=='details'){
      setLocation({prev:location.current,current:'main'});
    }
    if(searchResults.length>0){
      setData(searchResults); 
    }
  },[location,searchResults,pokemons])

  if(notFound){
    return <h1>No hay resultados....</h1>
  }

  return (
    <div className={styles.grid+' '+styles.main}>
      {data.map(pokemon =>(
        <Card key={pokemon.id} pokemon={pokemon}/>
      ))}
    </div>
  );
}
 
export default Grid;