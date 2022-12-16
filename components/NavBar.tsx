import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PREFIX_HOME } from '../config/config';
import useConfigContext from '../context/hooks/useConfigContext';

export const routerPaths = {
  home: '/',
  ssr: 'movies/ssr',
  csr: 'movies/csr',
  ssg: 'movies/ssg',
} as const;

export default function NavBar() {
  const router = useRouter();
  const [activeRoutePath, setActiveRoutePath] = useState('/');

  useEffect(() => {
    console.log('router.pathname', router.pathname);

    setActiveRoutePath(router.pathname);
  }, [router]);

  return (
    <nav>
      <Link href={`${routerPaths.home}`}>
        <p
          style={{
            borderBottom:
              activeRoutePath === routerPaths.home
                ? '2px solid dodgerblue'
                : '',
          }}
        >
          Home
        </p>
      </Link>
      <Link href={`${PREFIX_HOME}${routerPaths.ssr}`}>
        <p
          style={{
            borderBottom:
              activeRoutePath === '/' + routerPaths.ssr
                ? '2px solid dodgerblue'
                : '',
          }}
        >
          Server Side Rendered List
        </p>
      </Link>
      <Link href={`${PREFIX_HOME}${routerPaths.csr}`}>
        <p
          style={{
            borderBottom:
              activeRoutePath === '/' + routerPaths.csr
                ? '2px solid dodgerblue'
                : '',
          }}
        >
          Client Side Rendered List
        </p>
      </Link>
      <Link href={`${PREFIX_HOME}${routerPaths.ssg}`}>
        <p
          style={{
            borderBottom:
              activeRoutePath === '/' + routerPaths.ssg
                ? '2px solid dodgerblue'
                : '',
          }}
        >
          Server Side Generation List
        </p>
      </Link>

      <style jsx>{`
        nav {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          background-color: rgba(255, 255, 255, 0.3);
          padding: 10px;
        }

        @media screen and (max-width: 500px) {
          nav {
            flex-direction: column;
          }
        }

        p {
             border-bottom:${
               router.pathname === routerPaths.ssr ? '2px solid dodgerblue' : ''
             } 
          /* border-bottom: 2px solid transparent; */
          font-size: inherit;
        }

        p:hover {
          border-bottom: 2px solid dodgerblue;
        }
      `}</style>
    </nav>
  );
}
