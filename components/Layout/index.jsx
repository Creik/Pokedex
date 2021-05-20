import React from 'react';
import Header from './Header';
import Main from './Main';

const Layout = (props) => {
  return (
    <div className="container">
      <Header/>
      <Main>
        {props.children}
      </Main>
    </div>
  );
}
 
export default Layout;