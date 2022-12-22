import { GetStaticProps } from 'next';
import { getRandomAPI } from '../../api/handler/logrocket/getRandomAPI';
import Page from './ssr';

export default Page;

export const getStaticProps: GetStaticProps = async () => {
  const entries = await getRandomAPI();

  return {
    props: {
      entries,
      pageInfo: {
        pageNm: 'ISR Page',
        pageDesc:
          'SSG like with an additional revalidate property that means how often to revalidate the page(in seconds).',
      },
    },
    revalidate: 30,
  };
};
