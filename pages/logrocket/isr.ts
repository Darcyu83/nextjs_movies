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
        pageDesc: `To Check the effect, Please clear the browser cache. \n(1) 첫 요청시 데이터 업데이트 \n(2) 모든 유저에게 60초동안 업데이트된 같은 화면 제공 \n(3) 60초 경과 후 첫 요청에 새로운 데이터 업데이트 \nrevalidate: 60s in this page / SSG like with an additional revalidate property that means how often to revalidate the page(in seconds). \n\nSite builds and responds to user with static files from build
If less than 60 seconds, Next.js will respond to use with static files from build
If after 60 seconds, Next.js will first respond to a user with the static files from build, but additionally trigger a refresh of the page in the background
Next.js will now respond to users with the refreshed page`,
      },
    },
    revalidate: 60,
  };
};
