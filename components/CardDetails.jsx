import React from 'react';
import styles from '../styles/CardDetails.module.css';

const CardDetails = ({pokemon}) => {

  return (
    <div className={styles.details}>
      <ul>
        <li className={styles.name}><p>{pokemon.name}</p></li>
        <li>
          <ul className={styles.types}>
            {pokemon.types.map(type =>(
              <li key={type.type.name} className={`${styles.type} ${type.type.name}`}>{type.type.name}</li>
            ))}
          </ul>
        </li>
        <li className={styles.pokedex}>
          <p className={styles.label}>Pokedex Number</p>
          <span>{pokemon.id}</span>
          </li>
        <li className={styles.height}>
          <p className={styles.label}>Height</p>
          <span>{pokemon.height}</span>
          </li>
        <li className={styles.weight}>
          <p className={styles.label}>Weight</p>
          <span>{pokemon.weight}</span>
        </li>
        <p className={styles.label}>Shiny</p>
        <ul className={styles.sprites}>
          {pokemon.sprites.shiny.map((sprite) => (
            <li key={sprite} className={styles.sprite}>
              <img src={sprite} />
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}
 
export default CardDetails;