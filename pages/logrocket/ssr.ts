import { GetServerSideProps } from 'next';
import { getRandomAPI } from '../../api/logrocket/getRandomAPI';
import Page from '../../components/logrocket/Page';

export default Page;

export const getServerSideProps: GetServerSideProps = async () => {
  const entries = await getRandomAPI();

  return {
    props: {
      entries,
      pageInfo: {
        pageNm: 'SSR Page',
        pageDesc: 'Will be rerendered when a request comes in',
      },
    },
  };
};
