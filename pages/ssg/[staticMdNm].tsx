import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { useRouter } from 'next/router';

import fs from 'fs';

import path from 'path';
import matter from 'gray-matter';
import { Seo } from '../../components/Seo';

export default function SsgMovieDetails({
  staticMdNm,
  contents,
  data,
}: InferGetStaticPropsType<typeof getStaticPaths> & {
  data: {
    [key: string]: any;
  };
}) {
  const router = useRouter();

  return (
    <div>
      <Seo pageNm={'ahah'} />
      <p>invoked static Movie page Nm === {staticMdNm}</p>
      <h1>.md file contents</h1>
      <pre>{`${contents}`}</pre>
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

  console.log('contents ===', parsedMarkdown.data);

  return {
    props: {
      staticMdNm,
      contents: parsedMarkdown.content,
      data: parsedMarkdown.data,
    },
  };
};
