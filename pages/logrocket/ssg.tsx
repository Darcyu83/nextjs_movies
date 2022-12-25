import { GetStaticProps } from 'next';
import { getRandomAPI, IEntry } from '../../api/logrocket/getRandomAPI';
import Page from './ssr';

interface IProps {
  entry: IEntry;
  pageInfo: {
    pageNm: string;
    pageDesc: string;
  };
}

function LogRocketSsg({ entry, pageInfo }: IProps) {
  return (
    <div>
      <Page entry={entry} pageInfo={pageInfo} />
    </div>
  );
}

export default LogRocketSsg;

export const getStaticProps: GetStaticProps = async () => {
  const entry = await getRandomAPI();

  return {
    props: {
      entry,
      pageInfo: {
        pageNm: 'SSG Page',
        pageDesc: 'Will be rendered at a build time once and Never change',
      },
    },
  };
};
