import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { PREFIX_HOME } from '../../api/config/config';
import { IEntry } from '../../api/logrocket/getRandomAPI';

import styles from '../../styles/Home.module.css';

export interface IPageInfo {
  pageNm: string;
  pageDesc: string;
}
function Page({ entry, pageInfo }: { entry: IEntry; pageInfo: IPageInfo }) {
  const router = useRouter();

  if (router.isFallback)
    return (
      <div>
        <p>FallbackPage</p>
      </div>
    );

  const onRevalidateSSGpage = useCallback(async () => {
    await fetch(
      `${PREFIX_HOME}api/revalidate/?secret=yuds`,
      // `${PREFIX_HOME}api/revalidate/?secret=${process.env.REVALIDATION_KEY}`,
    );
  }, []);

  useEffect(() => {
    console.log('didMounted === page ');
    return () => {
      console.log('didUnmounted === page ');
    };
  }, []);

  return (
    <main className={styles.grid}>
      {/* <a href={`${PREFIX_HOME}api/revalidate/?secret=yuds`}>
        <button>Click to revalidate SSG with a tag</button>
      </a> */}

      <button onClick={onRevalidateSSGpage}>Click to revalidate SSG </button>

      <div className="container">
        <button onClick={() => router.back()}>Back</button>
        <h1 style={{ color: 'yellow' }}>{pageInfo.pageNm}</h1>
        <pre style={{ color: 'red', width: '100%' }}>{pageInfo.pageDesc}</pre>
        <h1 style={{ fontSize: '50px', textOverflow: 'ellipsis' }}>
          API : {entry.API}
        </h1>
        <p>{entry.Description}</p>
        <p>{entry.Auth}</p>
        <p>{entry.Link}</p>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          width: 90%;
          border: 1px solid #eaeaea;
          transition: color 0.15s ease, border-color 0.15s ease;
          border-radius: 10px;
          overflow: hidden;
          padding: 10px;
        }

        p,
        pre {
          white-space: pre-wrap;
          word-break: 'break-word';
        }
      `}</style>
    </main>
  );
}

export default React.memo(Page);
