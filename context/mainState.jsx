import { useEffect, useState } from "react";
import MainContext from "./mainContext";
import {useRouter} from 'next/router';

const MainState = props => {
  const router = useRouter();
  const [allPokemons, setAllPokemons] = useState([]);

  const [location, setLocation] = useState({prev:'',current:'main'});

  const [wordSearch, setWordSearch] = useState('');

  const [searchResults,setSearchResults] = useState([]);

  const [searchAvailable, setSearchAvailable] = useState();
  
  const [notFound, setNotFound] = useState(false);

  const FetchPokemons = async() =>{
    setSearchAvailable(true);
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=898');
    const data = await res.json();
    
    const requests = data.results.map(item => fetch(item.url));
    
    const responses = await Promise.all(requests);
    
    const results = await Promise.all(
      responses.map((response) => response.json())
      );
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
      setAllPokemons(pokemons);
      setSearchAvailable(false);
  }

  useEffect(()=>{
    if(allPokemons==0){
      FetchPokemons();
    }else{

    }
    if(wordSearch.length>=3){
      Search();
    }else if(location.current=='results'){
      setNotFound(false);
      setSearchResults([]);
      setLocation({prev:location.current,current:"main"});
      setWordSearch('');
    }
  },[allPokemons,wordSearch]);

  const handleChange = e =>{
    const keyword = e.target.value; 
    setWordSearch(keyword.toLowerCase());
  }

  const Search = () =>{
    if(location.current!='results'){
      setLocation({prev:location.current,current:'results'});
    }
    const data = allPokemons.filter(pokemon =>{
      if(pokemon.name.includes(wordSearch)){
        return pokemon
      }
    });
    if(data.length>0){
        
      setNotFound(false);
      setSearchResults(data);
    }else{
      setSearchResults([]);
      setNotFound(true);
    }
  }

  const handleSubmit = e =>{
    e.preventDefault();
    if(wordSearch.length!=0){
      let id;
      if(isNaN(wordSearch)){
        
        id = searchResults.map(pokemon => {
          if(pokemon.name = wordSearch.toLocaleLowerCase()){
            return pokemon.id;
          }
        });
      }else{
        id=wordSearch;  
      }
      router.push(`/Pokemon/${id}`);
    }

  }

  return (
    <MainContext.Provider
      value={{
        location,
        wordSearch,
        searchAvailable,
        searchResults,
        allPokemons,
        notFound,
        setLocation,
        handleChange,
        handleSubmit,
        setSearchResults
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
 
export default MainState;