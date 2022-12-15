import Head from 'next/head';

export function Seo({ pageNm }: { pageNm: string }) {
  return (
    <Head>
      <title>{`${pageNm} | NextJs Movies`}</title>
      <meta name="description" content="Generated by YUDS " />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}