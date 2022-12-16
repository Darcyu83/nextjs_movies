import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { useEffect, useState } from 'react';
import Head from 'next/head';

import fs from 'fs';

import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export default function SsgMovieDetails({
  staticMdNm,
  contents,
  htmlStringAsContents,
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [_contents, setContents] = useState('');

  useEffect(() => {
    setContents(contents);
  }, []);
  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <p>{`invoked static Movie page Nm === ${staticMdNm}`}</p>
      <h1>.md file contents</h1>
      <pre
        style={{ backgroundColor: 'rgba(255,0,255,0.3)' }}
      >{`${_contents}`}</pre>

      <h1>html String here</h1>
      <div
        style={{ backgroundColor: 'rgba(0,255,255,0.3)' }}
        dangerouslySetInnerHTML={{ __html: htmlStringAsContents }}
      />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('pages/static');

  const paths = files.map((fileNm) => ({
    params: { staticMdNm: fileNm.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false, //validate everything at build time
  };
};

const movieIds = {
  'Black Adam': 436270,
  Vendetta: 873126,
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log('ctx ===', ctx.params);
  const staticMdNm = ctx.params?.staticMdNm;

  const markdownWithMeta = fs
    .readFileSync(path.join('pages/static', staticMdNm + '.md'))
    .toString();

  const parsedMarkdown = matter(markdownWithMeta);

  const htmlString = marked(parsedMarkdown.content);
  return {
    props: {
      staticMdNm,
      contents: parsedMarkdown.content,
      data: parsedMarkdown.data,
      htmlStringAsContents: htmlString,
    },
  };
};
