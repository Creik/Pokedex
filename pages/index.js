import Head from 'next/head'
import Grid from '../components/Grid'
import Layout from '../components/Layout'
import Header from '../components/Layout/Header'
import Pagination from '../components/Pagination'
import styles from '../styles/Home.module.css'
import {RouterScroll} from '../helpers';

export const getServerSideProps = async ({query}) => {
  
  //paginacion
  const pag = query.pag != undefined? parseInt(query.pag[0]) : 0;
  console.log('Pagina actual: '+pag);
  
  //Fetch
  const limit = 15;
  const offset = limit*pag;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
  const data = await res.json();

  const requests = data.results.map(item => fetch(item.url));

  const responses = await Promise.all(requests);

  const results = await Promise.all(
    responses.map((response) => response.json())
  );

  //Format
  const pokemons = results.map(pokemon => {
    const data = {
      name: pokemon.name,
      id: pokemon.id,
      types: pokemon.types,
      sprites: {
        default: [pokemon.sprites.front_default, pokemon.sprites.back_default],
        shiny: [pokemon.sprites.front_shiny, pokemon.sprites.back_shiny],
        "official-artwork": pokemon.sprites.other["official-artwork"].front_default,
      },
    };
    return data;
  });

  return {
    props: {pokemons,pag},
  }
}


export default function Home({pokemons,pag}) {
  
  RouterScroll();

  return (
    <Layout pokemons={pokemons}>
      <Grid pokemons={pokemons}/>
      <Pagination pag={pag} max={898}/>
    </Layout>
  )
}
