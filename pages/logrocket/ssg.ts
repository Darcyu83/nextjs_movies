import { GetStaticProps } from 'next';
import { getRandomAPI, IEntries } from '../../api/logrocket/getRandomAPI';
import { IPageInfo } from '../../components/logrocket/Page';
import Page from './ssr';

export default Page;

export const getStaticProps: GetStaticProps = async () => {
  const entries = await getRandomAPI();

  return {
    props: {
      entries,
      pageInfo: {
        pageNm: 'SSG Page',
        pageDesc: 'Will be rendered at a build time once and Never change',
      },
    },
  };
};
