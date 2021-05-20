import React from 'react';
import Layout from '../../components/Layout';
import Single from '../../components/Single';

export const getServerSideProps = async ({query}) => {

  const id =  query.id;
  
  //Fetch
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if(res.ok) {
    const data = await  res.json();
    //Format
    const pokemon = {
      name: data.name,
      id: data.id,
      types: data.types,
      weight: data.weight,
      height: data.height,
      sprites: {
        default: [data.sprites.front_default, data.sprites.back_default],
        shiny: [data.sprites.front_shiny, data.sprites.back_shiny],
        "official-artwork": data.sprites.other["official-artwork"].front_default,
      }
    }

    return {
      props: {pokemon},
    }
  }else{
    return {
      notFound: true,
    }
  }
}

const Pokemon = ({pokemon}) => {
  console.log(pokemon)
  return (
    <Layout>
      <Single pokemon={pokemon}/>
    </Layout>
  );
}
 
export default Pokemon;