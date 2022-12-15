import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Seo } from '../components/Seo';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Seo pageNm="Home" />
      <main className={styles.main}>
        <div className={styles.grid}>
          <Link className={styles.card} href={'/ssr'}>
            <p>Server Side Rendered List</p>
          </Link>
          <Link className={styles.card} href={'/csr'}>
            <p>Client Side Rendered List</p>
          </Link>
        </div>
      </main>
    </div>
  );
}