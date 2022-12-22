import { useRouter } from 'next/router';
import React from 'react';
import { IEntries } from '../../api/handler/logrocket/getRandomAPI';

export interface IPageInfo {
  pageNm: string;
  pageDesc: string;
}
function Page({
  entries,
  pageInfo,
}: {
  entries: IEntries;
  pageInfo: IPageInfo;
}) {
  const router = useRouter();

  if (router.isFallback)
    return (
      <div>
        <p>FallbackPage</p>
      </div>
    );

  return (
    <div style={{}}>
      <button onClick={() => router.back()}>Back</button>
      <h1 style={{ color: 'yellow' }}>{pageInfo.pageNm}</h1>
      <p style={{ color: 'red' }}>{pageInfo.pageDesc}</p>
      <h1>API : {entries.API}</h1>
      <p>{entries.Description}</p>
      <p>{entries.Auth}</p>
      <p>{entries.Link}</p>
    </div>
  );
}

export default Page;
