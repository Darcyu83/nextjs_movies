import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { Seo } from '../components/Seo';
import useConfigContext from '../context/hooks/useConfigContext';
import styles from '../styles/Home.module.css';

import fs from 'fs';
import SsrList from './movies/ssr';

export default function Home({
  staticPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { PREFIX_HOME } = useConfigContext();

  return (
    <div className={styles.container}>
      <Seo pageNm="Home" />
      <main className={styles.main}>
        <div className={styles.grid}>
          {/* Server Side Rendered List */}
          <Link className={styles.card} href={`${PREFIX_HOME}movies/ssr/`}>
            <p>Server Side Rendered List</p>
          </Link>

          {/* Client Side Rendered List */}
          <Link className={styles.card} href={`${PREFIX_HOME}movies/csr/`}>
            <p>Client Side Rendered List</p>
          </Link>

          {/* Server Side Generation page List */}
          <Link className={styles.card} href={`${PREFIX_HOME}movies/ssg/`}>
            <p>Server Side Generation page List</p>
          </Link>

          {/* Increamental Static Regeneration page List */}
          <Link className={styles.card} href={`${PREFIX_HOME}movies/isr/`}>
            <p>Increamental Static Regeneration page List</p>
          </Link>
        </div>

        {/* Server Side Generation */}
        <div className={styles.grid}>
          {staticPosts.map((post: string) => (
            <Link
              key={post}
              className={styles.card}
              href={`${PREFIX_HOME}ssg/${post}`}
            >
              <p>Server Side Generation :{post.toUpperCase()}.md</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const staticFiles = fs.readdirSync('pages/static');

  return {
    props: {
      staticPosts: staticFiles.map((fileNm) => fileNm.replace('.md', '')),
    },
  };
};
