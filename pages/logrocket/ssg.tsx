import { GetStaticProps } from 'next';
import { getRandomAPI, IEntry } from '../../api/logrocket/getRandomAPI';
import Page from './ssr';

interface IProps {
  entries: IEntry;
  pageInfo: {
    pageNm: string;
    pageDesc: string;
  };
}

function LogRocketSsg({ entries, pageInfo }: IProps) {
  return (
    <div>
      <Page entries={entries} pageInfo={pageInfo} />
    </div>
  );
}

export default LogRocketSsg;

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
