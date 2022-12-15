import Link from 'next/link';
import useConfigContext from '../context/hooks/useConfigContext';

export default function NavBar() {
  const { PREFIX_HOME } = useConfigContext();
  return (
    <nav>
      <Link href={PREFIX_HOME}>
        <p>Home</p>
      </Link>
      <Link href={`${PREFIX_HOME}/ssr`}>
        <p>Server Side Rendered List</p>
      </Link>
      <Link href={`${PREFIX_HOME}/csr`}>
        <p>Client Side Rendered List</p>
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

        @media screen and (max-width: 480px) {
          nav {
            flex-direction: column;
          }
        }

        p {
          border-bottom: 2px solid transparent;
          font-size: inherit;
        }

        p:hover {
          border-bottom: 2px solid dodgerblue;
        }
      `}</style>
    </nav>
  );
}
