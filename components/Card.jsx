import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "../styles/Card.module.css";
const Card = ({ pokemon, location }) => {

  return (
    <Link href={`/Pokemon/${pokemon.id}`}>

      <div className={styles.card}>
        {location == 'details' ?
          (
            <>
              <img className={styles.img} src={pokemon.sprites["official-artwork"]} />
              <ul className={styles.sprites}>
                {pokemon.sprites.default.map((sprite) => (
                  <li key={sprite} className={styles.sprite}>
                    <img src={sprite} />
                  </li>
                ))}
              </ul>
            </>
          )
          :
          (
            <>
              <p className={styles.title}>{pokemon.name}</p>
              <p className={styles.id}>{pokemon.id.toString().padStart(3, "0")}</p>
                <Image
                  src={pokemon.sprites["official-artwork"]}
                  layout="intrinsic"
                  priority='true'
                  width={160}
                  height={160}
                />
              {/* <img className={styles.img} src={pokemon.sprites["official-artwork"]} /> */}
              <ul className={styles.types}>
                {pokemon.types.map((type) => (
                  <li key={type.type.name} className={styles.type}>
                    {type.type.name}
                  </li>
                ))}
              </ul>
            </>
          )
        }


      </div>
    </Link>
  );
}

export default Card;