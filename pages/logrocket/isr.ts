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
        pageDesc: `To Check the effect, Please clear the browser cache. \n(1) 첫 요청시 데이터 업데이트 \n(2) 모든 유저에게 10초동안 업데이트된 같은 화면 제공 \n(3) 10초 경과 후 첫 요청에 새로운 데이터 업데이트 \nrevalidate: 10s in this page / SSG like with an additional revalidate property that means how often to revalidate the page(in seconds).`,
      },
    },
    revalidate: 10,
  };
};
