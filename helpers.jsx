import {useRouter} from 'next/router';
import {useEffect} from 'react';

export function RouterScroll() {
  const router = useRouter();
  useEffect(() => {
    const handler = () => {
      // document.getElementById('main').scrollTo('smooth', 0, 0);
      document.getElementById('main').scrollTo(0, 0);
      // window.scrollTo(0, 0);
    };
    router.events.on('routeChangeComplete', handler);
    return () => {
      router.events.off('routeChangeComplete', handler);
    };
  });
}