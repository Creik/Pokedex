import React, { useContext, useEffect } from 'react';
import MainContext from '../context/mainContext';
import Card from './Card';
import CardDetails from './CardDetails';

const Single = ({pokemon}) => {

  const mainContext = useContext(MainContext);

  const {location, setLocation} = mainContext;

  
  useEffect(()=>{
    setLocation({prev:location.current,current:'details'});
  },[])

  return (
    <>
       <style jsx>{`
        .single {
         display:flex;
         justify-content: space-around;
        }
      `}</style>
      <div className="single">
        <Card key={pokemon.id} pokemon={pokemon} location="details"/>
        <CardDetails pokemon={pokemon}/>
      </div>
    </>
  );
}
 
export default Single;