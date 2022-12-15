import getConfig from 'next/config';
import Link from 'next/link';
import { Seo } from '../components/Seo';
import useConfigContext from '../context/hooks/useConfigContext';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { PREFIX_HOME } = useConfigContext();

  return (
    <div className={styles.container}>
      <Seo pageNm="Home" />
      <main className={styles.main}>
        <div className={styles.grid}>
          <Link className={styles.card} href={`${PREFIX_HOME}ssr/`}>
            <p>Server Side Rendered List</p>
          </Link>
          <Link className={styles.card} href={`${PREFIX_HOME}csr/`}>
            <p>Client Side Rendered List</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
