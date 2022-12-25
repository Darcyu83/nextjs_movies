import { GetServerSideProps } from 'next';
import React from 'react';
import { getRandomAPI, IEntry } from '../../api/logrocket/getRandomAPI';
import Page from '../../components/logrocket/Page';

interface IProps {
  entry: IEntry;
  pageInfo: {
    pageNm: string;
    pageDesc: string;
  };
}

function LogRockeSsr({ entry, pageInfo }: IProps) {
  return (
    <div>
      <Page entry={entry} pageInfo={pageInfo} />
    </div>
  );
}

export default LogRockeSsr;

export const getServerSideProps: GetServerSideProps = async () => {
  const entry = await getRandomAPI();

  return {
    props: {
      entry,
      pageInfo: {
        pageNm: 'SSR Page',
        pageDesc: 'Will be rerendered when a request comes in',
      },
    },
  };
};
