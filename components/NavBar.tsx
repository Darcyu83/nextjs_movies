import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PREFIX_HOME } from '../api/config/config';

export const routerPaths = {
  home: '/',
  ssr: 'movies/ssr',
  csr: 'movies/csr',
  ssg: 'movies/ssg',
  isr: 'logrocket',
} as const;

const LinkP = styled.p<{ isActivePage: boolean }>`
  margin: 0px 10px;
  padding: 10px 0px;
  word-wrap: break-word;
  color: #fafafa;
  border-bottom: ${(props) =>
    props.isActivePage ? '2px solid dodgerblue' : '2px solid transparent'};

  &:hover {
    border-bottom: 2px solid cyan;
  }
`;

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
        <LinkP isActivePage={activeRoutePath === routerPaths.home}>Home</LinkP>
      </Link>

      <Link href={`${PREFIX_HOME}${routerPaths.ssr}`}>
        <LinkP isActivePage={activeRoutePath.includes('/' + routerPaths.ssr)}>
          Server Side Rendered List
        </LinkP>
      </Link>

      <Link href={`${PREFIX_HOME}${routerPaths.csr}`}>
        <LinkP isActivePage={activeRoutePath.includes('/' + routerPaths.csr)}>
          Client Side Rendered List
        </LinkP>
      </Link>
      <Link href={`${PREFIX_HOME}${routerPaths.ssg}`}>
        <LinkP isActivePage={activeRoutePath.includes('/' + routerPaths.ssg)}>
          Static Site Generation List
        </LinkP>
      </Link>

      <Link href={`${PREFIX_HOME}${routerPaths.isr}`}>
        <LinkP isActivePage={activeRoutePath.includes('/' + routerPaths.isr)}>
          Comparison of ISR, SSG and SSR
        </LinkP>
      </Link>

      <style jsx>{`
        nav {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          background-color: rgba(97, 111, 172, 0.6);
          padding: 10px;
        }

        @media screen and (max-width: 500px) {
          nav {
            flex-direction: column;
          }
        }

        p {
          border-bottom: 2px solid transparent;
          font-size: inherit;
        }
      `}</style>
    </nav>
  );
}
