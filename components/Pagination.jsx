import React, { useContext } from 'react';
import Link from 'next/link';
import MainContext from '../context/mainContext';
const Pagination = ({pag, max}) => {

  const mainContext = useContext(MainContext);

  const {location} = mainContext;

  if(location.current!='main'){
    return null
  }

  const prev = pag==1? '/' : '/?pag='+(pag-1);
  const next = '/?pag='+(pag+1);

  return (
    <>
    <style jsx>{`
      #container{
        width: 100%;
        display:flex;
        justify-content:center;
        margin-top: 1rem;
      }
      a {
        padding: 0.3rem 0.5rem;
        margin: 0rem 0.5rem;
      }
    `}</style>
    <ul id="container">
      {pag>0?
      <li>
        <Link href={prev}>
          <a>prev</a>  
        </Link>
      </li>
      :null
      }
      {pag<max?
      <li>
        <Link href={next}>
          <a>next</a>  
        </Link>
      </li>
      :null
      }
    </ul>
    </>
  );
}
 
export default Pagination;