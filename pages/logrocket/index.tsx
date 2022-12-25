import Link from 'next/link';
import React from 'react';
import { PREFIX_HOME } from '../../api/config/config';
import styles from '../../styles/Home.module.css';

function lsrLogRocketList() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {/* Server Side Rendered  */}
        <Link className={styles.card} href={`${PREFIX_HOME}logrocket/ssr/`}>
          <p>Server Side Rendered</p>
        </Link>

        {/* Static Site Generation */}
        <Link className={styles.card} href={`${PREFIX_HOME}logrocket/ssg/`}>
          <p>Static Site Generation</p>
        </Link>

        {/* Static Site Generationpage  */}
        <Link className={styles.card} href={`${PREFIX_HOME}logrocket/isr/`}>
          <p>Incremental Static Regeneration page</p>
        </Link>

        {/* Client Side Rendered  */}
        <Link className={styles.card} href={`${PREFIX_HOME}logrocket/csr/`}>
          <p>Client Side Rendered page</p>
        </Link>
      </div>
    </main>
  );
}

export default lsrLogRocketList;
