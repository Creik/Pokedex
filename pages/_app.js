import NProgress from 'nprogress';
import Router from 'next/router';
import "nprogress/nprogress.css";
import MainState from '../context/mainState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 800,
    showSpinner: false,
  });
  
  Router.events.on('routeChangeStart', () => NProgress.start());
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());
  
  return (
    <MainState>
      <Component {...pageProps} />
    </MainState>
  )
}

export default MyApp
