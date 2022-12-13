import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <Link href={'/'}>
        <p>Home</p>
      </Link>
      <Link href={'/ssr'}>
        <p>ServerSideRendered</p>
      </Link>
      <Link href={'/csr'}>
        <p>ClientSideRendered</p>
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

        @media screen and (max-width: 410px) {
          nav {
            flex-direction: column;
          }
        }

        p {
          border-bottom: 2px solid transparent;
        }
        p:hover {
          border-bottom: 2px solid blue;
        }
      `}</style>
    </nav>
  );
}
